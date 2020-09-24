const moveToFirstItem = (state) => {
  return {
    firstIteration: false,
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 0]
  };
};

const moveToSecondItem = (state) => {
  return {
    firstIteration: false,
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 1]
  };
};

const moveToThirdItem = (state) => {
  return {
    fistIteration: false,
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 2]
  };
};

export {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem
};