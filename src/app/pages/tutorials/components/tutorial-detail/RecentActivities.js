/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import { Avatar } from "@material-ui/core";
import moment from "moment";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";

const perfectScrollbarOptions = {
  wheelSpeed: 2,
  wheelPropagation: false,
};

export default function RecentActivities({ getTutorialById }) {
  console.log("RecentActivities", getTutorialById);

  const { last_views } = getTutorialById;
  if (!last_views) return null;
  return (
    <>
      {last_views.length && (
        <div className="kt-portlet kt-portlet--height-fluid">
          <div className="kt-portlet__head">
            <div className="kt-portlet__head-label">
              <h3 className="kt-portlet__head-title">Recent Views</h3>
            </div>
          </div>
          <div className="kt-portlet__body">
            {/* style="max-height: 50vh;" */}
            <PerfectScrollbar
              options={perfectScrollbarOptions}
              style={{ maxHeight: "50vh", position: "relative" }}
            >
              <div className="kt-timeline-v2 ps ps--active-y">
                <div className="kt-timeline-v2__items kt-padding-top-25 kt-padding-bottom-30">
                  {last_views.map((_view) => {
                    return (
                      <div className="kt-timeline-v2__item">
                        <span className="kt-timeline-v2__item-time">
                          {moment(_view.created_at).format("Do MMM")}
                        </span>
                        <div className="kt-timeline-v2__item-cricle">
                          <i className="fa fa-genderless kt-font-danger" />
                        </div>
                        <div className="kt-timeline-v2__item-text kt-padding-top-5">
                          {`"${_view.user.name}"`} has viewed.
                        </div>
                        <div className="kt-list-pics kt-list-pics--sm kt-padding-l-20">
                          <Link to={`/users/${_view.user.id}`}>
                            <Avatar
                              style={{ width: "30px", height: "30px" }}
                              src={_view.user.avatar_url}
                              title=""
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      )}
    </>
  );
}
