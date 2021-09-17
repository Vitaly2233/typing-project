import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import { AuthContext } from "../Context/Auth";
import { privateRoutes, publicRoutes } from "../router";

export default function AppRouter() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Switch>
      {privateRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/home" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Redirect to="/auth" />
    </Switch>
  );
}
