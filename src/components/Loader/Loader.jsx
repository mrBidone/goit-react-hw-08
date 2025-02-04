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
      <FadeLoader color="#e70fb1" />
    </div>
  );
};

export default Loader;
