import {SearchField} from "@components/Selected/SearchField/SearchField";
import React from "react";

export default (): JSX.Element => {
  const [value, updateValue] = React.useState("");

  return <SearchField value={value} updateValue={updateValue} />;
};
