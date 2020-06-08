import React from "react";
import PropTypes from "prop-types";
import Icon from "@mindtickle/mt-ui-components/Icon";

import NoSearchResultsStyle from "../NoSearchResults/style";

import messages from "./messages";

const NoSearchResults = ({ className }) => {
  return (
    <NoSearchResultsStyle className={className}>
      <Icon gradient type="noSearchResults" className="noSearchResultsImage" />
      <div className="noSearchResultsTextStyle">{messages.noDataAvailable}</div>
    </NoSearchResultsStyle>
  );
};

NoSearchResults.propTypes = {
  className: PropTypes.string
};

export default NoSearchResults;
