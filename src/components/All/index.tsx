import { All } from "@components/All/All";
import React, { useEffect, useState } from "react";
import { SortType } from "./SortButton";
const countryByName = require("../../../country-json/src/country-by-name.json");
const countryByArea = require("../../../country-json/src/country-by-surface-area.json");
const countryByPopulation = require("../../../country-json/src/country-by-population.json");

interface Country {
  country: string;
  population?: number;
  area?: number;
}


const mergeCountryData = (
  names: Country[],
  populations: { country: string; population: number }[],
  areas: { country: string; area: number }[]
): Country[] => {
  const mergedData: { [key: string]: Country } = {};

  names.forEach((item) => {
    if (!mergedData[item.country]) {
      mergedData[item.country] = { country: item.country };
    }
  });

  populations.forEach((item) => {
    if (!mergedData[item.country]) {
      mergedData[item.country] = { country: item.country };
    }
    mergedData[item.country].population = item.population;
  });

  areas.forEach((item) => {
    if (!mergedData[item.country]) {
      mergedData[item.country] = { country: item.country };
    }
    mergedData[item.country].area = item.area;
  });

  return Object.values(mergedData);
};

const sortCountries = (countries: Country[], sortType: SortType, sortAsc: boolean): Country[] => {
  return [...countries].sort((a, b) => {
      let compare = 0;

      switch (sortType) {
        case "name":
            compare = a.country.localeCompare(b.country);
            break;
        case "population":
            compare = (a.population || 0) - (b.population || 0);
            break;
        case "area":
            compare = (a.area || 0) - (b.area || 0);
            break;
      }

      return sortAsc ? compare : -compare;
  });
};

const App = (): JSX.Element => {
  const [currentSort, setCurrentSort] = useState<SortType>();
  const [sortAsc, toggleSortAsc] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);

  const handleSortUpdate = (newType: SortType) => {
    if (newType === currentSort) {
      toggleSortAsc(!sortAsc);
    }else{
      setCurrentSort(newType);
      toggleSortAsc(true)
    }
    const sortedCountries = sortCountries(countries, newType, sortAsc);
    setCountries(sortedCountries);
  };

  useEffect(() => {
    const mergedCountries = mergeCountryData(
      countryByName,
      countryByPopulation,
      countryByArea
    );
    setCountries(mergedCountries);
  }, []);

  const sortedCountries = sortCountries(countries, currentSort, sortAsc);

  return (
    <All
      currentSort={currentSort}
      sortAsc={sortAsc}
      countries={countries}
      setCurrentSort={handleSortUpdate}
    />
  );
};

export default App;