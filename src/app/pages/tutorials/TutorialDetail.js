import {
  Avatar,
  Button,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from "@material-ui/core";
import { Chat, ExpandMore, Grade, Visibility } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LoadingProgress from "../../partials/content/LoadingProgress";
import SocialTicket from "../../partials/content/Socials/SocialTicket";
import tutorialActions from "../../store/ducks/actions/tutorials";
import RecentActivities from "./components/tutorial-detail/RecentActivities";

const Author = ({ author }) => {
  const { id, name, avatar_url, description } = author || {};
  return (
    <Link to={`/users/${id}`} className="author">
      <div className="author-container--info">
        <div className="author-image">
          <Avatar src={avatar_url} />
        </div>
        <div className="author-info">
          <Typography gutterBottom={false} className="author-info--name">
            {name}
          </Typography>
          <Typography gutterBottom={false} className="author-info--desc">
            {description}
          </Typography>
        </div>
      </div>
      <div className="author-container--social">
        <Button to={`/users/${id}`} color="primary" variant="outlined">
          Detail
        </Button>
      </div>
    </Link>
  );
};

const StepComponent = ({ title, data }) => {
  const { banner_image_url, content } = data;
  return (
    <>
      <ExpansionPanel className="tutorial-step">
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
            <img src={banner_image_url} alt="illustration." />
            <p></p>
          </div>
          <Typography>{content}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

const TutorialDetail = props => {
  const dispatch = useDispatch();
  const params = useParams();
  const { getTutorialById, isFetching } = useSelector(
    store => store.tutorialList
  );
  const {
    title,
    description,
    author,
    steps,
    comment_count,
    average_rate,
    last_views
  } = getTutorialById || {};

  React.useEffect(() => {
    dispatch(tutorialActions.getTutorialById(params.tutorialId));
  }, [params, dispatch]);

  return isFetching ? (
    <LoadingProgress />
  ) : (
    <div>
      <div className="contents">
        <div className="contents__box contents__box--right tutorial row">
          <div className="section col-md-12 col-lg-8">
            <div className="section-content kt-section">
              <h1 className="kt-section__title"> {title}</h1>
              <Typography
                className="kt-section__desc"
                variant="body2"
                align="center"
                gutterBottom
              >
                {description}
              </Typography>
              <Divider />
              <Author author={author} />
              <Divider />
              <div className="kt-section__content mt-3">
                {steps &&
                  steps.map((_item, index) => (
                    <StepComponent
                      key={`panel-${index + 1}`}
                      title={`Step ${index + 1}: ${_item.title}`}
                      data={_item}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card-spacer mt-n25">
              <div className="row m-0 kt-hidden-mobile">
                <SocialTicket
                  label="Comments"
                  value={comment_count}
                  icon={<Chat fontSize="large" />}
                  color="primary"
                />
                <SocialTicket
                  label="Rating"
                  value={average_rate}
                  icon={<Grade fontSize="large" />}
                  color="warning"
                />
                <SocialTicket
                  label="Views"
                  value={last_views && last_views.length}
                  icon={<Visibility fontSize="large" />}
                  color="success"
                />
              </div>
              <div className="row m-0">
                <RecentActivities getTutorialById={getTutorialById} />
              </div>
            </div>
            {/* --------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

TutorialDetail.propTypes = {};

export default TutorialDetail;
