import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div className={css.container}>
      <header className={css.pageHeader}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </div>
  );
};

export default AppBar;
