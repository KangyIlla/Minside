import React from "react";
import '../App.css';

function Menu() {
    return (
        <nav className="navMenu navbar navbar-expand-md justify-content-center">
            <ul className="navbar nav mr-auto">
                <li className="nav-item"><a className="nav-link" href="#/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#/Movie">Movies</a></li>
                <li className="nav-item"><a className="nav-link" href="#/Character">Characters</a></li>
            </ul>
        </nav>
    );
};

export default Menu;