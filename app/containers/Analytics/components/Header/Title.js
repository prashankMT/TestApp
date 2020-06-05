import React from "react";
import PropTypes from "prop-types";
import messages from "./messages";

import { StyledTitle } from "./style";

const Title = ({ count, className }) => {
  return (
    <StyledTitle className={className}>
      {count && <span>{count}</span>}
      <span>&nbsp;</span>
      <span>{messages.accreditations}</span>
    </StyledTitle>
  );
};

Title.propTypes = {
  count: PropTypes.number,
  className: PropTypes.string
};

export default Title;
