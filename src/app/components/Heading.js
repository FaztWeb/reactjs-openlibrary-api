import React from "react";
import PropTypes from "prop-types";

const Heading = ({ heading }) => {
  return <th>{heading}</th>;
};

Heading.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Heading;
