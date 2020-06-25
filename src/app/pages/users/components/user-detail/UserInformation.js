import { Avatar, Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import {
  Portlet,
  PortletBody,
  PortletHeader
} from "../../../../partials/content/Portlet";
import moment from "moment";
import LoadingProgress from "../../../../components/LoadingProgress";

const UserInfoFormItem = ({ label, value }) => {
  return (
    <TextField
      label={label}
      value={value}
      margin="normal"
      disabled
      className="col-lg-4 user-info--item"
    />
  );
};

const UserInformation = props => {
  const { getUserById, isFetching } = props;
  const {
    avatar_url,
    address,
    date_of_birth,
    description,
    phone_number,
    created_at,
    email,
    gender,
    name,
    updated_at
  } = getUserById || {};
  return isFetching ? (
    <LoadingProgress />
  ) : (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand user--form">
      <PortletHeader title="User Info" />
      <PortletBody>
        <div className="kt-widget12">
          <div className="kt-widget12__content pb-0">
            <div className="kt-widget12__item row">
              <div className="kt-widget12__info col-lg-3">
                <Avatar src={avatar_url} className="user-info--avatar" />
                <Typography variant="body2" align="center" gutterBottom>
                  {description}
                </Typography>
              </div>
              <div className="kt-widget12__info col-lg-9">
                <form
                  noValidate
                  autoComplete="off"
                  className="user-info--form row"
                >
                  <UserInfoFormItem label={"Full Name"} value={`${name}`} />
                  <UserInfoFormItem
                    label={"Gender"}
                    value={gender ? "Male" : "Female"}
                  />
                  <UserInfoFormItem label={"Email"} value={`${email}`} />
                  <UserInfoFormItem label={"Phone"} value={`${phone_number}`} />
                  <UserInfoFormItem
                    label={"Created At"}
                    value={moment(created_at).format("DD/MM/YYYY")}
                  />
                  <UserInfoFormItem
                    label={"Updated At"}
                    value={moment(updated_at).format("DD/MM/YYYY")}
                  />
                  <UserInfoFormItem
                    label={"Birthday"}
                    value={moment(date_of_birth).format("DD/MM/YYYY")}
                  />
                  <UserInfoFormItem label={"Address"} value={address} />
                </form>
              </div>
            </div>
            <Button
              onClick={props.handleChange("viewpost")}
              fullWidth
              variant="contained"
              color="primary"
              className="user-info--bottom-btn"
            >
              {!props.expanded ? "View Posts" : "Hide Posts"}
            </Button>
          </div>
        </div>
      </PortletBody>
    </Portlet>
  );
};

UserInformation.propTypes = {};

export default UserInformation;
