import {
  Assignment,
  Chat,
  Person,
  TrendingUp,
  Visibility
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import usePeriod from "../../hooks/usePeriod";
import { periodOptions } from "../../mockData/users";
import DrawingChart from "../../partials/content/DrawingChart";
import { SelectField } from "../../partials/content/Form";
import LoadingProgress from "../../partials/content/LoadingProgress";
import { Portlet, PortletBody } from "../../partials/content/Portlet";
import SocialTicket from "../../partials/content/Socials/SocialTicket";
import dashboadActions from "../../store/ducks/actions/dashboard";
import { handleFormatChartData } from "../../utils";

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
  const { data } = overview || {};
  const { view, post, comment, user } = data || {};

  React.useEffect(() => {
    dispatch(dashboadActions.getOverview());
  }, [dispatch]);
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
            value={user}
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
  const { period, handleChangePeriod } = usePeriod();
  const { data, isFetching } = users;
  const [chartData, setChartData] = React.useState({
    labels: [],
    values: [],
  });
  const { labels, values } = chartData;

  React.useEffect(() => {
    dispatch(
      dashboadActions.getUserOverview({
        period: period === "day" ? "date" : period,
      })
    );
  }, [period, dispatch]);

  React.useEffect(() => {
    getFormatChartData();
  }, [getFormatChartData, data]);

  const getFormatChartData = React.useCallback(() => {
    const { labels, values } = handleFormatChartData(data, period);
    setChartData((chartData) => ({
      ...chartData,
      labels,
      values,
    }));
  }, [data]);

  const userStatistical = React.useMemo(() => {
    return (
      <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
        <div className="kt-portlet__head kt-portlet__head--select">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title"> User Overview </h3>
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
              <DrawingChart labels={labels} values={values} unit="user" />
            </div>
          </div>
        </PortletBody>
      </Portlet>
    );
  }, [chartData]);

  return <>{isFetching ? <LoadingProgress /> : userStatistical}</>;
};

const TutorialStatistical = () => {
  const dispatch = useDispatch();
  const { tutorials } = useSelector((store) => store.dashboard);
  const { period, handleChangePeriod } = usePeriod();
  const { data, isFetching } = tutorials;
  const [chartData, setChartData] = React.useState({
    labels: [],
    values: [],
  });
  const { labels, values } = chartData;

  React.useEffect(() => {
    dispatch(
      dashboadActions.getTutorialOverview({
        period: period === "day" ? "date" : period,
      })
    );
  }, [period, dispatch]);

  React.useEffect(() => {
    getFormatChartData();
  }, [getFormatChartData, data]);

  const getFormatChartData = React.useCallback(() => {
    const { labels, values } = handleFormatChartData(data, period);
    setChartData((chartData) => ({
      ...chartData,
      labels,
      values,
    }));
  }, [data]);

  const tutorialStatistical = React.useMemo(() => {
    return (
      <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
        <div className="kt-portlet__head kt-portlet__head--select">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Tutorial Overview</h3>
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
              <DrawingChart labels={labels} values={values} unit="tutorial" />
            </div>
          </div>
        </PortletBody>
      </Portlet>
    );
  }, [chartData]);
  return <>{isFetching ? <LoadingProgress /> : tutorialStatistical}</>;
};

const CommentStatistical = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((store) => store.dashboard);
  const { period, handleChangePeriod } = usePeriod();
  const { data, isFetching } = comments;
  const [chartData, setChartData] = React.useState({
    labels: [],
    values: [],
  });
  const { labels, values } = chartData;

  React.useEffect(() => {
    dispatch(
      dashboadActions.getCommentOverview({
        period: period === "day" ? "date" : period,
      })
    );
  }, [period, dispatch]);

  React.useEffect(() => {
    getFormatChartData();
  }, [getFormatChartData, data]);

  const getFormatChartData = React.useCallback(() => {
    const { labels, values } = handleFormatChartData(data, period);
    setChartData((chartData) => ({
      ...chartData,
      labels,
      values,
    }));
  }, [data]);

  const commentStatistical = React.useMemo(() => {
    return (
      <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
        <div className="kt-portlet__head kt-portlet__head--select">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Comment Overview</h3>
          </div>
          <SelectField
            value={period}
            onChange={handleChangePeriod}
            options={periodOptions}
            label={"Period"}
            unit="comment"
          />
        </div>
        <PortletBody fluid={true}>
          <div className="kt-widget12">
            <div className="kt-widget12__chart" style={{ height: "250px" }}>
              <DrawingChart labels={labels} values={values} />
            </div>
          </div>
        </PortletBody>
      </Portlet>
    );
  }, [chartData]);
  return <>{isFetching ? <LoadingProgress /> : commentStatistical}</>;
};

const ViewStatistical = () => {
  const dispatch = useDispatch();
  const { views } = useSelector((store) => store.dashboard);
  const { period, handleChangePeriod } = usePeriod();
  const { data, isFetching } = views;
  const [chartData, setChartData] = React.useState({
    labels: [],
    values: [],
  });
  const { labels, values } = chartData;

  React.useEffect(() => {
    dispatch(
      dashboadActions.getViewOverview({
        period: period === "day" ? "date" : period,
      })
    );
  }, [period, dispatch]);

  React.useEffect(() => {
    getFormatChartData();
  }, [getFormatChartData, data]);

  const getFormatChartData = React.useCallback(() => {
    const { labels, values } = handleFormatChartData(data, period);
    setChartData((chartData) => ({
      ...chartData,
      labels,
      values,
    }));
  }, [data]);

  const viewStatistical = React.useMemo(() => {
    return (
      <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
        <div className="kt-portlet__head kt-portlet__head--select">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">Views Overview</h3>
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
              <DrawingChart labels={labels} values={values} unit="view" />
            </div>
          </div>
        </PortletBody>
      </Portlet>
    );
  }, [chartData]);

  return <>{isFetching ? <LoadingProgress /> : viewStatistical}</>;
};

const Dashboard = () => {
  React.useEffect(() => {}, []);
  return (
    <>
      <div className="layout-header-toolbar">
        <TrendingUp className="header-toolbar-icon" />
        <h1>Dashboard</h1>
      </div>
      <div>
        <DashboardStatistical />
      </div>
      <div className="row my-3">
        <div className="col-6">
          <UserStatistical key="UserStatistical" />
        </div>
        <div className="col-6">
          <TutorialStatistical key="TutorialStatistical" />
        </div>
        <div className="col-6">
          <ViewStatistical key="ViewStatistical" />
        </div>
        <div className="col-6">
          <CommentStatistical key="UserStatistical" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
