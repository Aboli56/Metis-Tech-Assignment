import React from "react";
import SortButton from "./SortButton";
export type SortType = "name" | "population" | "area";

interface Props {
  readonly type: SortType;
  readonly currentSort?: SortType;
  readonly sortAsc: boolean;
  readonly setCurrentSort: (newSort: SortType) => void;
}

export default ({type, currentSort, sortAsc, setCurrentSort}: Props): JSX.Element => {
  const [asc, setAsc] = React.useState<boolean>();

  const active = currentSort === type;

  React.useEffect(() => {
    active && setAsc(sortAsc);
  }, [sortAsc, active]);

  return <SortButton active={active} asc={asc} onClick={() => setCurrentSort(type)}></SortButton>;
};
