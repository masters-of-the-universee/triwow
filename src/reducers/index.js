const initialState = {
  user: ' '
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEW_USERNAME':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default addReducer;
