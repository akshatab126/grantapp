//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Login from "./pages/Login"
//import About from "./pages/About"
import ProjectForm from "./pages/ProjectForm";
import Signup from "./pages/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from './pages/Explore';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<Dashboard/>}/>
          <Route path="/projectdetails" element={<ProjectForm />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

/*//import logo from './logo.svg';
//import './App.css';
//import { useState } from 'react';

function App() {
  return (
    <>
    <Header/>
    
    </>
  );
}

export default App;
*///