import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM,
});

export const toggleEditing = () => ({
  type: c.TOGGLE_EDITING,
});

export const addKeg = (keg) => {
  const {name, brewery, abv, description, price, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name,
    brewery,
    abv,
    description,
    price,
    pints,
    id
  }
}