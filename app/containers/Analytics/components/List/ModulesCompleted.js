import React from "react";
import PropTypes from "prop-types";

import { StyledModuleCompleted } from "./style";

const ModulesCompleted = ({ completed, total }) => {
  return (
    <StyledModuleCompleted>
      {completed}/{total}
    </StyledModuleCompleted>
  );
};

ModulesCompleted.propTypes = {
  completed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default ModulesCompleted;
