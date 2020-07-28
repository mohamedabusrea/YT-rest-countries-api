import React, {useState} from 'react';
import classNames from "classnames";

import Header from './components/Header/Header.view';
import Search from './components/Search/Search.view';
import Countries from "./components/Countries/Countries.view";

import './App.scss';

function App() {
  const [isDarkFlag, setIsDarkFlag] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState();
  const [searchInput, setSearchInput] = useState();

  const AppClasses = classNames('App', {'App--isDark': isDarkFlag});

  return (
    <div className={AppClasses}>
      <div className="App__content">
        <Header isDarkFlag={isDarkFlag} setIsDarkFlag={setIsDarkFlag}/>
        <Search searchInput={searchInput}
                setSearchInput={setSearchInput}
                setSelectedRegion={setSelectedRegion}/>
        <Countries searchInput={searchInput}
                   selectedRegion={selectedRegion}/>
      </div>
    </div>
  );
}

export default App;
