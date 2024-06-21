import React from "react";
import {createClassName} from "../../../utils/helper";
import "./SortButton.less";

interface Props {
  readonly active: boolean;
  readonly asc: boolean;
  readonly onClick: VoidFunction;
}

export default ({active, asc, onClick}: Props): JSX.Element => {
  const className = createClassName({
    "sort-button": true,
    active,
  });
  return (
    <a className={className} onClick={onClick}>
      {asc === true ? "▲" : "▼"}
    </a>
  );
};
