import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'

import Tile from "../Tile/Tile.view";
import EmptySearch from "../EmptySearch/EmptySearch.view";

import './Countries.styles.scss'

const Countries = ({searchInput}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countriesArray, setCountriesArray] = useState([]);

  useEffect(() => fetchCountries(), []);

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

  const filterCountriesArray = (searchInput = '') => {
    const trimmedSeachInput = searchInput.trim();

    if (trimmedSeachInput) {
      return countriesArray.filter(item => item.name.toLowerCase().includes(trimmedSeachInput.toLowerCase()));
    }

    return countriesArray;
  }

  return (
    <div className='Countries'>
      {filterCountriesArray(searchInput).length ?
        <div className="Countries__content">
          {filterCountriesArray(searchInput).map((item, index) => <Tile key={index} data={item}/>)}
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