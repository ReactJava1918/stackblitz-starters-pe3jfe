// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/a">A</Link>
        </li>

         
      </ul>
    </nav>
  );
};

export default Header;
