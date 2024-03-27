import { useEffect } from 'react';
import * as THREE from 'three';
import { Typography } from '@mui/material';
import TimeLine from '../Timeline/Timeline';
import './Home.css';
// files
import moonImage from '../../Images/moon.jpg';
import venusImage from '../../Images/venus.jpg';
import spaceImage from '../../Images/space.jpg';
import cssImage from '../../Images/css.svg';
import mongodbImage from '../../Images/html.svg';
import javascriptImage from '../../Images/javascript.svg';
import expressImage from '../../Images/express.svg';
import nodeJsImage from '../../Images/nodejs.svg';
import reactImage from '../../Images/React.png';
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

const Home = () => {
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

      //  const skillsBox = document.getElementById('homeskillsBox');

      //  if (window.scrollY > 1500) {
      //    skillsBox.style.animationName = 'homeskillsBoxAnimationOn';
      //  } else {
      //    skillsBox.style.animationName = 'homeskillsBoxAnimationOff';
      //  }
    });
  }, []);
  return (
    <div className="Home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeContainer">
        <Typography variant="h3">Timeline</Typography>
        <TimeLine timelines={[1, 2, 3, 4, 5]} />
      </div>

      <div className="homeSkils">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={cssImage} alt="Css" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={mongodbImage} alt="Mongodb" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={expressImage} alt="Express" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={nodeJsImage} alt="NodeJs" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={javascriptImage} alt="Javascript" />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={reactImage} alt="React" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
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
        <Typography variant='h3'>SHORT VIDEOS</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard image={expressImage} title="Sample"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
