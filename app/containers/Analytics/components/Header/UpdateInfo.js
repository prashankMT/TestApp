import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@mindtickle/mt-ui-components/Tooltip";
import Icon, { ICON_MAP } from "@mindtickle/mt-ui-components/Icon";

import { formattedDateTime } from "../../utils";
import messages from "./messages";
const Content = ({ lastUpdatedAtForOthers, lastUpdatedAtForAccreditation }) => {
  return (
    <div>
      <span>
        {messages.accreditationsUpdatedOn}
        {formattedDateTime(lastUpdatedAtForAccreditation)}
      </span>
      <span>
        {messages.othersUpdatedOn}
        {formattedDateTime(lastUpdatedAtForOthers)}
      </span>
    </div>
  );
};

const UpdateInfo = ({
  lastUpdatedAtForOthers,
  lastUpdatedAtForAccreditation
}) => {
  return (
    <>
      <span>{messages.lastUpdated}:</span>
      <span>{formattedDateTime(lastUpdatedAtForAccreditation)}</span>
      <Tooltip
        title={
          <Content
            lastUpdatedAtForOthers={lastUpdatedAtForOthers}
            lastUpdatedAtForAccreditation={lastUpdatedAtForAccreditation}
          />
        }
      >
        <Icon type={ICON_MAP.info} />
      </Tooltip>
    </>
  );
};

UpdateInfo.propTypes = {
  lastUpdatedAtForOthers: PropTypes.string.isRequired,
  lastUpdatedAtForAccreditation: PropTypes.string.isRequired
};

export default UpdateInfo;
