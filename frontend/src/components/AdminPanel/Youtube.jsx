import { Typography, Button } from '@mui/material';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateUserAction } from '../../reducers/updateUser';
import { addYoutube } from '../../actions/updateUser';
import { getUser } from '../../actions/user';
import YoutubeCard from '../YoutubeCards/YoutubeCard.jsx';
import { loginActions } from '../../reducers/login.js';
const Youtube = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [image, setImage] = useState('');

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
    await dispatch(addYoutube(title, url, image));
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

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? 'Please Wait While Uploading....' : 'Add'}
          </Button>
        </form>

        <div className="adminPanelYoutubeVideos">
          {user &&
            user.user.youtube &&
            user.user.youtube.map((item) => (
              <YoutubeCard
                key={item._id}
                url={item.url}
                title={item.title}
                image={item.image.url}
                isAdmin={true}
                id={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
