import { useEffect } from 'react';
import * as THREE from 'three';
import { Typography } from '@mui/material';
import TimeLine from '../Timeline/Timeline';
import './Home.css';
// files
import { moonImage, venusImage, spaceImage } from '../../constants.js';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';
import YoutubeCard from '../YoutubeCards/YoutubeCard';
import { Link } from 'react-router-dom';
import { MouseOutlined } from '@mui/icons-material';

const Home = ({ timeline, youtube, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector('.homeCanvas');
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0x00ff00, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener('mousemove', (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY < window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x += constSpeed;
        venus.rotation.y += constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener('scroll', () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById('homeskillsBox');

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = 'homeSkillsBoxAnimationOn';
      } else {
        skillsBox.style.animationName = 'homeSkillsBoxAnimationOff';
      }
    });
  }, []);

  const SkillsObjects = ({ skills }) => {
    return (
      <div className="homeCubeSkills">
        {Object.keys(skills).map((key, index) => {
          const childObj = skills[key];
          return (
            <div
              key={key}
              className={`homeCubeSkillsFaces homeCubeSkillsFace${index + 1}`}
            >
              <img src={childObj.url} alt="Css" />
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="Home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>R</p>
          <p>A</p>
          <p>H</p>
          <p>U</p>
          <p style={{ marginBottom: '25px' }}>L</p>
          <p>K</p>
          <p>U</p>
          <p>M</p>
          <p>A</p>
          <p>R</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">TEACHER</Typography>
        </div>

        <Link to="/projects">Projects</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
        <Typography variant="h3">Timeline</Typography>
        <TimeLine timelines={timeline} />
      </div>

      <div className="homeSkils">
        <Typography variant="h3">SKILLS</Typography>

        <SkillsObjects skills={skills} />
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox" id="homeskillsBox">
          <FaJava />
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiReact />
          <SiNodedotjs />
          <SiExpress />
          <SiMongodb />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3">Short Video</Typography>
        <div className="homeYoutubeWrapper">
          {youtube.map((item) => (
            <YoutubeCard
              key={item._id}
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
