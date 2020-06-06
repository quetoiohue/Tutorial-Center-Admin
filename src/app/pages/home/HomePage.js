import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LayoutSplashScreen } from "../../../_metronic";
const Dashboard = lazy(async () => await import("../dashboard"));
const Users = lazy(async () =>await  import("../users"));
const UserDetail = lazy(async () => await import( "../users/UserDetail"));
const Tutorials = lazy(async () => await import("../tutorials"));
const TutorialDetail = lazy(async () =>await  import("../tutorials/TutorialDetail"));
const Roles = lazy(async () => await import("../roles"));

export default function HomePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/:userId" component={UserDetail} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route path="/tutorials/:tutorialId" component={TutorialDetail} />
        <Route path="/roles" component={Roles} />
        <Redirect to="/error/error-v1" />
      </Switch>
    </Suspense>
  );
}
