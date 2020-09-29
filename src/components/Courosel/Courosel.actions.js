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

export {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
};