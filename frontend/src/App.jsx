import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Contact from './components/Contacts/Contact.jsx';
import Login from './components/Login/Login.jsx';
import AdminPanel from './components/AdminPanel/AdminPanel.jsx';
import Timeline from './components/AdminPanel/Timeline.jsx';
import Youtube from './components/AdminPanel/Youtube.jsx';
// actions
import { getUser } from './actions/user.js';
import { loadUser } from './actions/login.js';

function App() {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.login);
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
