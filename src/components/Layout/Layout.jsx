import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import css from "./Layout.module.css";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <main className={css.mainSection}>{children}</main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
