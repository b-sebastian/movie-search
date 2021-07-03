import React from "react";
import {useHistory} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import "./Header.css"

const Header = () => {
    const history = useHistory();

    return (
        <div className='header'>
            <h1 className='header-title' onClick={() => history.push('/')}>Simple Movie Search</h1>
            <SearchBar/>
        </div>
    );
};

export default Header;
