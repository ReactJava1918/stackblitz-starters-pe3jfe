// src/hoc/withAuth.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Redirect } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  return function WithAuth(props) {
    const { user } = useContext(UserContext);

    if (!user) {
      // If the user is not authenticated, redirect to the login page
      return <Redirect to="/login" />;
    }

    // If the user is authenticated, render the protected component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
