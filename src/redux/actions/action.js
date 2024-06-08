export const ADD = (item) => {
  return {
    type: 'ADD',
    payload: item,
  };
};

export const REMOVE = (id) => {
  return {
    type: 'REMOVE',
    payload: id,
  };
};