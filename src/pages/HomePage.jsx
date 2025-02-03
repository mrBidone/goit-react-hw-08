import { useSelector } from "react-redux";
import Squares from "../components/Squares/Squares";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors";
import { Link } from "react-router";
import SplitText from "../components/SplitText/SplitText";
import { FaReact } from "react-icons/fa";
import { SiReactrouter, SiAxios, SiRedux, SiFormik } from "react-icons/si";
import { GrToast } from "react-icons/gr";

const HomePage = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className="pageContainer">
      <div className="heroContainer">
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

            <p className="heroDescr">
              Easily <span className="accentHeroDescr">manage</span> your
              contacts with our intuitive and efficient phonebook
              application.&nbsp;
              <span className="accentHeroDescr">Store</span>, edit, and organize
              your <span className="accentHeroDescr">contacts</span> in just a
              few <span className="accentHeroDescr">clicks</span>.
            </p>
            {!isLoggedIn && (
              <div className="heroLinksWrapper">
                <Link className="heroLink" to="/login">
                  Sign in
                </Link>
              </div>
            )}
          </Squares>
        </div>
      </div>
      <div className="container sectionWrapper">
        <section className="section aboutSection">
          <h2>About the Project</h2>
          <p>
            Phonebook is a simple yet powerful contact management application
            built with modern web technologies. It allows users to add, edit,
            and delete contacts with ease. The user-friendly interface ensures a
            smooth experience, whether you`re managing a few contacts or an
            extensive list.
          </p>
        </section>
        <section className="section featuresSection">
          <h2>Key Features</h2>
          <ul>
            <li>Add, edit, and delete contacts</li>
            <li>Instant feedback with toast notifications</li>
            <li>Responsive and user-friendly design</li>
            <li>Fast and secure contact storage</li>
          </ul>
          <p>Start managing your contacts effortlessly today! </p>
        </section>
      </div>
      <div className="container">
        <section className="section technologiesSection">
          <h2 className="sectionTitle">Technologies Used</h2>
          <ul className="technologiesList">
            <li className="technologiesListItem">
              <FaReact />
              <p>React.js</p>
            </li>
            <li className="technologiesListItem">
              <SiRedux />
              <p>Redux Toolkit</p>
            </li>
            <li className="technologiesListItem">
              <SiReactrouter />
              <p>React Router</p>
            </li>
            <li className="technologiesListItem">
              <SiAxios />
              <p>Axios</p>
            </li>
            <li className="technologiesListItem">
              <SiFormik />
              <p>Formik</p>
            </li>
            <li className="technologiesListItem">
              <GrToast />
              <p>React Hot Toast</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
