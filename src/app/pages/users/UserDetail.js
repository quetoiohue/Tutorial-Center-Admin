import { default as React } from "react";
import { useParams } from "react-router-dom";

import PostsComponent from "./components/user-detail/PostsComponent";
import UserInformation from "./components/user-detail/UserInformation";
import UserPosts from "./components/user-detail/UserPosts";
import UserStatistical from "./components/user-detail/UserStatistical";
import userActions from "../../store/ducks/actions/users";
import { useDispatch, useSelector } from "react-redux";
import LoadingProgress from "../../components/LoadingProgress";

const UserDetail = props => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { getUserById, isFetching } = useSelector(store => store.userList);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    dispatch(userActions.getUserById(userId));
  }, [userId, dispatch]);

  const handleChange = panel => (event, isExpanded) => {
    console.log(panel, isExpanded);
    setExpanded(!expanded);
  };

  return isFetching ? (
    <LoadingProgress />
  ) : (
    <div>
      <div className="row row-full-height">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <UserInformation
            expanded={expanded}
            handleChange={handleChange}
            getUserById={getUserById}
          />
          <div className="kt-space-20" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <PostsComponent
            expanded={expanded}
            handleChange={handleChange}
            content={<UserPosts getUserById={getUserById} />}
            title={"User's Posts"}
            getUserById={getUserById}
          />
          <div className="kt-space-20" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <UserStatistical getUserById={getUserById} />
          <div className="kt-space-20" />
        </div>
      </div>
    </div>
  );
};

UserDetail.propTypes = {};

export default UserDetail;
