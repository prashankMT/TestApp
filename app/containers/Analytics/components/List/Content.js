import React from "react";
import PropTypes from "prop-types";

import Status from "./Status";
import Thumbnail from "./Thumbnail";
import ModulesCompleted from "./ModulesCompleted";

const Item = ({
  name,
  status,
  dueDate,
  totalModules,
  dueDateEnabled,
  completedModules
}) => {
  return (
    <>
      <Thumbnail
        name={name}
        dueDate={dueDate}
        dueDateEnabled={dueDateEnabled}
      />
      <Status status={status} />
      <ModulesCompleted total={totalModules} completed={completedModules} />
    </>
  );
};
Item.propTypes = ItemShape;

const Content = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Item {...item} key={`${item.id}_${index}`} />
      ))}
    </div>
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
