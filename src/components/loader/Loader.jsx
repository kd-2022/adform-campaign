import "./Loader.css";

const Loader = () => {
  return (
    <>
    <div className="overlay"></div>
      <div className="absolute w-1/2 top-50 left-50 border border-gray-400">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Loader;
