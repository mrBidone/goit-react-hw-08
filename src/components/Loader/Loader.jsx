import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <FadeLoader color="#f7f5f5" />
    </div>
  );
};

export default Loader;
