import React from "react";
import PropTypes from "prop-types";

import Heading from "./Heading";

const Headings = ({ headings }) => {
  return (
    <thead className="table-success">
      <tr>
        {headings.map((heading, i) => {
          return <Heading heading={heading} key={i} />;
        })}
      </tr>
    </thead>
  );
};

Headings.propTypes = {
  headings: PropTypes.array.isRequired,
};

export default Headings;
