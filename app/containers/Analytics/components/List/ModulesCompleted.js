import React from "react";
import PropTypes from "prop-types";

const ModulesCompleted = ({ completed, total }) => {
  return (
    <div>
      {completed}/{total}
    </div>
  );
};

ModulesCompleted.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default ModulesCompleted;
