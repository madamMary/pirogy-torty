import image from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={image} alt="Pirogy&Torty" />
    </Link>
  );
};

export default Logo;