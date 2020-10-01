const moveToFirstItem = (state) => {
  return {
    ...state,
    indexesStackOrderTwo: [state.indexesStackOrderTwo[1], 0]
  };
};

const moveToSecondItem = (state) => {
  return {
    ...state,
    indexesStackOrderTwo: [state.indexesStackOrderTwo[1], 1]
  };
};

const moveToThirdItem = (state) => {
  return {
    ...state,
    indexesStackOrderTwo: [state.indexesStackOrderTwo[1], 2]
  };
};

const hiddenlyMoveLastItem = (state) => ({
  ...state,
  indexesStackOrderTwo: [42, state.indexesStackOrderTwo[1]]
});

export {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
  hiddenlyMoveLastItem
};