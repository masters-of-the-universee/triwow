const initialState = {
  value: ' '
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEW_USERNAME':
      return { ...state, value: action.payload.newName };
    default:
      return state;
  }
}

export default addReducer;
