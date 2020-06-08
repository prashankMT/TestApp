import React from "react";
import PropTypes from "prop-types";

import Wrapper from "./components/Wrapper";

const Analytics = ({ lastUpdatedAt, userId }) => {
  return <Wrapper lastUpdatedAtForOthers={lastUpdatedAt} userId={userId} />;
};

Analytics.propTypes = {
  lastUpdatedAt: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired
};

export default Analytics;
