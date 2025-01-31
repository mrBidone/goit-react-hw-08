import { useDispatch, useSelector } from "react-redux";
import { apiLogoutThunk } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  return (
    <div>
      <p>Hello, {user.name}!</p>
      <p>Email: {user.email}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(apiLogoutThunk());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
