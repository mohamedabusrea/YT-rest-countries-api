import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'

import Tile from "../Tile/Tile.view";
import EmptySearch from "../EmptySearch/EmptySearch.view";

import './Countries.styles.scss'
import {DROPDOWN_OPTIONS} from "../Search/Search.constants";

const Countries = ({searchInput, selectedRegion}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countriesArray, setCountriesArray] = useState([]);
  const [filteredCountriesArray, setFilteredCountriesArray] = useState([]);

  useEffect(() => fetchCountries(), []);
  useEffect(() => filterCountriesArray(searchInput, selectedRegion), [countriesArray, searchInput, selectedRegion]);

  const fetchCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(async (response) => {
        if (response.ok) {
          const countriesArray = await response.json();

          setCountriesArray(countriesArray);
          setIsLoading(false);
        }
        else {
          alert("HTTP-Error: " + response.status);
        }
      })
  };

  const filterCountriesArray = (searchTerm, regionObject) => {
    let result;

    result = filterByName(searchTerm, countriesArray);
    result = filterByRegion(regionObject, result);

    setFilteredCountriesArray(result);
  };

  const filterByName = (countryName = '', dataArray) => {
    const trimmedSearchInput = countryName.trim();

    if (trimmedSearchInput.length) {//Only search when user provide a search value
      return dataArray.filter(item => item.name.toLowerCase().includes(trimmedSearchInput.toLowerCase()));
    }

    return dataArray;
  }

  const filterByRegion = (regionObject, dataArray) => {
    if (regionObject.value !== DROPDOWN_OPTIONS[0].value) {//only filter when value is not "All"
      return dataArray.filter(item => item.region.toLowerCase() === regionObject.value);
    }

    return dataArray;
  }

  return (
    <div className='Countries'>
      {filteredCountriesArray.length ?
        <div className="Countries__content">
          {filteredCountriesArray.map((item, index) => <Tile key={index} data={item}/>)}
        </div>
        :
        <EmptySearch isLoading={isLoading}/>
      }
    </div>
  );
};

Countries.propTypes = {
  searchInput: PropTypes.string,
}

export default Countries;