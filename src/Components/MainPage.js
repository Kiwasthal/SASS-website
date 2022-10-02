import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const HomeSection = () => {
  return (
    <main>
      <section className="home">
        <h2>Hi! My Name Is</h2>
        <h1 className="home-name">
          Panos <span className="home-name-last">Koul</span>
        </h1>
        <h2 className="home-title">Full-Stack Developer and Designer</h2>

        <div className="social-icons">
          <a href="#!">
            <FontAwesomeIcon icon={faTwitter} className="" />
          </a>
          <a href="#!">
            <FontAwesomeIcon icon={faFacebook} className="" />
          </a>
          <a href="#!">
            <FontAwesomeIcon icon={faLinkedin} className="" />
          </a>
          <a href="#!">
            <FontAwesomeIcon icon={faGithub} className="" />
          </a>
        </div>

        <footer>&copy; Copyright 2022</footer>
      </section>
    </main>
  );
};

export default HomeSection;
