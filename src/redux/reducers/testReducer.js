const initialState = {
  testVal: "Test"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TEST":
      return {
        ...state,
        testVal: action.payload
      };
    default:
      return state;
  }
};
