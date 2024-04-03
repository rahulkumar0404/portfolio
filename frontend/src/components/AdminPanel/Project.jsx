import { Typography, Button } from '@mui/material';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateUserAction } from '../../reducers/updateUser';
import { addProject } from '../../actions/updateUser';
import { getUser } from '../../actions/user';
import { ProjectCard } from '../Projects/Projects.jsx';
import { loginActions } from '../../reducers/login.js';

const Project = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState('');
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    message,
    error,
    onUpdateLoading: loading,
  } = useSelector((state) => state.updateUser);

  const { message: loginMessage } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (message) {
      alert.success(message);
      dispatch(updateUserAction.onClearMessage());
    }
    if (loginMessage) {
      alert.success(loginMessage);
      dispatch(loginActions.onClearMessage());
    }
    if (error) {
      alert.error(error);
      dispatch(updateUserAction.onClearError());
    }
  }, [alert, message, error, dispatch, loginMessage]);

  const submitHandler = async (event) => {
    event.preventDefault();
    await dispatch(addProject(title, url, image, description, techStack));
    dispatch(getUser());
  };

  function handleAboutImage(e) {
    const file = e.target.files[0];
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImage(Reader.result);
      }
    };
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
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="text"
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="adminPanelInputs"
          />
          <input
            type="file"
            placeholder="Choose Image"
            accept="image/*"
            onChange={handleAboutImage}
            className="adminPanelFileUpload"
          />

          <textarea
            placeholder="Description"
            rows="7"
            cols="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs adminPanelInputTextarea"
          />

          <input
            type="text"
            placeholder="TechStack"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="adminPanelInputs"
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? 'Please Wait While Uploading....' : 'Add'}
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.user.projects &&
            user.user.projects.map((item) => (
              <ProjectCard
                key={item._id}
                url={item.url}
                projectImage={item.image.url}
                projectTitle={item.title}
                description={item.description}
                technologies={item.techStack}
                isAdmin="true"
                id={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
