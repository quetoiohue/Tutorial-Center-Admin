import { default as React } from "react";
import PostsComponent from './components/user-detail/PostsComponent';
import UserInformation from './components/user-detail/UserInformation';
import UserPosts from './components/user-detail/UserPosts';
import UserStatistical from './components/user-detail/UserStatistical';

const UserDetail = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel, isExpanded);
    setExpanded(!expanded);
  };

  return (
    <div>
      <h1>User Detail WIP</h1>
      <div className="row row-full-height">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <UserInformation expanded={expanded} handleChange={handleChange} />
          <div className="kt-space-20" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <PostsComponent
            expanded={expanded}
            handleChange={handleChange}
            content={<UserPosts />}
            title={"User's Posts"}
          />
          <div className="kt-space-20" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <UserStatistical />
          <div className="kt-space-20" />
        </div>
      </div>
    </div>
  );
};

UserDetail.propTypes = {};

export default UserDetail;
