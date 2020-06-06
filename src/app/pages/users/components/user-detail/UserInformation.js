import { Avatar, Button, TextField } from "@material-ui/core";
import React from "react";
import { Portlet, PortletBody, PortletHeader } from "../../../../partials/content/Portlet";
  
const UserInformation = (props) => {
  return (
    <Portlet className="kt-portlet--height-fluid kt-portlet--border-bottom-brand">
      <PortletHeader title="User Info" />
      <PortletBody>
        <div className="kt-widget12">
          <div className="kt-widget12__content pb-0">
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
