import React from "react";

interface Props {
  readonly value: string;
  updateValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchField = ({value, updateValue}: Props): JSX.Element => {
  return (
    <div>
      <input value={value} onChange={(event) => updateValue(event.target.value)}></input>
    </div>
  );
};
