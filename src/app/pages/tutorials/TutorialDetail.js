import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Divider,
  Button,
  colors,
} from "@material-ui/core";
import { ExpandMore, Visibility, Chat } from "@material-ui/icons";
import CoverImg from "../../assets/img/cover-7.jpg";

// import {
//   Portlet,
//   PortletBody,
//   PortletHeader,
// } from "../../partials/content/Portlet";
import Rating from "../../partials/content/Socials/Rating";
import { Link } from "react-router-dom";
import React from "react";

const Author = ({ userId }) => (
  <Link to={`/users/${userId}`} className="author">
    <div className="author-container--info">
      <div className="author-image">
        <img alt="author." src="/media/users/100_1.jpg" />
      </div>
      <div className="author-info">
        <Typography gutterBottom={false} className="author-info--name">
          Quang Tran
        </Typography>
        <Typography gutterBottom={false} className="author-info--desc">
          Aug 8 2019
        </Typography>
      </div>
    </div>
    <div className="author-container--social">
      <Button color="primary" variant="outlined">
        {" "}
        Follow{" "}
      </Button>
    </div>
  </Link>
);
const StepComponent = ({ title, expanded, handleChange }) => {
  return (
    <>
      <ExpansionPanel
        className="tutorial-step"
        // expanded={expanded}
        // onChange={handleChange}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="kt-expand__head-label"
        >
          <Typography component="h4" className="kt-expand__head-title">
            {title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="tutorial-step-container--content">
          <div className="tutorial-step-image">
            <img src={CoverImg} alt="illustration." />
            <p></p>
          </div>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.Nulla facilisi.
            Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.Nulla facilisi. Phasellus
            sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est,
            id dignissim quam.Nulla facilisi. Phasellus sollicitudin nulla et
            quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

const TutorialDetail = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel, isExpanded);

    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div className="contents">
        <div className="contents__box contents__box--right tutorial row">
          <div className="section col-md-12 col-lg-8">
            <div className="section-content kt-section">
              <h1 className="section-title "> How to install Windows 7 </h1>
              <p className="kt-section__desc tutorial--desc ">
                Our Metronic React application is based on
                <b>Create React App</b>. For more detailed information of the
                CRA, visit the official Create React App
              </p>
              <Divider />
              <Author userId={1} />
              <Divider />

              <div className="kt-section__content mt-3">
                {[1, 2, 3].map((_item, index) => (
                  <StepComponent
                    key={`panel-${index}`}
                    title={`Step ${_item}`}
                    expanded={`panel${_item}` === expanded}
                    handleChange={handleChange(`panel${_item}`)}
                  />
                ))}
              </div>
            </div>

            <div className="space">
              <p>
                Our Metronic React application is based on{" "}
                <b>Create React App</b>. For more detailed information of the
                CRA, visit the official Create React App
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://create-react-app.dev/docs/getting-started"
                >
                  documentation website
                </a>
                .
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div>
              <div className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
                <div>
                  <div className="kt-widget12">
                    <div className="kt-widget12__content wrap-social--info">
                      <div className="kt-widget12__item mb-3 wrap-social--item">
                        <div className="kt-widget12__info">
                          {/* <span className="kt-widget12__desc">
                            Total comments
                          </span> */}
                          <span className="kt-widget12__value">
                            13
                            <Chat
                              className="kt-widget12__value--icon"
                              color="primary"
                            />
                          </span>
                        </div>
                        {/* <div className="kt-widget12__info">
                          <span className="kt-widget12__desc">
                            Last modified date
                          </span>
                          <span className="kt-widget12__value">20/04/2020</span>
                        </div> */}
                      </div>
                      <div className="kt-widget12__item mb-3 wrap-social--item">
                        <div className="kt-widget12__info">
                          {/* <span className="kt-widget12__desc">Total Views</span> */}
                          <span className="kt-widget12__value mb-3">
                            20
                            <span>
                              <Visibility
                                className="kt-widget12__value--icon"
                                style={{ color: colors.green[500] }}
                              />
                            </span>
                          </span>
                        </div>
                        <div className="kt-widget12__info">
                          {/* <span className="kt-widget12__desc">Votes</span> */}
                          <div className="kt-widget12__value">
                            <Rating number={1} fontSize="default" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TutorialDetail.propTypes = {};

export default TutorialDetail;
