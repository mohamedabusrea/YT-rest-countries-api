export const fetchCountries = async () => {
  const response = await fetch('https://restcountries.eu/rest/v2/all');

  if (response.ok) {
    return await response.json();
  }
  else {
    alert("HTTP-Error: " + response.status);
    return [];
  }
};
