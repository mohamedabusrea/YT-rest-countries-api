import React from 'react';

const Tile = ({data}) => {
  const numberFormat = (number) => {
    return new Intl.NumberFormat().format(number)
  }

  return (
    <div className='Tile'>
      <div className="Tile__top">
        <img className='Tile__img' src={data.flag} alt="flag"/>
      </div>
      <div className="Tile__bottom">
        <p className='Tile__name'>{data.name}</p>
        <p className='Tile__population'>
          <span className='Tile__label'>Population:</span> {numberFormat(data.population) || 'Unknown'}
        </p>
        <p className='Tile__region'>
          <span className='Tile__label'>Region:</span> {data.region}</p>
        <p className='Tile__capital'>
          <span className='Tile__label'>Capital:</span> {data.capital || 'Unknown'}</p>
      </div>
    </div>
  );
};

export default Tile;