/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/pages/auth/AuthPage`, `src/pages/home/HomePage`).
 */

import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";
import { LayoutContextProvider } from "../../_metronic";
import Layout from "../../_metronic/layout/Layout";
import AuthPage from "../pages/auth/AuthPage";
import LogoutPage from "../pages/auth/Logout";
import ErrorPage1 from "../pages/errors/ErrorPage1";
import HomePage from "../pages/home/HomePage";
import * as routerHelpers from "../router/RouterHelpers";

export const Routes = withRouter(({ history }) => {
  const lastLocation = useLastLocation();
  routerHelpers.saveLastLocation(lastLocation);
  const { isAuthorized, menuConfig, userLastLocation } = useSelector(
    ({ auth, urls, builder: { menuConfig } }) => ({
      menuConfig,
      isAuthorized: Boolean(auth.authToken),
      userLastLocation: routerHelpers.getLastLocation(),
    }),
    shallowEqual
  );

  return (
    /* Create `LayoutContext` from current `history` and `menuConfig`. */
    <LayoutContextProvider history={history} menuConfig={menuConfig}>
      <Switch>
        {!isAuthorized ? (
          /* Render auth page when user at `/auth` and not authorized. */
          <AuthPage />
        ) : (
          /* Otherwise redirect to root page (`/`) */
          <Redirect from="/auth" to={userLastLocation} />
        )}

        <Route path="/error" component={ErrorPage1} />
        <Route path="/logout" component={LogoutPage} />

        {!isAuthorized ? (
          /* Redirect to `/auth` when user is not authorized */
          <Redirect to="/auth/login" />
        ) : (
          <Layout>
            <HomePage userLastLocation={userLastLocation} />
          </Layout>
        )}
      </Switch>
    </LayoutContextProvider>
  );
});
