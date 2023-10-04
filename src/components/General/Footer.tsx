import "../../style/footer.css";

import { Link } from "react-router-dom";
import { Instagram, Telegram } from "react-bootstrap-icons";

import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <div className="sticky__footer">
        <div className="footer__logo">
          <Logo />
          <p>8 (937) 876 45 37</p>
        </div>

        <div className="footer__about">
          <p>Каталог</p>
          <Link to="/pies" className="footer__txt">
            <p>Пироги</p>
          </Link>
          <Link to="/cakes" className="footer__txt">
            <p>Торты</p>
          </Link>
        </div>

        <div className="footer__about">
          <p>Про нас</p>
          <Link to="/baker" className="footer__txt">
            <p>О пекарне</p>
          </Link>
          <Link to="/team" className="footer__txt">
            <p>О команде</p>
          </Link>
        </div>

        <div className="footer__media">
          <div className="footer__icon">
            <Link
              to="https://instagram.com/pirogi_torty_73?igshid=MzRlODBiNWFlZA=="
              className="footer__txt"
            >
              <Instagram />
            </Link>
            <Link to="/" className="footer__txt">
              <Telegram />
            </Link>
          </div>

          <div className="footer__copyright">
            <h6 className="footer__txt">Pirogy&Torty©</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
