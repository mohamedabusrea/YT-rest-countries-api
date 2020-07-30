import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import MdArrowBack from 'react-ionicons/lib/MdArrowBack';

import formatNumber from "../../utils/formatNumber";
import EmptySearch from "../../components/EmptySearch/EmptySearch.view";

import './Country.styles.scss';

const Country = ({countriesArray}) => {
  useEffect(() => {
    generateCountryData(countryName);
  }, [countriesArray]);

  const {countryName} = useParams();

  const history = useHistory();

  const [data, setData] = useState({});

  const generateCountryData = (countryName) => {
    if (countriesArray.length) {
      const data = countriesArray.find(item => item.name.toLowerCase() === countryName.toLowerCase());

      setData(data || {});
    }
  }

  const generateStringFromArray = (array) => {
    return array.map(item => item.name).join(', ')
  }

  const generateBorders = (arrayValues, originalArray) => {
    const generatedBorders = [];

    arrayValues.forEach(alpha3Code => {
      const result = originalArray.find(item => item.alpha3Code === alpha3Code);
      generatedBorders.push(result.name);
    })
    return generatedBorders;
  }

  const goBack = () => history.push('/');

  return (
    <div className='Country'>
      <div className="Country__content">
        <div className="Country__backButton" onClick={goBack}>
          <MdArrowBack fontSize='20px' color={'var(--color-text)'}/>
          <p className='Country__backButtonLabel'>Back</p>
        </div>
        {(!Object.keys(data).length) ?
          <EmptySearch/>
          :
          <div className='Country__detailsContent'>
            <div className='Country__image'>
              <img src={data.flag} alt={data.name}/>
            </div>
            <div className='Country__details'>
              <p className='Country__name'>{countryName}</p>
              <div className='Country__moreDetails'>
                <div>
                  <p>Native Name:
                    <span className='Country__detailsValue'>
                      {data.nativeName}
                    </span>
                  </p>
                  <p>Population:
                    <span className='Country__detailsValue'>
                      {formatNumber(data.population)}
                    </span>
                  </p>
                  <p>Region:
                    <span className='Country__detailsValue'>
                      {data.region}
                    </span>
                  </p>
                  {data.subregion && <p>Sub Region:
                    <span className='Country__detailsValue'>
                      {data.subregion}
                    </span>
                  </p>}
                  {data.capital && <p>Capital:
                    <span className='Country__detailsValue'>
                      {data.capital}
                    </span>
                  </p>}
                </div>
                <div>
                  <p>Top Level Domain:
                    <span className='Country__detailsValue'>
                      {data.topLevelDomain}
                    </span>
                  </p>
                  <p>Currencies:
                    <span className='Country__detailsValue'>
                      {generateStringFromArray(data.currencies)}
                    </span>
                  </p>
                  <p>Languages:
                    <span className='Country__detailsValue'>
                      {generateStringFromArray(data.languages)}
                    </span>
                  </p>
                </div>
              </div>
              {data.borders.length ?
                <div className='Country__bordersContent'>
                  <p className='Country__borderLabel'>Border Countries:</p>
                  <div className='Country__bordersBg'>
                    <div className='Country__borders'>
                      {generateBorders(data.borders, countriesArray)
                        .map((item, index) =>
                          <div className='Country__borderValue' key={index}>
                            {item}
                          </div>)}
                    </div>
                  </div>
                </div> : null}

            </div>
          </div>
        }

      </div>
    </div>
  );
};

export default Country;