import React from "react";
import Logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="stiky__header">
                <div className="logo__header">
                    <img src={Logo} />
                </div>
            </div>
        </header>
    );
};

export default Header;
