import { NavLink } from "react-router";
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {isLoggedIn && user && <p>Hello, {user.name}!</p>}
      {!isLoggedIn && <NavLink to="/login"> Login </NavLink>}
      {!isLoggedIn && <NavLink to="/register">Registration</NavLink>}
    </nav>
  );
};

export default Navigation;
