import setDataToDB from "./setDataToDB";
import getDataFromDB from "./getDataFromDB";

export const fetchCountries = async () => {
  const offlineData = getDataFromDB('countriesArray');

  if (offlineData) {
    return offlineData;
  }
  else {
    const response = await fetch('https://restcountries.eu/rest/v2/all');

    if (response.ok) {
      const json = await response.json();

      setDataToDB('countriesArray', json);
      return json;
    }
    else {
      alert("HTTP-Error: " + response.status);
      return [];
    }
  }
};
