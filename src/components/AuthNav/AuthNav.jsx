import { NavLink } from "react-router";
import GradientText from "../GradientText/GradientText";
import clsx from "clsx";

import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink
        className={({ isActive }) =>
          clsx(css.pageNavLink, isActive && css.linkActive)
        }
        to="/login"
      >
        Sign in
      </NavLink>
      <GradientText
        colors={["#000000", "#e70fb1", "#000000", "#e70fb1", "#000000"]}
        animationSpeed={5}
        showBorder={true}
        className={css.customGradient}
      >
        <NavLink to="/register">Register</NavLink>
      </GradientText>
    </div>
  );
};

export default AuthNav;
