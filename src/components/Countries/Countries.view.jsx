import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group'

import Tile from "../Tile/Tile.view";
import EmptySearch from "../EmptySearch/EmptySearch.view";

import './Countries.styles.scss'
import filterByName from "../../utils/filterByName";
import filterByRegion from "../../utils/filterByRegion";

const Countries = ({countriesArray, searchInput, selectedRegion}) => {
  const [filteredCountriesArray, setFilteredCountriesArray] = useState([]);

  useEffect(() => {
    filterCountriesArray(searchInput, selectedRegion)
    /*eslint-disable-next-line*/
  }, [countriesArray, searchInput, selectedRegion]);

  const filterCountriesArray = (searchTerm, regionObject) => {
    let result;

    result = filterByName(searchTerm, countriesArray);
    result = filterByRegion(regionObject, result);

    setFilteredCountriesArray(result);
  };

  const isLoading = !filteredCountriesArray.length && !searchInput.length;

  return (
    <div className='Countries'>
      {filteredCountriesArray.length ?
        <div className="Countries__content">
          {filteredCountriesArray.map((item, index) => <CSSTransition classNames="Tile"
                                                                      in={true}
                                                                      timeout={0}
                                                                      appear={true}
                                                                      key={index}>
              <Tile data={item} style={{transitionDelay: `${index * 100}ms`}}/>
            </CSSTransition>
          )}
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