import React from "react";
import PropTypes from "prop-types";
import Popover from "@mindtickle/mt-ui-components/Tooltip";
import Icon from "@mindtickle/mt-ui-components/Icon";

import { StyledUpdateInfo, StyledInfo } from "./style";

import { formattedDateTime } from "../../utils";
import messages from "./messages";
const Content = ({ lastUpdatedAtForOthers, lastUpdatedAtForAccreditation }) => {
  return (
    <StyledInfo>
      <div>
        <span>{messages.accreditationsUpdatedOn}</span>
        <span>&nbsp;</span>
        <span>{formattedDateTime(lastUpdatedAtForAccreditation)}</span>
      </div>
      <div className="margin-second-line">
        <span>{messages.othersUpdatedOn}</span>
        <span>&nbsp;</span>
        <span>{formattedDateTime(lastUpdatedAtForOthers)}</span>
      </div>
    </StyledInfo>
  );
};

const UpdateInfo = ({
  lastUpdatedAtForOthers,
  lastUpdatedAtForAccreditation,
  className
}) => {
  return (
    <StyledUpdateInfo className={className}>
      <div className="common-info-style">{messages.lastUpdated}:</div>
      <div className="common-info-style">&nbsp;</div>
      <div className="common-info-style">{formattedDateTime(lastUpdatedAtForAccreditation)}</div>
      <Popover
        title={
          <Content
            lastUpdatedAtForOthers={lastUpdatedAtForOthers}
            lastUpdatedAtForAccreditation={lastUpdatedAtForAccreditation}
          />
        }
        trigger="hover"
      >
        <Icon className="accreditation-info-style" type="info" />
      </Popover>
    </StyledUpdateInfo>
  );
};

UpdateInfo.propTypes = {
  lastUpdatedAtForOthers: PropTypes.string.isRequired,
  lastUpdatedAtForAccreditation: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default UpdateInfo;
