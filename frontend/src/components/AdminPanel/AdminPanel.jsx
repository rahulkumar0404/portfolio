import { Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { AiOutlineProject } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { MdTimeline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './AdminPanel.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logoutUser } from '../../actions/login';
import { loginActions } from '../../reducers/login';
import { updateUser } from '../../actions/updateUser';
import { useAlert } from 'react-alert';
import { updateUserAction } from '../../reducers/updateUser';
const AdminPanel = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [skills, setSkills] = useState({});
  const [about, setAbout] = useState({});
  const alert = useAlert();
  const dispatch = useDispatch();
  const { message: loginMessage } = useSelector((state) => state.login);
  const { message, error, onUpdateLoading: loading } = useSelector(
    (state) => state.updateUser
  );
  useEffect(() => {
    if (loginMessage) {
      alert.success(loginMessage);
      dispatch(loginActions.onClearMessage());
    }
    if (message) {
      alert.success(message);
      dispatch(updateUserAction.onClearMessage());
    }
    if (error) {
      alert.error(error);
      dispatch(updateUserAction.onClearError());
    }
  }, [alert, loginMessage, message, error, dispatch]);

  function submitHandler(event) {
    event.preventDefault();
    dispatch(updateUser(name, email, password, skills, about));
  }

  function handleAboutImage(e) {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avatar: Reader.result });
      }
    };
  }

  function handleImages(e, value) {
    const file = e.target.files[0];
    const imageNumber = `image${value}`;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setSkills({ ...skills, [imageNumber]: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  }
  function logoutHandler() {
    dispatch(logoutUser());
  }

  return (
    <div className="adminPanel">
      <div className="adminPanelContainer">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: '1vmax' }}>N</p>
          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="adminPanelInputs"
          />

          <div className="adminPanelSkill">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div key={number}>
                <Typography>SKILL {number}</Typography>
                <input
                  type="file"
                  onChange={(e) => handleImages(e, number)}
                  accept="image/*"
                  className="adminPanelFileUpload"
                />
              </div>
            ))}
          </div>

          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input
                type="text"
                placeholder="Name"
                value={about.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Title"
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="text"
                placeholder="Subtitle"
                value={about.subtitle}
                onChange={(e) =>
                  setAbout({ ...about, subtitle: e.target.value })
                }
                className="adminPanelInputs"
              />
              <textarea
                placeholder="Description"
                rows="7"
                cols="10"
                value={about.description}
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
                className="adminPanelInputs adminPanelInputTextarea"
              />
              <input
                type="text"
                placeholder="Quote"
                value={about.quote}
                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
                className="adminPanelInputs"
              />
              <input
                type="file"
                placeholder="Choose Avatar"
                accept="image/*"
                onChange={handleAboutImage}
                className="adminPanelFileUpload adminAboutFileUpload"
              />
            </fieldset>
          </div>

          <Link to="/admin/timeline">
            TIMELINE <MdTimeline />
          </Link>
          <Link to="/admin/youtube">
            YOUTUBE <FaYoutube />
          </Link>
          <Link to="/admin/project">
            PROJECTS <AiOutlineProject />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? 'Please Wait While Update....' : 'Update'}
          </Button>
        </form>

        <Button
          variant="contained"
          color="error"
          style={{ display: 'block', margin: '4vmax auto' }}
          onClick={logoutHandler}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
