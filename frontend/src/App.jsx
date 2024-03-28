import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contacts/Contact.jsx';
import Login from './components/Login/Login.jsx';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
