import { CiHeart } from "react-icons/ci";
import { FaGithubSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.mainContainer}>
          <h2 className={css.mainTitle}>Phonebook</h2>
          <p className={css.description}>
            A simple and convenient application for managing contacts.
          </p>
        </div>
        <div className={css.contactsContainer}>
          <h3 className={css.footerSubTitle}>
            Made with <CiHeart color="#e70fb1" /> from this guy.
          </h3>
          <ul className={css.contactsList}>
            <li className={css.contactsListItem}>
              <a
                className={css.contactsLink}
                href="https://www.instagram.com/allo_eto_bidon/"
                target="blank"
                referrerPolicy="no-referrer"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li className={css.contactsListItem}>
              <a
                className={css.contactsLink}
                href="https://www.linkedin.com/in/abidenko/"
                target="blank"
                referrerPolicy="no-referrer"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className={css.contactsListItem}>
              <a
                className={css.contactsLink}
                href="https://github.com/mrBidone"
                target="blank"
                referrerPolicy="no-referrer"
                title="GitHub"
              >
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className={css.sourceCode}>
          <h3 className={css.footerSubTitle}>Source code</h3>
          <a
            className={css.contactsLink}
            href="https://github.com/mrBidone/goit-react-hw-08"
            target="blank"
            referrerPolicy="no-referrer"
            title="GitHub Project`s link"
          >
            <FiGithub />
          </a>
        </div>
      </div>
      <div className={css.privacyPolicy}>
        <p>
          © {new Date().getFullYear()} Phonebook by mrBidone. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
