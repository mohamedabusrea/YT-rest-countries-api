export default (number) => {
  return new Intl.NumberFormat().format(number)
}