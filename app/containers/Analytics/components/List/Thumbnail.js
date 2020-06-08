import React from "react";
import PropTypes from "prop-types";
import Icon from "@mindtickle/mt-ui-components/Icon";
import EllipsisTooltip from "@mindtickle/mt-ui-components/EllipsisTooltip";

import { formattedDate } from "../../utils";
import messages from "./messages";

import { StyledThumbnail } from "./style";

const DueDate = ({ dueDate, className }) => {
  return (
    <div className={className}>
      <span>{messages.dueDate}</span>
      <span>{formattedDate(dueDate)}</span>
    </div>
  );
};
DueDate.propTypes = {
  dueDate: PropTypes.string.isRequired,
  className: PropTypes.string
};

const Thumbnail = ({ name, dueDate, dueDateEnabled }) => {
  return (
    <StyledThumbnail>
      <Icon type="certificate" className="accreditation-icon" />
      <div className="accreditation-text-wrapper">
        <EllipsisTooltip
          title={name}
          showTooltipWhenEllipsis={true}
          placement="bottom"
          wrapperClassName="accreditation-name"
        >
          {name}
        </EllipsisTooltip>
        {/* <div className="accreditation-name">{name}</div> */}
        {dueDateEnabled && !!dueDate && (
          <DueDate dueDate={dueDate} className="accreditation-due-date" />
        )}
      </div>
    </StyledThumbnail>
  );
};

Thumbnail.propTypes = {
  dueDate: PropTypes.string,
  name: PropTypes.string.isRequired,
  dueDateEnabled: PropTypes.bool.isRequired
};

export default Thumbnail;
