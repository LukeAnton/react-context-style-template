import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
//-------------Suggested For User Based App---------------//
// import AuthContext from "../../context/auth/authContext";
const PrivateRoute = ({ component, Component, ...rest }) => {
  //-------------Suggested For User Based App---------------//
  // const authContext = useContext(AuthContext);
  // const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
