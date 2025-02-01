import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
