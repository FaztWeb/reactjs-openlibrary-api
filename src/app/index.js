import React from "react";
import { render } from "react-dom";

import data from "./data.json";
import App from "./App";

const headings = ["When", "Who", "Description"];

const props = {
  headings,
  data,
  title: "OpenLibrary Api",
};

render(<App {...props} />, document.getElementById("app"));
