import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <main>
      <section className="contact">
        <h2>Contact Me..</h2>
        <div className="contact-list">
          <div className="contact-email">
            <FontAwesomeIcon icon={faEnvelope} />
            Email
            <div className="text-secondary">email@email.com</div>
          </div>
          <div className="contact-phone">
            <FontAwesomeIcon icon={faPhoneAlt} />
            Phone
            <div className="text-secondary">69329+++</div>
          </div>
          <div className="contact-adress">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            Address
            <div className="text-secondary">123 First Street,Athens Greece</div>
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

export default ContactSection;
