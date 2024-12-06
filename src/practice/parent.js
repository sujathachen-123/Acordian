import { UserComp } from "./nov28.js";
import {AdminComp} from "./admin.js";
import React from "react";
class MainComp extends React.Component {
  render() {
    return <>{this.props.login ==="admin" ? <UserComp /> : <AdminComp />}</>;
  }
}
export default MainComp;