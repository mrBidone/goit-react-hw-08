import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar>{children}</AppBar>
    </div>
  );
};

export default Layout;
