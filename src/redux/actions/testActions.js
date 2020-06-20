export const updateTestVal = newVal => dispatch => {
  dispatch({
    type: "UPDATE_TEST",
    payload: newVal
  });
};
