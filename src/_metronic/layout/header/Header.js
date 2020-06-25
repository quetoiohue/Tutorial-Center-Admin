import React from "react";
import { connect } from "react-redux";
import objectPath from "object-path";
import Topbar from "./Topbar";
import AnimateLoading from "../../../app/partials/layout/AnimateLoading";
import KTHeader from "../../_assets/js/header";
import * as builder from "../../ducks/builder";

class Header extends React.Component {
  headerCommonRef = React.createRef();

  componentDidMount() {
    let options = {};
    if (
      this.headerCommonRef.current.getAttribute("data-ktheader-minimize") ===
      "1"
    ) {
      options["minimize.desktop.on"] = "kt-header--minimize";
      options["offset.desktop"] = 130;
    }

    // eslint-disable-next-line no-undef
    new KTHeader(this.headerCommonRef.current, options);
  }

  render() {
    const { menuHeaderDisplay, headerAttributes, headerClasses } = this.props;
    return (
      <div
        className={`kt-header kt-grid__item ${headerClasses}`}
        id="kt_header"
        ref={this.headerCommonRef}
        {...headerAttributes}
      >
        <AnimateLoading />

        {!menuHeaderDisplay && <div />}
        <Topbar />
        {/* <!-- end:: Header Topbar --> */}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  headerClasses: builder.selectors.getClasses(store, {
    path: "header",
    toString: true
  }),
  headerAttributes: builder.selectors.getAttributes(store, { path: "header" }),
  menuHeaderDisplay: objectPath.get(
    store.builder.layoutConfig,
    "header.menu.self.display"
  ),
  fluid:
    objectPath.get(store.builder.layoutConfig, "header.self.width") === "fluid"
});

export default connect(mapStateToProps)(Header);
