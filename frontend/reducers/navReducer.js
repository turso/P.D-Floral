const initialState = {
  navOpen: false
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_NAV':
      return Object.assign({}, state, {
        navOpen: true
      });
    case 'CLOSE_NAV':
      return Object.assign({}, state, {
        navOpen: false
      });
    case 'TOGGLE_NAV':
      return Object.assign({}, state, {
        navOpen: !state.navOpen
      });
    default:
      return state;
  }
};

export default navReducer;
