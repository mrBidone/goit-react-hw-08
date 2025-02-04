import { useDispatch, useSelector } from "react-redux";
import { apiLogoutThunk } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import css from "./UserMenu.module.css";
import toast from "react-hot-toast";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  return (
    <div className={css.userMenu}>
      <div className={css.userData}>
        <p className={css.userDataText}>
          <FaRegUserCircle color="rgb(231, 15, 177)" />
          <span className={css.currentName}>{user.name}</span>
        </p>
        <p className={css.userDataText}>
          <MdOutlineAlternateEmail color="rgb(231, 15, 177)" />
          <span className={css.currentMail}>{user.email}</span>
        </p>
      </div>

      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => {
          dispatch(apiLogoutThunk()).then(() =>
            toast.success("Logout completed successfully!")
          );
        }}
      >
        Logout
        <IoMdLogOut />
      </button>
    </div>
  );
};

export default UserMenu;
