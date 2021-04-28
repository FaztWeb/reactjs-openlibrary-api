import React from "react";
import PropTypes from "prop-types";

const Row = ({ change }) => {
  return (
    <tr>
      <td>{change.when}</td>
      <td>{change.who}</td>
      <td>{change.description}</td>
    </tr>
  );
};

Row.propTypes = {
  change: PropTypes.shape({
    when: PropTypes.string.isRequired,
    who: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Row;
