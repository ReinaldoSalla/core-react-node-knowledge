const moveToFirstItem = (state) => {
  return {
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 0]
  };
};

const moveToSecondItem = (state) => {
  return {
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 1]
  };
};

const moveToThirdItem = (state) => {
  return {
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 2]
  };
};

export {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem
};