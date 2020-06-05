import React from "react";
import PropTypes from "prop-types";
import messages from "./messages";

import { StyledStats } from "./style";

const Loader = () => {
  return <div>Loader</div>;
};

const Stats = ({
  loading,
  pendingCount,
  accreditedCount,
  unsuccessfulCount,
  className
}) => {
  if (loading) return <Loader />;
  return (
    <StyledStats className={className}>
      <span>
        {accreditedCount} {messages.accredited}
      </span>
      <span>,&nbsp;</span>
      <span>
        {unsuccessfulCount} {messages.unsuccessful}
      </span>
      <span>,&nbsp;</span>
      <span>
        {pendingCount} {messages.pending}
      </span>
    </StyledStats>
  );
};

Stats.propTypes = {
  pendingCount: PropTypes.number,
  accreditedCount: PropTypes.number,
  unsuccessfulCount: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  className: PropTypes.string
};

export default Stats;
