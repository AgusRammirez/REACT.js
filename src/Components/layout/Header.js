import React from "react";

import "../../Styles/components/layout/Header.css";

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img/logo.png" width={100} alt="Botanica"></img>
                <h1>BOTANICA</h1>
            </div>
        </header>
    );
}

export default Header; 