const moveToFirstItem = (state) => {
  return {
    ...state,
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 0]
  };
};

const moveToSecondItem = (state) => {
  return {
    ...state,
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 1]
  };
};

const moveToThirdItem = (state) => {
  return {
    ...state,
    lastAndCurrIndex: [state.lastAndCurrIndex[1], 2]
  };
};

const activateButtons = (state) => {
  return {
    ...state,
    areButtonsActivated: true
  };
};

const deactivateButtons = (state) => {
  return {
    ...state,
    areButtonsActivated: false
  };
};

export {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem,
  deactivateButtons,
  activateButtons
};