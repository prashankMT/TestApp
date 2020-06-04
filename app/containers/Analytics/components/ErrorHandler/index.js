import React, { Component } from "react";
import PropTypes from "prop-types";

import ErrorPage, { PAGE_TYPES } from "@mindtickle/mt-ui-components/ErrorPage";

class ErrorHandler extends Component {
  static propTypes = {
    error: PropTypes.object,
    reset: PropTypes.func
  };

  render() {
    const { reset: tryAgain, ...rest } = this.props;
    return (
      <ErrorPage
        pageType={PAGE_TYPES.CLIENT_ERROR}
        tryAgain={() => tryAgain(rest)}
        showLogo={false}
        showGoToHome={false}
      />
    );
  }
}

export default ErrorHandler;
