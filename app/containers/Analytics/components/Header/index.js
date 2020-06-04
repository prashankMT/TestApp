import React from "react";
import PropTypes from "prop-types";

import Title from "./Title";
import Stats from "./Stats";
import UpdateInfo from "./UpdateInfo";

import StyledHeader from "./style";

const Header = ({
  totalCount,
  pendingCount,
  accreditedCount,
  unsuccessfulCount,
  lastUpdatedAtForOthers,
  lastUpdatedAtForAccreditation
}) => {
  return (
    <StyledHeader>
      <Title count={totalCount} />
      <UpdateInfo
        lastUpdatedAtForOthers={lastUpdatedAtForOthers}
        lastUpdatedAtForAccreditation={lastUpdatedAtForAccreditation}
      />
      <Stats
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
