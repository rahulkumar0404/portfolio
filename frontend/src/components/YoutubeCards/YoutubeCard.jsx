import './YoutubeCard.css';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteYoutube } from '../../actions/updateUser';
import { getUser } from '../../actions/user';

const YoutubeCard = ({
  url = '/',
  title = 'Title Here',
  image,
  isAdmin = 'false',
  id,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    await dispatch(deleteYoutube(id));
    dispatch(getUser());
  };
  return (
    <div className="youtubeCard">
      <a href={url} target="blank" />
      <img src={image} alt="video" />
      <Typography>{title}</Typography>
      {isAdmin && (
        <Button
          style={{ margin: 'auto', display: 'block', color: '#282828b3' }}
          onClick={() => deleteHandler(id)}
        >
          <DeleteIcon />
        </Button>
      )}
    </div>
  );
};

export default YoutubeCard;
