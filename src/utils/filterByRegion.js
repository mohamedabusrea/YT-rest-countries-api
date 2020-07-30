import {DROPDOWN_OPTIONS} from "../components/Search/Search.constants";

export default (regionObject, dataArray) => {
  if (regionObject.value !== DROPDOWN_OPTIONS[0].value) {//only filter when value is not "All"
    return dataArray.filter(item => item.region.toLowerCase() === regionObject.value);
  }

  return dataArray;
}