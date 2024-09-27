import React from "react";
import logo from "../assets/logo-desktop.svg";
import discordIcon from "../assets/discord-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container-secondary">
          <div className="footer__container-secondary-left-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="footer__container-secondary-social">
            <a href="#" className="footer__container-secondary-social-link">
              <img src={discordIcon} alt="Discord" />
            </a>
            <a href="#" className="footer__container-secondary-social-link">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="#" className="footer__container-secondary-social-link">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="#" className="footer__container-secondary-social-link">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="footer__container-primary">
          <div className="footer__container-primary-left">
            <h1 className="footer__container-primary-left-title">
              Stay up to date
            </h1>
            <p className="footer__container-primary-left-description">
              with new challenges, featured solutions, selected articles and our
              latest news
            </p>
            <div className="footer__container-primary-left-form">
              <input type="email" placeholder="email@example.com" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer__container-primary-right">
            <div className="footer__container-primary-right-link-groups">
              <div className="footer__container-primary-right-link-group">
                <h3 className="footer__container-primary-right-link-group-title">
                  Frontend Mentor
                </h3>
                <ul className="footer__container-primary-right-link-group-list">
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Unlock Pro</a>
                  </li>
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Contact us</a>
                  </li>
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
              <div className="footer__container-primary-right-link-group">
                <h3 className="footer__container-primary-right-link-group-title">
                  Explore
                </h3>
                <ul className="footer__container-primary-right-link-group-list">
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Learning paths</a>
                  </li>
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Challenges</a>
                  </li>
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Solutions</a>
                  </li>
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Articles</a>
                  </li>
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Resources</a>
                  </li>
                </ul>
              </div>
              <div className="footer__container-primary-right-link-group">
                <h3 className="footer__container-primary-right-link-group-title">
                  Community
                </h3>
                <ul className="footer__container-primary-right-link-group-list">
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Discord</a>
                  </li>
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Guidelines</a>
                  </li>
                </ul>
              </div>
              <div className="footer__container-primary-right-link-group">
                <h3 className="footer__container-primary-right-link-group-title">
                  For Companies
                </h3>
                <ul className="footer__container-primary-right-link-group-list">
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Hire developers</a>
                  </li>
                  <li className="footer__container-primary-right-link-group-list-item">
                    <a href="#">Train developers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
