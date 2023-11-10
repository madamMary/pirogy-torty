import Layout from "./Layout";
import Logo from "./Logo";
import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Layout>
        <div className="header">
          <div className="header__logo">
            <Logo />
          </div>

          <div className="header__info">
            <Link to="/" title="Главная">
              <span>Главная</span>
            </Link>

            <Link to="/catalog" title="Каталог">
              <span>Каталог</span>
            </Link>

            <Link to="/info" title="О нас">
              <span>О нас</span>
            </Link>

            <Link to="/basket" title="Корзина">
              <Cart />
            </Link>
          </div>
        </div>
      </Layout>
    </header>
  );
};

export default Header;
