import css from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="footer-content">
        <div className="footer-section">
          <h2>Phonebook</h2>
          <p>A simple and convenient application for managing contacts.</p>
        </div>
        <div className="footer-section">
          <h3>Связаться с нами</h3>
          <p>Email: support@phonebook.com</p>
          <p>Телефон: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Мы в соцсетях</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Phonebook. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
