export default (countryName = '', dataArray) => {
  const trimmedSearchInput = countryName.trim();

  if (trimmedSearchInput.length) {//Only search when user provide a search value
    return dataArray.filter(item => item.name.toLowerCase().includes(trimmedSearchInput.toLowerCase()));
  }

  return dataArray;
}