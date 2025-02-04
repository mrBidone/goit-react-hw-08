import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import css from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectLoadingAuthUser } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
  const isLoading = useSelector(selectLoadingAuthUser);

  return (
    <>
      <AppBar />
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={null}>
          <main className={css.mainSection}>{children}</main>
        </Suspense>
      )}
      <Footer />
    </>
  );
};

export default Layout;
