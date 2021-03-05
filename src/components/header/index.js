import React from 'react';
import './styles.css';
import Logo from './../../assets/graphics/logo.png';

const Header = () => {
    return (
        <header className="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img className="logoIMG" src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
};

export default Header;