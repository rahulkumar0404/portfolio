import { Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FaRegSmileWink } from 'react-icons/fa';
// images
import { ticTacToeImage } from '../../constants';
import './Projects.css';
const Projects = () => {
  const projects = [1, 2, 3];
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            key={project}
            url="https://zingy-vacherin-a34b48.netlify.app/"
            projectImage={ticTacToeImage}
            projectTitle="Tic Tac Toe"
            description="Basic Game between two player for X-O"
            technologies="React"
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: '100 1.2rem Ubuntu Mono' }}>
        All the Projects Shown are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="blank">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={{ color: '#282828b3' }}>
          <Delete />
        </Button>
      )}
    </>
  );
};
export default Projects;
