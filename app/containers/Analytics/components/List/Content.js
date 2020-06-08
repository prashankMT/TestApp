import React from "react";
import PropTypes from "prop-types";

import Status from "./Status";
import Thumbnail from "./Thumbnail";
import ModulesCompleted from "./ModulesCompleted";

// import NoSearchResults from "../NoSearchResults/NoResult";

import { StyledListTable } from "./style";
import messages from "./messages";

const Item = ({
  name,
  status,
  dueDate,
  totalModules,
  dueDateEnabled,
  completedModules
}) => {
  return (
    <tr>
      <td className="accreditation-column">
        <Thumbnail
          name={name}
          dueDate={dueDate}
          dueDateEnabled={dueDateEnabled}
        />
      </td>
      <td className="status-column">
        <Status status={status} />
      </td>
      <td className="module-completed-column">
        <ModulesCompleted total={totalModules} completed={completedModules} />
      </td>
    </tr>
  );
};
Item.propTypes = ItemShape;

const Content = ({ data }) => {
  return (
    <StyledListTable>
      <thead>
        <tr>
          <th className="accreditation-column">{messages.accreditations}</th>
          <th className="status-column">{messages.status}</th>
          <th className="module-completed-column">
            {messages.moduleCompleted}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <Item {...item} key={`${item.id}_${index}`} />
        ))}
      </tbody>
    </StyledListTable>
  );
};

const ItemShape = {
  dueDate: PropTypes.number,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalModules: PropTypes.number.isRequired,
  dueDateEnabled: PropTypes.bool.isRequired,
  status: PropTypes.oneOf([
    "PENDING",
    "ACCREDITED",
    "UNSUCCESSFUL",
    "REVOCATED"
  ]).isRequired,
  completedModules: PropTypes.number.isRequired
};

Content.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ItemShape)).isRequired
};

export default Content;
