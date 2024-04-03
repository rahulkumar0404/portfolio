import { Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import { FaRegSmileWink } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import './Projects.css';
import { deleteProject } from '../../actions/updateUser';
import { getUser } from '../../actions/user';
const Projects = ({projects = []}) => {
  return (
    <div className="projects">
      <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>
      <div className="projectWrapper">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            url={project.url}
            projectImage={project.image.url}
            projectTitle={project.title}
            description={project.description}
            technologies={project.techStack}
          />
        ))}
      </div>

      <Typography variant="h3" style={{ font: '100 1.2rem Ubuntu Mono' }}>
        All the Projects Shown are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };
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
        <Button
          style={{ color: '#282828b3' }}
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};
export default Projects;
