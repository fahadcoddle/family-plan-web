import { connect } from 'react-redux';

import { MainLayout } from 'pages/MainLayout/MainLayout';

const mapStateToProps = ({ login }) => ({ login });

export default connect(mapStateToProps)(MainLayout);
