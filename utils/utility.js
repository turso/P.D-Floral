// FUNCTIONS
const isThere = object => typeof object != 'undefined' && object != null;

const isThereMulti = (...objects) =>
  objects.reduce((acc, object) => (acc === false ? acc : isThere(object)), true);

const isThereValue = value =>
  isThere(value) && ((isNaN(value) && value.length > 0) || (!isNaN(value) && value > 0));

const isThereValueMulti = (...values) =>
  values.reduce((acc, value) => (acc === false ? acc : isThereValue(value)), true);

module.exports = {
  isThere,
  isThereMulti,
  isThereValue,
  isThereValueMulti
};
