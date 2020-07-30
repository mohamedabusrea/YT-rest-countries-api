import React from 'react';
import {Link} from "react-router-dom";

import './Tile.styles.scss'
import formatNumber from "../../utils/formatNumber";

const Tile = ({data}) => {
  return (
    <Link to={`/${data.name}`} className='Tile__link'>
      <div className='Tile'>
        <div className="Tile__top">
          <img className='Tile__image' src={data.flag} alt={data.name}/>
        </div>
        <div className="Tile__bottom">
          <p className='Tile__name'>{data.name}</p>
          <p className='Tile__population'>
            <span className='Tile__label'>Population:</span> {formatNumber(data.population) || 'Unknown'}
          </p>
          <p className='Tile__region'>
            <span className='Tile__label'>Region:</span> {data.region}</p>
          <p className='Tile__capital'>
            <span className='Tile__label'>Capital:</span> {data.capital || 'Unknown'}</p>
        </div>
      </div>
    </Link>
  );
};

export default Tile;