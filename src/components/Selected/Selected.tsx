import React from "react";
import Filtered from "./Filtered";
import SearchField from "./SearchField";
import Selection from "./Selection";

export const Selected = (): JSX.Element => (
  <div>
    <SearchField></SearchField>
    <h2>Found Countries:</h2>
    <Filtered></Filtered>
    <h2>Selected Countries:</h2>
    <Selection></Selection>
  </div>
);
