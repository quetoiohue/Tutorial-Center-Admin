import { Chart } from "chart.js";
import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { metronic } from "../../../../../_metronic";
import {
  Portlet,
  PortletBody,
  PortletHeader,
} from "../../../../partials/content/Portlet";
import Rating from "../../../../partials/content/Socials/Rating";
import { Person } from "@material-ui/icons";
import moment from "moment";
import { SelectField } from "../../../../partials/content/Form";
import { periodOptions } from "../../../../mockData/users";
import usePeriod from "../../../../hooks/usePeriod";
import { Toolbar } from "@material-ui/core";
import DrawingChart from '../../../../partials/content/DrawingChart';

const UserStatistical = (props) => {
  const { getUserById } = props;
  const [period, handleChangePeriod] = usePeriod();

  const userChartData = React.useMemo(() => {
    if (Object.keys(getUserById).length === 0) {
      return {
        labels: [],
        values: 0,
      };
    }
    const { tutorials } = getUserById;
    let formattingDate = "YYYY Do MMM";
    if (period === "month") {
      formattingDate = "YYYY MMM";
    } else if (period === "year") {
      formattingDate = "YYYY";
    }

    const postedHistory = tutorials.reduce((assumeObj, _item) => {
      const createdDate = moment(_item.created_at).format(formattingDate);
      if (
        Object.keys(assumeObj).some((_history) =>
          moment(_history.date).isSame(createdDate, period)
        )
      ) {
        assumeObj[createdDate] += 1;
      } else {
        assumeObj[`${createdDate}`] = 1;
      }
      console.log("dates", assumeObj[`${createdDate}`]);

      return assumeObj;
    }, {});

    const labels = Object.keys(postedHistory);
    const values = Object.values(postedHistory);
    const defaultDate = moment(labels[0], formattingDate)
      .subtract(1, `${period}s`)
      .format(formattingDate);

    return {
      labels: [defaultDate, ...labels],
      values: [0, ...values],
    };
  }, [getUserById, period]);

  return (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
      <PortletHeader title="Order Statistics" />
      <PortletBody fluid={true}>
        <div className="kt-widget12">
          <div className="kt-widget12__content">
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Followers</span>
                <span className="kt-widget12__value">
                  <div className="kt-widget12__value--wrapIcon">
                    <span>{getUserById.followers_count}</span>
                    <span>
                      <Person fontSize="large" />
                    </span>
                  </div>
                </span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Followings</span>
                <span className="kt-widget12__value">
                  <div className="kt-widget12__value--wrapIcon">
                    <span>{getUserById.followings_count}</span>
                    <span>
                      <Person fontSize="large" />
                    </span>
                  </div>
                </span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Total post</span>
                <span className="kt-widget12__value">
                  {getUserById.tutorials && getUserById.tutorials.length}
                </span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Votes</span>
                <div className="kt-widget12__value">
                  <Rating number={Number.parseInt(getUserById.average_rate)} />
                </div>
              </div>
            </div>
          </div>
          <Toolbar
            dense
            style={{
              justifyContent: "space-between",
              alginItems: "center",
              padding: "0px",
            }}
          >
            <p className="kt-widget12__chart-title">User History</p>
            <span className="kt-widget12__desc">
              <SelectField
                value={period}
                onChange={handleChangePeriod}
                options={periodOptions}
                label={"Period"}
              />
            </span>
          </Toolbar>
          <div className="kt-widget12__chart" style={{ height: "250px" }}>
            <DrawingChart
              labels={userChartData.labels}
              values={userChartData.values}
            />
          </div>
        </div>
      </PortletBody>
    </Portlet>
  );
};

UserStatistical.propTypes = {};

export default UserStatistical;
