import React from "react";
import PropTypes from "prop-types";
import Icon, { ICON_MAP } from "@mindtickle/mt-ui-components/Icon";

import { formattedDate } from "../../utils";
import messages from "./messages";

const DueDate = ({ dueDate }) => {
  return (
    <div>
      <span>{messages.dueDate}</span>
      <span>{formattedDate(dueDate)}</span>
    </div>
  );
};
DueDate.propTypes = {
  dueDate: PropTypes.string.isRequired
};

const Thumbnail = ({ name, dueDate, dueDateEnabled }) => {
  return (
    <div>
      <div>
        <Icon type={ICON_MAP.accreditation} />
        <span>{name}</span>
      </div>
      {dueDateEnabled && !!dueDate && <DueDate dueDate={dueDate} />}
    </div>
  );
};

Thumbnail.propTypes = {
  dueDate: PropTypes.string,
  name: PropTypes.string.isRequired,
  dueDateEnabled: PropTypes.bool.isRequired
};

export default Thumbnail;
