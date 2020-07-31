export default (key) => {
  return JSON.parse(localStorage.getItem(key));
}