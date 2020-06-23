import {
  Assignment,
  Chat,
  Person,
  TrendingUp,
  Visibility,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingProgress from "../../components/LoadingProgress";
import usePeriod from "../../hooks/usePeriod";
import { periodOptions } from "../../mockData/users";
import DrawingChart from "../../partials/content/DrawingChart";
import { SelectField } from "../../partials/content/Form";
import { Portlet, PortletBody } from "../../partials/content/Portlet";
import SocialTicket from "../../partials/content/Socials/SocialTicket";
import dashboadActions from "../../store/ducks/actions/dashboard";

const DashboardTicket = ({ label, value, icon, color }) => {
  return (
    <div className="col my-2">
      <SocialTicket
        label={label}
        value={value}
        color={color}
        icon={icon}
        classStyle={"ticket-box"}
      />
    </div>
  );
};

const DashboardStatistical = () => {
  const dispatch = useDispatch();
  const { overview } = useSelector((store) => store.dashboard);
  const { data, isFetching } = overview || {};
  const { view, post, comment, user } = data || {};

  React.useEffect(() => {
    dispatch(dashboadActions.getOverview());
  }, []);
  return (
    <>
      {data && (
        <div className="row mb-3">
          <DashboardTicket
            label="Views"
            value={view}
            color={"warning"}
            icon={<Visibility />}
          />
          <DashboardTicket
            label="Posts"
            value={post}
            color={"success"}
            icon={<Assignment />}
          />
          <DashboardTicket
            label="Users"
            value={view}
            color={"second"}
            icon={<Person />}
          />
          <DashboardTicket
            label="Comments"
            value={comment}
            color={"primary"}
            icon={<Chat />}
          />
        </div>
      )}
    </>
  );
};

const UserStatistical = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.dashboard);
  const [period, handleChangePeriod] = usePeriod();
  const { data, isFetching } = users;

  React.useEffect(() => {
    dispatch(
      dashboadActions.getUserOverview({
        period: period === "day" ? "date" : period,
      })
    );
  }, [period]);

  if (data.length === 0) return null;
  const userStatistical = data.length && (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
      <div className="kt-portlet__head kt-portlet__head--select">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">Latest Updates</h3>
        </div>
        <SelectField
          value={period}
          onChange={handleChangePeriod}
          options={periodOptions}
          label={"Period"}
        />
      </div>
      <PortletBody fluid={true}>
        <div className="kt-widget12">
          <div className="kt-widget12__chart" style={{ height: "250px" }}>
            <DrawingChart
              labels={data.map((_user) => _user.date)}
              values={data.map((_user) => _user.value)}
            />
          </div>
        </div>
      </PortletBody>
    </Portlet>
  );
  return <>{isFetching ? <LoadingProgress /> : userStatistical}</>;
};

const TutorialStatistical = () => {
  const dispatch = useDispatch();
  const { tutorials } = useSelector((store) => store.dashboard);
  const [period, handleChangePeriod] = usePeriod();
  const { data, isFetching } = tutorials;
  React.useEffect(() => {
    dispatch(
      dashboadActions.getTutorialOverview({
        period: period === "day" ? "date" : period,
      })
    );
  }, [period]);
  if (data.length === 0) return null;
  const tutorialStatistical = data.length && (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
      <div className="kt-portlet__head kt-portlet__head--select">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">Latest Updates</h3>
        </div>
        <SelectField
          value={period}
          onChange={handleChangePeriod}
          options={periodOptions}
          label={"Period"}
        />
      </div>
      <PortletBody fluid={true}>
        <div className="kt-widget12">
          <div className="kt-widget12__chart" style={{ height: "250px" }}>
            <DrawingChart
              labels={data.map((_tutorial) => _tutorial.date)}
              values={data.map((_tutorial) => _tutorial.value)}
            />
          </div>
        </div>
      </PortletBody>
    </Portlet>
  );
  return <>{isFetching ? <LoadingProgress /> : tutorialStatistical}</>;
};

const CommentStatistical = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((store) => store.dashboard);
  const [period, handleChangePeriod] = usePeriod();
  const { data, isFetching } = comments;

  React.useEffect(() => {
    dispatch(
      dashboadActions.getCommentOverview({
        period: period === "day" ? "date" : period,
      })
    );
  }, [period]);

  if (data.length === 0) return null;
  const commentStatistical = data.length && (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
      <div className="kt-portlet__head kt-portlet__head--select">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">Latest Updates</h3>
        </div>
        <SelectField
          value={period}
          onChange={handleChangePeriod}
          options={periodOptions}
          label={"Period"}
        />
      </div>
      <PortletBody fluid={true}>
        <div className="kt-widget12">
          <div className="kt-widget12__chart" style={{ height: "250px" }}>
            <DrawingChart
              labels={data.map((_comment) => _comment.date)}
              values={data.map((_comment) => _comment.value)}
            />
          </div>
        </div>
      </PortletBody>
    </Portlet>
  );
  return <>{isFetching ? <LoadingProgress /> : commentStatistical}</>;
};

const ViewStatistical = () => {
  const dispatch = useDispatch();
  const { views } = useSelector((store) => store.dashboard);
  const [period, handleChangePeriod] = usePeriod();
  const { data, isFetching } = views;

  React.useEffect(() => {
    dispatch(
      dashboadActions.getViewOverview({
        period: period === "day" ? "date" : period,
      })
    );
  }, [period]);

  if (data.length === 0) return null;
  const viewStatistical = data.length && (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
      <div className="kt-portlet__head kt-portlet__head--select">
        <div className="kt-portlet__head-label">
          <h3 className="kt-portlet__head-title">Latest Updates</h3>
        </div>
        <SelectField
          value={period}
          onChange={handleChangePeriod}
          options={periodOptions}
          label={"Period"}
        />
      </div>
      <PortletBody fluid={true}>
        <div className="kt-widget12">
          <div className="kt-widget12__chart" style={{ height: "250px" }}>
            <DrawingChart
              labels={data.map((_view) => _view.date)}
              values={data.map((_view) => _view.value)}
            />
          </div>
        </div>
      </PortletBody>
    </Portlet>
  );
  return <>{isFetching ? <LoadingProgress /> : viewStatistical}</>;
};

const Dashboard = () => {
  console.log("rerender");

  return (
    <>
      <div className="layout-header-toolbar">
        <TrendingUp className="header-toolbar-icon" />
        <h1>Dashboard</h1>
      </div>
      <div className="row my-3">
        <DashboardStatistical />
      </div>
      <div className="row my-3">
        <div className="col-6">
          <UserStatistical />
        </div>
        <div className="col-6">
          <TutorialStatistical />
        </div>
        <div className="col-6">
          <ViewStatistical />
        </div>
        <div className="col-6">
          <CommentStatistical />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
