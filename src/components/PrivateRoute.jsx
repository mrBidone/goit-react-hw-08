import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router";

export const PrivateRoute = ({ component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
};
