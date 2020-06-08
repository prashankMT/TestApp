import React from "react";
import PropTypes from "prop-types";
import Icon from "@mindtickle/mt-ui-components/Icon";

import NoSearchResultsStyle from "./style";

const NoSearchResults = ({ className }) => {
  return (
    <NoSearchResultsStyle className={className}>
      <Icon gradient type="noSearchResults" className="noSearchResultsImage" />
      <div className="noSearchResultsTextStyle">No Search Results Found</div>
    </NoSearchResultsStyle>
  );
};

NoSearchResults.propTypes = {
  className: PropTypes.string
};

export default NoSearchResults;
