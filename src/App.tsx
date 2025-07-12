import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from ".";
import Navbar from "./components/Navbar";
import './index.css'
export default function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </Router>
  )
};

