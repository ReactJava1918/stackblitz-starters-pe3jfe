// src/components/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/a">A</Link>
        </li>

        {user ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Header;
