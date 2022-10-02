import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const AboutSection = () => {
  return (
    <main>
      <section className="about">
        <div className="about-bio-image">
          <div className="about-bio">
            <h2 className="text-secondary">BIO</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              incidunt dignissimos ab nihil. Quae adipisci error quo repellendus
              inventore? Sapiente reprehenderit maiores ex repellat commodi
              cumque pariatur eveniet rerum aliquid!
            </p>
          </div>
        </div>
        <div className="jobs">
          <div className="jobs-job">
            <h2 className="text-secondary">2017 - Current</h2>
            <h3>Freelance</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam earum accusamus commodi! Dolorum, sunt explicabo id
              reprehenderit sequi rem sapiente?
            </p>
          </div>
          <div className="jobs-job">
            <h2 className="text-secondary">2015 - 2017</h2>
            <h3>Industry</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam earum accusamus commodi! Dolorum, sunt explicabo id
              reprehenderit sequi rem sapiente?
            </p>
          </div>
          <div className="jobs-job">
            <h2 className="text-secondary">2012 - 2015</h2>
            <h3>Web Design Co.</h3>
            <h6>Graphic Designer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam earum accusamus commodi! Dolorum, sunt explicabo id
              reprehenderit sequi rem sapiente?
            </p>
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

export default AboutSection;
