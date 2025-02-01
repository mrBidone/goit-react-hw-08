import { NavLink } from "react-router";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className={css.pageNav}>
      <NavLink
        className={({ isActive }) =>
          clsx(css.pageNavLink, isActive && css.linkActive)
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) =>
            clsx(css.pageNavLink, isActive && css.linkActive)
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
