import { Chart } from "chart.js";
import React, { useEffect, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { metronic } from "../../../_metronic";

const DrawingChart = ({ labels, values, ...props }) => {
  const ref = useRef();
  console.log("DrawingChart", labels, values);

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
      labels,
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
          data: values,
        },
      ],
    }),
    [brandColor, labels, values]
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
          mode: "ErrorPage1.js",
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
  }, [labels, values]);

  return (
    <canvas ref={ref} width={683} height={312} id="kt_chart_order_statistics" />
  );
};

export default React.memo(DrawingChart);