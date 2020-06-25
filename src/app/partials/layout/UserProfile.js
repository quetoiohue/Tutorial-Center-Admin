/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import { Avatar } from "@material-ui/core";
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import HeaderDropdownToggle from "../content/CustomDropdowns/HeaderDropdownToggle";

class UserProfile extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    console.log("User", this.props.user);
    const { name } = this.props.user || "";

    return (
      <Dropdown
        className="kt-header__topbar-item kt-header__topbar-item--user"
        drop="down"
        alignRight
      >
        <Dropdown.Toggle
          as={HeaderDropdownToggle}
          id="dropdown-toggle-user-profile"
        >
          <div className="kt-header__topbar-user">
            <span className="kt-header__topbar-welcome kt-hidden-mobile">
              Hi,
            </span>
            <span className="kt-header__topbar-username kt-hidden-mobile">
              {name}
            </span>
            <div className="kt-header__topbar-user">
              <Avatar className="kt-header__topbar-user--avatar">
                {name
                  .toString()
                  .toUpperCase()
                  .charAt(0)}
              </Avatar>
            </div>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround">
          {/** ClassName should be 'dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl' */}
          <div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x">
            <div className="kt-notification__custom">
              <Link
                to="/logout"
                className="btn btn-label-brand btn-sm btn-bold"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = ({ auth: { user } }) => ({
  user
});

export default connect(mapStateToProps)(UserProfile);
