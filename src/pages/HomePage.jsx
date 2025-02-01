import { useSelector } from "react-redux";
import Squares from "../components/Squares/Squares";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors";
import { Link } from "react-router";
import AuthNav from "../components/AuthNav/AuthNav";
import SplitText from "../components/SplitText/SplitText";

const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className="hero-container">
      <section className="section">
        <div className="pageHero">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="#909090"
            hoverFillColor="#e70fb1"
          >
            <h1>
              <SplitText
                text="Welcome to Phonebook!"
                className="mainTitle"
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            </h1>

            <p>
              Easily manage your contacts with our intuitive and efficient
              phonebook application. Store, edit, and organize your contacts in
              just a few clicks.
            </p>
            {!isLoggedIn && (
              <div className="heroLinks">
                <Link to="/login">Sign in</Link>
                <Link to="/register">Register</Link>
              </div>
            )}
          </Squares>
        </div>
      </section>
      <section className="section">
        <h2>About the Project</h2>
        <p>
          Phonebook is a simple yet powerful contact management application
          built with modern web technologies. It allows users to add, edit, and
          delete contacts with ease. The user-friendly interface ensures a
          smooth experience, whether you`re managing a few contacts or an
          extensive list.
        </p>
      </section>
      <section className="section">
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <p>React.js</p>
          </li>
          <li>
            <p>Redux Toolkit</p>
          </li>
          <li>
            <p>React Router</p>
          </li>
          <li>
            <p>Axios</p>
          </li>
          <li>
            <p>JSON Server (for mock API)</p>
          </li>
          <li>
            <p>React Hot Toast</p>
          </li>
        </ul>
      </section>
      <section className="section">
        <h2>Key Features</h2>
        <ul>
          <li>Add, edit, and delete contacts</li>
          <li>Instant feedback with toast notifications</li>
          <li>Responsive and user-friendly design</li>
          <li>Fast and secure contact storage</li>
        </ul>
        <p>Start managing your contacts effortlessly today! 🚀</p>
      </section>
    </div>
  );
};

export default HomePage;
