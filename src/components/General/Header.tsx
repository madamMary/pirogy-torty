import "../../style/header.css";

import Search from "../Search/Search";
import Logo from "./Logo";

import { Cart } from "react-bootstrap-icons";
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
          <div className="info__main">
            <Link to="/" title="Главная" className="header__txt">
              <span className="info__main">Главная</span>
            </Link>
          </div>

          <div className="info__catalog">
            <Link to="/catalog" title="Каталог" className="header__txt">
              <span className="info__catalog">Каталог</span>
            </Link>
          </div>

          <div className="info__about">
            <Link to="/info" title="О нас" className="header__txt">
              <span className="info">О нас</span>
            </Link>
          </div>

          <div className="basket__icon">
            <Link to="/basket" title="Корзина" className="header__txt">
              <Cart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
