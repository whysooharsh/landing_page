import React, { useEffect, useRef } from 'react';

// picked up this from codepen 

const WebGLBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Vertex shader: simple pass-through of positions.
    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader: computes a background image layer and an animated layer,
    // then blends them (animation on top at 50% opacity), with brightness boosting.
    const fsSource = `
      precision mediump float;
      uniform float t;
      uniform vec2 r;  // resolution
      
      // Custom tanh function for vec2 since built-in tanh is unavailable in WebGL GLSL.
      vec2 myTanh(vec2 x) {
        vec2 ex = exp(x);
        vec2 emx = exp(-x);
        return (ex - emx) / (ex + emx);
      }
      
      void main() {
        vec4 o_bg = vec4(0.0);
        vec4 o_anim = vec4(0.0);

        // ---------------------------
        // Background (Image) Layer
        // ---------------------------
        {
          // Use gl_FragCoord.xy (pixel coordinates).
          vec2 p_img = (gl_FragCoord.xy * 2.0 - r) / r.y * mat2(1.0, -1.0, 1.0, 1.0);
          vec2 l_val = myTanh(p_img * 5.0 + 2.0);
          l_val = min(l_val, l_val * 3.0);
          vec2 clamped = clamp(l_val, -2.0, 0.0);
          float diff_y = clamped.y - l_val.y;
          // Avoid division by zero with a small epsilon:
          float safe_px = abs(p_img.x) < 0.001 ? 0.001 : p_img.x;
          float term = (0.1 - max(0.01 - dot(p_img, p_img) / 200.0, 0.0) * (diff_y / safe_px))
                       / abs(length(p_img) - 0.7);
          o_bg += vec4(term);
          // Ensure non-negative values:
          o_bg *= max(o_bg, vec4(0.0));
        }

        // ---------------------------
        // Foreground (Animation) Layer
        // ---------------------------
        {
          vec2 p_anim = (gl_FragCoord.xy * 2.0 - r) / r.y / 0.7;
          vec2 d = vec2(-1.0, 1.0);
          float denom = 0.1 + 5.0 / dot(5.0 * p_anim - d, 5.0 * p_anim - d);
          vec2 c = p_anim * mat2(1.0, 1.0, d.x / denom, d.y / denom);
          vec2 v = c;
          // Apply a time-varying transformation:
          v *= mat2(cos(log(length(v)) + t * 0.2 + vec4(0.0, 33.0, 11.0, 0.0))) * 5.0;
          vec4 animAccum = vec4(0.0);
          for (int i = 1; i <= 9; i++) {
            float fi = float(i);
            animAccum += sin(vec4(v.x, v.y, v.y, v.x)) + vec4(1.0);
            v += 0.7 * sin(vec2(v.y, v.x) * fi + t) / fi + 0.5;
          }
          vec4 animTerm = 1.0 - exp(-exp(c.x * vec4(0.6, -0.4, -1.0, 0.0))
                            / animAccum
                            / (0.1 + 0.1 * pow(length(sin(v / 0.3) * 0.2 + c * vec2(1.0, 2.0)) - 1.0, 2.0))
                            / (1.0 + 7.0 * exp(0.3 * c.y - dot(c, c)))
                            / (0.03 + abs(length(p_anim) - 0.7)) * 0.2);
          o_anim += animTerm;
        }

        // ---------------------------
        // Blend Layers: animation at 50% opacity over image.
        // Boost brightness so output isn't pitch black.
        // ---------------------------
        vec4 finalColor = mix(o_bg, o_anim, 0.5) * 1.5;
        finalColor = clamp(finalColor, 0.0, 1.0);
        
        // Convert to grayscale using luminance formula
        float gray = dot(finalColor.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor = vec4(gray, gray, gray, finalColor.a);
      }
    `;

    // Shader compilation utility.
    function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile failed with: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    // Program creation utility.
    function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string): WebGLProgram | null {
      const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
      const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
      if (!vertexShader || !fragmentShader) return null;
      
      const program = gl.createProgram();
      if (!program) return null;
      
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program failed to link: ' + gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      return program;
    }

    const program = createProgram(gl, vsSource, fsSource);
    if (!program) return;

    gl.useProgram(program);

    // Get attribute and uniform locations.
    const positionLocation = gl.getAttribLocation(program, 'a_position');
    const timeLocation = gl.getUniformLocation(program, 't');
    const resolutionLocation = gl.getUniformLocation(program, 'r');

    // Set up a full-screen quad.
    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Resize canvas.
    function resize() {
      if (!canvas || !gl) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
    window.addEventListener('resize', resize);
    resize();

    let startTime = performance.now();
    let animationId: number;

    // Render loop.
    function render() {
      if (!canvas || !gl) return;
      let currentTime = performance.now();
      let delta = (currentTime - startTime) / 1000;
      gl.uniform1f(timeLocation, delta);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    }
    animationId = requestAnimationFrame(render);

    // Cleanup function
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block"
    />
  );
};

export default WebGLBackground;