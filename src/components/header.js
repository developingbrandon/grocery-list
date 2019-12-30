import React from 'react';

function Header(props) {
    if (props.loggedIn === true) {
        return (
            <div className="header">
                <span>Grocery List</span>
                <ul>
                    <li><a href="#h1">Home</a></li>
                    <li><a href="#h1">My Lists</a></li>
                    <li><a href="#h1">Logout</a></li>
                </ul>

            </div>
        );
    } else {
        return (
            <div className="header">
                <span>Grocery List</span>
                <ul>
                    <li><a href="#h1">Home</a></li>
                    <li><a href="#h1">Login</a></li>
                </ul>

            </div>
        );
    }
}

export default Header;