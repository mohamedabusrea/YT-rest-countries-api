import React from 'react';
import PropTypes from 'prop-types'

const EmptySearch = ({isLoading}) => {
  return (
    <div className='Countries__emptyData'>
      <img className='Countries__emptyImage'
           src={require('./assets/world-map.png')}
           alt="world map"/>
      {!isLoading ?
        <p className='Countries__emptyText'>No Results Found!</p>
        :
        <p className='Countries__emptyText'>Loading...</p>}
    </div>
  )
};

EmptySearch.propTypes = {
  isLoading: PropTypes.bool,
}

export default EmptySearch;