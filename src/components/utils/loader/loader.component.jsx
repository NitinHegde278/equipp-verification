import "./loader.styles.css";
import LogoGif from "../../../assets/images/loading.gif";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <img className="img loader" src={LogoGif} alt="Logo Gif" />
    </div>
  );
};

export default Loader;
