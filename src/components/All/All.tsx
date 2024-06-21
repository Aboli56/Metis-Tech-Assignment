import * as React from "react";
import {Country} from "../../models/Country";
import SortButton, {SortType} from "./SortButton";

export interface IAllProps {
  readonly countries: ReadonlyArray<Country>;
  readonly currentSort?: SortType;
  readonly setCurrentSort: (_: SortType) => void;
  readonly sortAsc: boolean;
}

export const All = (props: IAllProps): JSX.Element => (
  <div className="all-cities-table">
    <table>
      <thead>
        <tr>
          <th>
            Name <SortButton type="name" {...props}></SortButton>
          </th>
          <th>
            Population <SortButton type="population" {...props}></SortButton>
          </th>
          <th>
            Area <SortButton type="area" {...props}></SortButton>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.countries.map((c: any, index: number) => (
          <tr key={index}>
            <td>{c.country}</td>
            <td>{c.population}</td>
            <td>{c.area}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
