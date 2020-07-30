import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from './components/Header/Header.view';

import './App.scss';
import Country from "./Pages/Country/Country.view";
import Home from "./Pages/Home/Home.view";
import {fetchCountries} from "./utils/fetchCountries";

function App() {
  useEffect(() => {
    fetchCountries().then(result => {
      setCountriesArray(result);
    });
  }, [])

  const [isDarkFlag, setIsDarkFlag] = useState(false);
  const [countriesArray, setCountriesArray] = useState(false);

  const AppClasses = classNames('App', {'App--isDark': isDarkFlag});

  return (
    <div className={AppClasses}>
      <div className="App__content">
        <Header isDarkFlag={isDarkFlag} setIsDarkFlag={setIsDarkFlag}/>
        <Router>
          <Switch>
            <Route path={`/:countryName`}>
              <Country countriesArray={countriesArray}/>
            </Route>
            <Route path='/'>
              <Home countriesArray={countriesArray}/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
