import React from 'react';
import MdSearch from 'react-ionicons/lib/MdSearch';
import Select from 'react-select';

import {DROPDOWN_OPTIONS} from "./Search.constants";

import './Search.styles.scss'

const Search = ({searchInput, setSearchInput, setSelectedRegion}) => {
  const dropdownStyles = {
    container: styles => ({...styles, height: '100%'}),
    control: styles => ({
      ...styles,
      border: 'none',
      height: 'var(--input-height)',
      boxShadow: '0 2px 5px 3px rgba(0, 0, 0, .04)',
      borderRadius: '5px',
    }),
    valueContainer: styles => ({
      ...styles,
      paddingLeft: 'var(--default-padding)',
    }),
    indicatorSeparator: styles => ({
      ...styles,
      display: 'none',
    }),
  };

  const theme = theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: 'var(--color-background)',
      neutral0: 'var(--color-elements)',
      neutral80: 'var(--color-text)',
    },
  });

  const onSearchEvent = (event) => {
    setSearchInput(event.target.value);
  }

  return (
    <div className='Search'>
      <div className='Search__content'>
        <div className="Search__inputContent">
          <MdSearch className='Search__icon'
                    fontSize='24px'
                    color='var(--color-input)'/>
          <input className='Search__input'
                 type='text'
                 placeholder='Search for a country...'
                 value={searchInput}
                 onChange={onSearchEvent}/>
        </div>
        <div className='Search__dropdownContent'>
          <Select options={DROPDOWN_OPTIONS}
                  placeholder='Filter by region'
                  onChange={setSelectedRegion}
                  styles={dropdownStyles}
                  theme={theme}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;