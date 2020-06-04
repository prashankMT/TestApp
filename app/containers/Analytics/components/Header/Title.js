import React from "react";
import PropTypes from "prop-types";
import messages from "./messages";

const Title = ({ count }) => {
  return (
    <div>
      {count && <span>{count}</span>}
      <span>{messages.accreditations}</span>
    </div>
  );
};

Title.propTypes = {
  count: PropTypes.number
};

export default Title;
