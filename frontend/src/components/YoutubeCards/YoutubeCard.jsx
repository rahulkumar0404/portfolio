import './YoutubeCard.css';
import { Typography } from '@mui/material';
const YoutubeCard = ({ url = '/', title = 'Title Here', image }) => {
  return (
    <div className="youtubeCard">
      <a href={url} target="blank" />
      <img src={image} alt="video" />
      <Typography>{title}</Typography>
    </div>
  );
};

export default YoutubeCard;
