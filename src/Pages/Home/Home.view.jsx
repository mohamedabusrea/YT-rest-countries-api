import React, {useState} from 'react';
import Search from "../../components/Search/Search.view";
import Countries from "../../components/Countries/Countries.view";
import {DROPDOWN_OPTIONS} from "../../components/Search/Search.constants";

const Home = ({countriesArray}) => {
  const [selectedRegion, setSelectedRegion] = useState(DROPDOWN_OPTIONS[0]);
  const [searchInput, setSearchInput] = useState('');

  return (
    <>
      <Search searchInput={searchInput}
              setSearchInput={setSearchInput}
              setSelectedRegion={setSelectedRegion}/>
      <Countries countriesArray={countriesArray}
                 searchInput={searchInput}
                 selectedRegion={selectedRegion}/>
    </>
  );
};

export default Home;