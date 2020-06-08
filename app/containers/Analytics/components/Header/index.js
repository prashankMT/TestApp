import React from "react";
import PropTypes from "prop-types";

import Title from "./Title";
import Stats from "./Stats";
import UpdateInfo from "./UpdateInfo";

import { StyledHeader } from "./style";

const Header = ({
  loading,
  totalCount,
  pendingCount,
  accreditedCount,
  unsuccessfulCount,
  lastUpdatedAtForOthers,
  lastUpdatedAtForAccreditation
}) => {
  return (
    <StyledHeader>
      <div className="heading-name-wrapper">
        <Title count={totalCount} />
        <UpdateInfo
          lastUpdatedAtForOthers={lastUpdatedAtForOthers}
          lastUpdatedAtForAccreditation={lastUpdatedAtForAccreditation}
        />
      </div>
      <Stats
        loading={loading}
        className="stats-style"
        unsuccessfulCount={unsuccessfulCount}
        accreditedCount={accreditedCount}
        pendingCount={pendingCount}
      />
    </StyledHeader>
  );
};

PropTypes.propTypes = {
  totalCount: PropTypes.number,
  pendingCount: PropTypes.number,
  accreditedCount: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  unsuccessfulCount: PropTypes.number,
  lastUpdatedAtForOthers: PropTypes.number.isRequired,
  lastUpdatedAtForAccreditation: PropTypes.number.isRequired
};

export default Header;
