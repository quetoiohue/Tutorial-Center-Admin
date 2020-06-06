import { Avatar, Button, TextField } from "@material-ui/core";
import React from "react";
import {
  Portlet,
  PortletBody,
  PortletHeader,
} from "../../../../partials/content/Portlet";
import moment from 'moment';

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

const UserInformation = (props) => {
  const { getUserById } = props;
  const { age, created_at, email, gender, name, updated_at } = getUserById || {};
  return (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand user--form">
      <PortletHeader title="User Info" />
      <PortletBody>
        <div className="kt-widget12">
          <div className="kt-widget12__content pb-0">
            <div className="kt-widget12__item row">
              <div className="kt-widget12__info col-lg-3">
                <Avatar
                  src="/media/users/100_1.jpg"
                  className="user-info--avatar"
                />
              </div>
              <div className="kt-widget12__info col-lg-9">
                <form
                  noValidate
                  autoComplete="off"
                  className="user-info--form row"
                >

                  <UserInfoFormItem label={"Age"} value={`${age}`}/>
                  <UserInfoFormItem label={"Created At"} value={moment(created_at).format("DD/MM/YYYY")}/>
                  <UserInfoFormItem label={"Updated At"} value={moment(updated_at).format("DD/MM/YYYY")}/>
                  <UserInfoFormItem label={"Full Name"} value={`${name}`}/>
                  <UserInfoFormItem label={"Gender"} value={gender ? "Male" : "Female"}/>
                  <UserInfoFormItem label={"Email"} value={`${email}`}/>
                </form>
              </div>
            </div>
            <Button
              onClick={props.handleChange("viewpost")}
              fullWidth
              variant="contained"
              color="primary"
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
