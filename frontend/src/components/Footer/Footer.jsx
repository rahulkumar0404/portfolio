import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey my name is Rahul Kumar and I am a <b>Full-Stack Developer</b> and
          a Freelancer
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div className="footerSocialMedia">
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/rahulkumar0404" target="blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-kumar-58a527190/"
          target="blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/rahul703320/" target="blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
