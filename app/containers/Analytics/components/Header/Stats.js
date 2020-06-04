import React from "react";
import PropTypes from "prop-types";
import messages from "./messages";

const Loader = () => {
  return <div>Loader</div>;
};

const Stats = ({
  loading,
  pendingCount,
  accreditedCount,
  unsuccessfulCount
}) => {
  if (loading) return <Loader />;
  return (
    <div>
      <span>
        {accreditedCount} {messages.accredited}
      </span>
      <span>,</span>
      <span>
        {unsuccessfulCount} {messages.unsuccessful}
      </span>
      <span>,</span>
      <span>
        {pendingCount} {messages.pending}
      </span>
    </div>
  );
};

Stats.propTypes = {
  pendingCount: PropTypes.number,
  accreditedCount: PropTypes.number,
  unsuccessfulCount: PropTypes.number,
  loading: PropTypes.bool.isRequired
};

export default Stats;
