import React from "react";
import PropTypes from "prop-types";
import messages from "./messages";

import { StyledStatus } from "./style";

const getDisplayValueOfStatus = status => {
  switch (status) {
    case "ACCREDITED":
      return { className: "accredited-color", title: messages.accredited };
    case "UNSUCCESSFUL":
    case "REVOCATED":
      return { className: "unsuccessful-color", title: messages.unsuccessful };
    case "PENDING":
      return { className: "pending-color", title: messages.pending };
    default:
      return { className: "pending-color", title: "--" };
  }
};
const Status = ({ status }) => {
  const { className, title } = getDisplayValueOfStatus(status);
  return <StyledStatus className={className}>{title}</StyledStatus>;
};

Status.propTyeps = {
  status: PropTypes.string.isRequired
};
export default Status;
