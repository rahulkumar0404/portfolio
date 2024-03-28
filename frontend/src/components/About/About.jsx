import './About.css';
import { Typography } from '@mui/material';
import profileImage from '../../Images/profileImage.png';
const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a sample quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={profileImage} alt="profilePhoto" className="aboutProfile" />
          <Typography
            variant="h4"
            style={{ margin: '1vmax 0', color: '#000000' }}
          >
            Rahul Kumar
          </Typography>
          <Typography style={{ margin: '1vmax 0' }}>
            Full Stack Developer
          </Typography>
          <Typography>Also a Freelancer</Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: '5px',
              lineHeight: '50px',
              letterSpacing: '5px',
              textAlign: 'right',
            }}
          >
            This is description, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur ipsum voluptas facere non, unde dolorum
            laudantium aperiam autem 
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
