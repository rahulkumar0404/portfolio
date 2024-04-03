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
import Project from './components/AdminPanel/Project.jsx';

// actions
import { getUser } from './actions/user.js';
import { loadUser } from './actions/login.js';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  console.log(user);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home
                youtube={user.youtube}
                timeline={user.timeline}
                skills={user.skills}
              />
            ) : null
          }
        />
        <Route path="/about" element={user ? <About about={user.about}/>: null} />
        <Route path="/projects" element={user ? <Projects projects={user.projects}/>: null} />
        <Route path="/contact" element={user ?  <Contact /> : null } />
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
        <Route
          path="/admin/project"
          element={isAuthenticated ? <Project /> : <Login />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
