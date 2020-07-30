import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Tile from "../Tile/Tile.view";
import EmptySearch from "../EmptySearch/EmptySearch.view";

import './Countries.styles.scss'
import filterByName from "../../utils/filterByName";
import filterByRegion from "../../utils/filterByRegion";

const Countries = ({countriesArray, searchInput, selectedRegion}) => {
  const [filteredCountriesArray, setFilteredCountriesArray] = useState([]);

  useEffect(() => filterCountriesArray(searchInput, selectedRegion), [countriesArray, searchInput, selectedRegion]);

  const filterCountriesArray = (searchTerm, regionObject) => {
    let result;

    result = filterByName(searchTerm, countriesArray);
    result = filterByRegion(regionObject, result);

    setFilteredCountriesArray(result);
  };

  const isLoading = !countriesArray.length && !filteredCountriesArray.length;

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