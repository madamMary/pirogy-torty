import Search from "../Search/Search";
import "../../style/header.css";
import Logo from "./Logo";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="stiky__header col-12">
        <div className="logo__header">
        <Logo />          
        </div>
        <div className="search__header">
          <Search />
        </div>

        <div className="info__header">
          <Link to="/catalog" title="Каталог" className="header__txt">
            <span className="info__catalog">Каталог</span>
          </Link>

          <div className="info__about"></div>

          <div className="basket__icon"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
