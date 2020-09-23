const moveToFirstItem = (state) => {
  let newPastFirstClick;
  newPastFirstClick = state.pastFirstClick === 'no' && state.pastFirstClick !== 'almost'
    ? 'almost'
    : 'yes'
  return {
    firstTime: false,
    pastFirstClick: newPastFirstClick,
    index: 0
  };
};

const moveToSecondItem = (state) => {
  let newPastFirstClick;
  newPastFirstClick = state.pastFirstClick === 'no' && state.pastFirstClick !== 'almost'
    ? 'almost'
    : 'yes'
  return {
    firstTime: false,
    pastFirstClick: newPastFirstClick,
    index: 1
  };
};

const moveToThirdItem = (state) => {
  let newPastFirstClick;
  newPastFirstClick = state.pastFirstClick === 'no' && state.pastFirstClick !== 'almost'
    ? 'almost'
    : 'yes'
  return {
    firstTime: false,
    pastFirstClick: newPastFirstClick,
    index: 2
  };
};

export {
  moveToFirstItem,
  moveToSecondItem,
  moveToThirdItem
};