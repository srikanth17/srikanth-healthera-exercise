import React from 'react';

const Header = () => (
    <div className="header">
        <img src="https://healthera.co.uk/wp-content/themes/healthera/static/min/img/logo.svg"
             width={130}
             height={20}
             alt="Healthera"
             style={{ margin: 5 }}
        />
        <ul className="nav navbar-right">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" aria-expanded="false">
                    fatty@healthera.co.uk <span className="caret"></span>
                </a>
            </li>
        </ul>
    </div>
);

export default Header;