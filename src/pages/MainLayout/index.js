import { connect } from "react-redux";

import { MainLayout } from "./MainLayout";

const mapStateToProps = ({ login }) => (
  ({login})
);

export default connect(mapStateToProps)(MainLayout);
