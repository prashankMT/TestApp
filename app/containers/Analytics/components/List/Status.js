import React from "react";
import PropTypes from "prop-types";
import messages from "./messages";

const getDisplayValueOfStatus = () => {
  switch (status) {
    case "ACCREDITED":
      return { className: "", title: messages.accredited };
    case "UNSUCCESSFUL":
    case "REVOCATED":
      return { className: "", title: messages.unsuccessful };
    case "PENDING":
      return { className: "", title: messages.pending };
    default:
      return "--";
  }
};
const Status = ({ status }) => {
  const { className, title } = getDisplayValueOfStatus(status);
  return <div className={className}>{title}</div>;
};

Status.propTyeps = {
  status: PropTypes.string.isRequired
};
export default Status;
