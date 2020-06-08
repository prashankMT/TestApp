import React from "react";
import PropTypes from "prop-types";

import Status from "./Status";
import Thumbnail from "./Thumbnail";
import ModulesCompleted from "./ModulesCompleted";

import NoSearchResults from "../NoSearchResults";

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

const NoResultsFound = () => {
  return (
    <tr>
      <td colSpan="3" className="empty-result-column">
        <NoSearchResults />
      </td>
    </tr>
  );
};

const Content = ({ data }) => {
  return (
    <StyledListTable>
      <tr>
        <th className="accreditation-column">{messages.accreditations}</th>
        <th className="status-column">{messages.status}</th>
        <th className="module-completed-column">{messages.moduleCompleted}</th>
      </tr>
      {data.length === 0 && <NoResultsFound />}
      {data.length != 0 &&
        data.map((item, index) => (
          <Item {...item} key={`${item.id}_${index}`} />
        ))}
    </StyledListTable>
  );
};

const ItemShape = {
  dueDate: PropTypes.string,
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
