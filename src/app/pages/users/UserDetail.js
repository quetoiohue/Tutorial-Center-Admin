import { Chart } from "chart.js";
import { default as React, useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import {
  Portlet,
  PortletBody,
  PortletHeader,
} from "../../partials/content/Portlet";
import { metronic } from "../../../_metronic";
import { Avatar, TextField } from "@material-ui/core";
import Rating from "../../partials/content/Socials/Rating";

const StatisticUser = (props) => {
  const ref = useRef();
  const { brandColor, shape2Color, shape3Color } = useSelector((state) => ({
    brandColor: metronic.builder.selectors.getConfig(
      state,
      "colors.state.brand"
    ),
    shape2Color: metronic.builder.selectors.getConfig(
      state,
      "colors.base.shape.2"
    ),
    shape3Color: metronic.builder.selectors.getConfig(
      state,
      "colors.base.shape.3"
    ),
  }));

  const data = useMemo(
    () => ({
      labels: ["1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan", "7 Jan"],
      datasets: [
        {
          fill: true,
          // borderWidth: 0,
          backgroundColor: Chart.helpers
            .color(brandColor)
            .alpha(0.6)
            .rgbString(),

          borderColor: Chart.helpers
            .color(brandColor)
            .alpha(0)
            .rgbString(),

          pointHoverRadius: 4,
          pointHoverBorderWidth: 12,
          pointBackgroundColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0)
            .rgbString(),
          pointHoverBackgroundColor: brandColor,
          pointHoverBorderColor: Chart.helpers
            .color("#000000")
            .alpha(0.1)
            .rgbString(),

          data: [20, 40, 50, 25, 35, 60, 30],
        },
      ],
    }),
    [brandColor]
  );

  useEffect(() => {
    // For more information about the chartjs, visit this link
    // https://www.chartjs.org/docs/latest/getting-started/usage.html

    const chart = new Chart(ref.current, {
      data,
      type: "line",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: false,
        scales: {
          xAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: false,
              ticks: {
                display: true,
                beginAtZero: true,
                fontColor: shape3Color,
                fontSize: 13,
                padding: 10,
              },
            },
          ],
          yAxes: [
            {
              categoryPercentage: 0.35,
              barPercentage: 0.7,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                color: shape2Color,
                drawBorder: false,
                offsetGridLines: false,
                drawTicks: false,
                borderDash: [3, 4],
                zeroLineWidth: 1,
                zeroLineColor: shape2Color,
                zeroLineBorderDash: [3, 4],
              },
              ticks: {
                max: 70,
                stepSize: 10,
                display: true,
                beginAtZero: true,
                fontColor: shape3Color,
                fontSize: 13,
                padding: 10,
              },
            },
          ],
        },
        title: {
          display: false,
        },
        hover: {
          mode: "ErrorsPage.js",
        },
        tooltips: {
          enabled: true,
          intersect: false,
          mode: "nearest",
          bodySpacing: 5,
          yPadding: 10,
          xPadding: 10,
          caretPadding: 0,
          displayColors: false,
          backgroundColor: brandColor,
          titleFontColor: "#ffffff",
          cornerRadius: 4,
          footerSpacing: 0,
          titleSpacing: 0,
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 5,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data, brandColor, shape2Color, shape3Color]);

  return (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
      <PortletHeader title="Order Statistics" />
      <PortletBody fluid={true}>
        <div className="kt-widget12">
          <div className="kt-widget12__content">
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Total Channel</span>
                <span className="kt-widget12__value">2</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Last activity date</span>
                <span className="kt-widget12__value">20/04/2020</span>
              </div>
            </div>
            <div className="kt-widget12__item">
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Total post</span>
                <span className="kt-widget12__value">20</span>
              </div>
              <div className="kt-widget12__info">
                <span className="kt-widget12__desc">Votes</span>
                <div className="kt-widget12__value">
                  <Rating number={5} />
                </div>
              </div>
            </div>
          </div>
          <div className="kt-widget12__chart" style={{ height: "250px" }}>
            <canvas
              ref={ref}
              width={683}
              height={312}
              id="kt_chart_order_statistics"
            />
          </div>
        </div>
      </PortletBody>
    </Portlet>
  );
};
const UserInfo = (props) => {
  return (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
      <PortletHeader title="User Info" />
      <PortletBody>
        <div className="kt-widget12">
          <div className="kt-widget12__content">
            <div className="kt-widget12__item row">
              <div className="kt-widget12__info col-lg-4">
                <Avatar
                  src="/media/users/100_1.jpg"
                  style={{ margin: "0 auto", height: 120, width: 120 }}
                />
              </div>
              <div className="kt-widget12__info">
                <form noValidate autoComplete="off" className="row">
                  <TextField
                    label="Username"
                    value="GwangChan16T3"
                    margin="normal"
                    disabled
                    style={{ paddingRight: "16px", marginBottom: "4px" }}
                    className="col-lg-6"
                  />
                  <TextField
                    label="Full Name"
                    disabled
                    value="Gwang Chan"
                    margin="normal"
                    style={{ paddingRight: "16px", marginBottom: "4px" }}
                    className="col-lg-6"
                  />

                  <TextField
                    label="Email"
                    disabled
                    value="quangtran16t3@gmail.com"
                    margin="normal"
                    style={{ paddingRight: "16px", marginBottom: "4px" }}
                    className="col-lg-6"
                  />
                  <TextField
                    label="Phone"
                    value="0378823333"
                    margin="normal"
                    disabled
                    style={{ paddingRight: "16px", marginBottom: "4px" }}
                    className="col-lg-6"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </PortletBody>
    </Portlet>
  );
};
const UserDetail = (props) => {
  return (
    <div>
      <h1>User Detail WIP</h1>
      <div className="row row-full-height">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <UserInfo />
          <div className="kt-space-20" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <StatisticUser />
          <div className="kt-space-20" />
        </div>
      </div>
    </div>
  );
};

UserDetail.propTypes = {};

export default UserDetail;
