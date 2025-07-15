import { motion } from "framer-motion";
import WebGLBackground from "./components/BgComponent";
import FloatingOrbs from "./components/Floatingorbs";
import Footer from "./components/Footer";
import ScrollDownComponent from "./components/Scrolldown";
import Navbar from "./components/Navbar";
import './index.css';

export default function Home() {
  return (
    <div className="font-inter bg-black will-change-scroll">
      <Navbar />

      <motion.section 
        id="home"
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >

        <div className="absolute inset-0 w-full h-full">
          <div
            className="rotate-47 absolute origin-center blur-[1px] will-change-transform"
            style={{
              width: '141.42%',
              height: '150%',
              left: '-20%',
              top: '25%',
              transform: 'translate3d(0,0,0)',
            }}
           
          >
            <FloatingOrbs />
            <WebGLBackground />
          </div>

          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-black z-20 pointer-events-none" />
        </div>

        <motion.div 
          className="relative z-30 flex-1 flex flex-col items-center justify-center gap-10 pb-48"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <motion.h1 
            className="text-4xl bg-gradient-to-b from-white to-gray-400 bg-clip-text sm:text-5xl md:text-7xl font-semibold uppercase text-transparent"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Not just another app
          </motion.h1>

          <motion.h2
            className="text-xl md:text-3xl font-light uppercase 
              bg-gradient-to-b from-white via-gray-100 to-gray-700 
              bg-clip-text text-transparent"
            style={{ textShadow: '1px 1px 8px rgba(255, 255, 255, 0.2)' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Your second brain for self-growth
          </motion.h2>
        </motion.div>

        <motion.div 
          className="relative z-30 pb-8 text-md text-white flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          
          <ScrollDownComponent />
        </motion.div>

      </motion.section>

      <motion.section 
        id="about"
        className="bg-black min-h-screen p-8 flex flex-col items-center text-white text-center pt-60"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl pb-4 pt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          What is Second Brain?
        </motion.h2>
        
        <motion.p 
          className="max-w-3xl text-lg leading-relaxed text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            A Second Brain is a trusted external system for organizing and storing your thoughts, ideas, tasks, and knowledge, so you can think more clearly,
            create more effectively, and focus on what truly matters.
            It acts as an extension of your mind, helping you capture insights,
            reflect with intention, and make better decisions without mental overload.
          </span>
        </motion.p>

        <motion.div 
          className="flex items-center justify-center p-6 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="group relative bg-transparent border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-full transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-base md:text-lg font-medium">Get Started</span>
            <div className="absolute inset-0 border border-gray-900 rounded-sm opacity-0  transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>

        <motion.div 
          id="features"
          className="min-h-screen pt-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 
            className="text-6xl text-center mb-20 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Core Features
          </motion.h3>
          
          <div className="grid grid-cols-2 gap-12">
            {[
              { 
                title: "Capture Everything", 
                description: "Instantly save notes, links, and thoughts in one place. Your ideas stay organized, searchable, and ready when you need them",
                gradients: ['bg-gradient-to-r', 'bg-gradient-to-b'], 
                delay: 0.1 
              },
              { 
                title: "Organize with Ease", 
                description: "Smart tags and categories turn scattered information into a clean, structured knowledge hub--no more digital mess.",
                gradients: ['bg-gradient-to-l', 'bg-gradient-to-b'], 
                delay: 0.2 
              },
              { 
                title: "Find Anything Fast", 
                description: "Forget digging through folders. Powerful search lets you retrieve any note or file in seconds",
                gradients: ['bg-gradient-to-r', 'bg-gradient-to-t'], 
                delay: 0.3 
              },
              { 
                title: "Think Smarter", 
                description: "Connect ideas, spot patterns, and unlock insights you didn’t know you had. A true extension of your mind.",
                gradients: ['bg-gradient-to-l', 'bg-gradient-to-t'], 
                delay: 0.4 
              }
            ].map((card, index) => (
              <motion.div 
                key={index}
                className="relative h-80 lg:w-[40rem] rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: card.delay, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02, 
                  transition: { duration: 0.3 } 
                }}
                viewport={{ once: true }}
              >
                <div className={`absolute inset-0 ${card.gradients[0]} from-transparent via-transparent to-gray-400 opacity-50`}></div>
                <div className={`absolute inset-0 ${card.gradients[1]} from-transparent via-transparent to-gray-400 opacity-50`}></div>
                <div className="absolute inset-[1px] rounded-3xl bg-black"></div>
                <motion.div 
                  className="relative z-10 p-8 text-white h-full flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: card.delay + 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-3xl pb-4 font-semibold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {card.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-light tracking-normal">
                    {card.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.section>

      <motion.section 
        id="pricing"
        className="bg-black min-h-screen p-8 text-white pt-60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-5xl text-center pt-20 mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Choose Your Plan
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-400 mb-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Start your journey towards better productivity and knowledge management
        </motion.p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "Free",
              description: "Perfect for individuals getting started",
              features: ["Up to 100 notes", "Basic organization", "Mobile app access", "2GB storage"],
              popular: false
            },
            {
              name: "Pro", 
              price: "$9.99/month",
              description: "For professionals and power users",
              features: ["Unlimited notes", "AI-powered insights", "Advanced search", "50GB storage", "Team collaboration"],
              popular: true
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For teams and organizations",
              features: ["Everything in Pro", "Custom integrations", "Priority support", "Unlimited storage", "Advanced analytics"],
              popular: false
            }
          ].map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${plan.popular ? 'bg-neutral-900' : 'bg-neutral-950 border border-gray-800'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 text-white">
                  {plan.price}
                </div>
                <p className="text-gray-400 mb-8">{plan.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'border border-gray-600 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        id="contact"
        className="bg-black min-h-screen p-8 text-white pt-60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Mind?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Join thousands of professionals, students, and creatives who've already transformed their productivity with SecondBrain.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-white to-gray-300 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:border-black"
            >
              Start Free Trial
            </motion.button>
            
            <motion.button
              className="border border-gray-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300  hover:border-gray-500"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "50K+", label: "Active Users" },
              { number: "1M+", label: "Notes Created" },
              { number: "99.9%", label: "Uptime" },
              { number: "4.9★", label: "User Rating" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
}