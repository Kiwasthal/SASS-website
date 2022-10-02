import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgOne from '../assets/project-1.jpg';
import imgTwo from '../assets/project-2.jpg';
import imgThree from '../assets/project-3.jpg';
import imgFour from '../assets/project-4.jpg';
import imgFive from '../assets/project-5.jpg';
import imgSix from '../assets/project-6.jpg';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const ProjectSection = () => {
  return (
    <main>
      <section className="projects">
        <div className="projects-bio-image">
          <h1 className="text-secondary">My Projects</h1>
        </div>

        <div className="projects-items">
          <div className="projects-item">
            <img src={imgOne} alt="" />
            <div className="projects-btns">
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faEye} className="fa-lg" /> Preview
              </a>
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faGithub} className="fa-lg" /> Github
              </a>
            </div>
          </div>
          <div className="projects-item">
            <img src={imgTwo} alt="" />
            <div className="projects-btns">
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faEye} className="fa-lg" /> Preview
              </a>
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faGithub} className="fa-lg" /> Github
              </a>
            </div>
          </div>
          <div className="projects-item">
            <img src={imgThree} alt="" />
            <div className="projects-btns">
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faEye} className="fa-lg" /> Preview
              </a>
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faGithub} className="fa-lg" /> Github
              </a>
            </div>
          </div>
          <div className="projects-item">
            <img src={imgFour} alt="" />
            <div className="projects-btns">
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faEye} className="fa-lg" /> Preview
              </a>
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faGithub} className="fa-lg" /> Github
              </a>
            </div>
          </div>
          <div className="projects-item">
            <img src={imgFive} alt="" />
            <div className="projects-btns">
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faEye} className="fa-lg" /> Preview
              </a>
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faGithub} className="fa-lg" /> Github
              </a>
            </div>
          </div>
          <div className="projects-item">
            <img src={imgSix} alt="" />
            <div className="projects-btns">
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faEye} className="fa-lg" /> Preview
              </a>
              <a href="#!" className="projects-btns-btn">
                <FontAwesomeIcon icon={faGithub} className="fa-lg" /> Github
              </a>
            </div>
          </div>
        </div>

        <div className="social-icons">
          <a href="#!">
            <FontAwesomeIcon icon={faTwitter} className="fa-xl" />
          </a>
          <a href="#!">
            <FontAwesomeIcon icon={faFacebook} className="fa-xl" />
          </a>
          <a href="#!">
            <FontAwesomeIcon icon={faLinkedin} className="fa-xl" />
          </a>
          <a href="#!">
            <FontAwesomeIcon icon={faGithub} className="fa-xl" />
          </a>
        </div>

        <footer>&copy; Copyright 2022</footer>
      </section>
    </main>
  );
};

export default ProjectSection;
