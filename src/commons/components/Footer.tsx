import { Instagram, Telegram } from "react-bootstrap-icons";
import { HashLink as Link } from "react-router-hash-link";

import Logo from "./Logo";
import Layout from "./Layout";

const Footer: React.FC = () => {
  return (
    <footer>
      <Layout>
        <div className="footer">
          <div className="footer__logo">
            <Logo />
            <h6>8 (937) 876 45 37</h6>
          </div>

          <div className="footer__info">
            <div className="footer__links">
              <p>Каталог</p>
              <Link to="/pies">
                <p>Пироги</p>
              </Link>
              <Link to="/cakes">
                <p>Торты</p>
              </Link>
            </div>

            <div className="footer__links">
              <p>Про нас</p>
              <Link to="/info#bakery">
                <p>О пекарне</p>
              </Link>
              <Link to="/info#team">
                <p>О команде</p>
              </Link>
            </div>

            <div className="footer__links">
              <div className="footer__links_socials">
                <Link to="https://instagram.com/pirogi_torty_73?igshid=MzRlODBiNWFlZA==">
                  <Instagram />
                </Link>
                <Link to="/">
                  <Telegram />
                </Link>
              </div>

              <h6>© 2023 Pirogy&Torty</h6>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
