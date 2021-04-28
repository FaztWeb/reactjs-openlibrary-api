import React from "react";
import PropTypes from "prop-types";

import Row from "./Row";

const Rows = ({ data }) => {
  return (
    <tbody>
      {data.map((row, i) => {
        return <Row change={row} key={i} />;
      })}
    </tbody>
  );
};

Rows.propTypes = {
  data: PropTypes.array,
};

export default Rows;
