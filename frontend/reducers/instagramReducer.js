const instagramReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default instagramReducer;
