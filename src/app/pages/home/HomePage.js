import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard";
import Users from "../users";
import UserDetail from "../users/UserDetail";
import Tutorials from "../tutorials";
import TutorialDetail from "../tutorials/TutorialDetail";
import Roles from "../roles";
import { LayoutSplashScreen } from "../../../_metronic";

export default function HomePage() {
  // useEffect(() => {
  //   console.log('Home page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:id" component={UserDetail} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route path="/tutorials/:id" component={TutorialDetail} />
        <Route path="/roles" component={Roles} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
