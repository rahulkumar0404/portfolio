import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { useState, useEffect } from 'react';
import { addTimeline, deleteTimeline } from '../../actions/updateUser';
import { updateUserAction } from '../../reducers/updateUser';
import { Button, Typography } from '@mui/material';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getUser } from '../../actions/user';
import DeleteIcon from '@mui/icons-material/Delete';
const Timeline = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState();
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    message,
    error,
    onUpdateLoading: loading,
  } = useSelector((state) => state.updateUser);

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (message) {
      alert.success(message);
      dispatch(updateUserAction.onClearMessage());
    }
    if (error) {
      alert.error(error);
      dispatch(updateUserAction.onClearError());
    }
  }, [alert, message, error, dispatch]);

  const submitHandler = async (event) => {
    event.preventDefault();
    await dispatch(addTimeline(title, description, date));
    dispatch(getUser());
  };

  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id));
    dispatch(getUser())
  };

  const dateFormattor = (datevalue) => {
    const date = new Date(datevalue);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return formattedDate
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
          <textarea
            placeholder="Description"
            rows="7"
            cols="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="adminPanelInputs adminPanelInputTextarea"
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="adminPanelInputs"
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? 'Please Wait While Add....' : 'Add'}
          </Button>
        </form>
        <div className="adminPanelYoutubeVideos">
          {user &&
            user.user.timeline &&
            user.user.timeline.map((item) => (
              <div key={item._id} className="youtubeCard">
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: '2px' }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {dateFormattor(item.date)}
                </Typography>

                <Button
                  style={{
                    margin: 'auto',
                    display: 'block',
                    color: '#282828b3',
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
