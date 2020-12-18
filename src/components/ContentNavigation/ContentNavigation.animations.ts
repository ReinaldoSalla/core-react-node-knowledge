const getCircleAnimation = (
  currFlag: boolean,
  prevFlag: boolean | null = null,
): any => ({
  border: currFlag && !prevFlag ? '1px solid red' : '1px solid white',
  background: currFlag && !prevFlag ? 'red' : 'rgba(0, 0, 0, 0)',
});

const getTextAnimation = (
  currFlag: boolean,
  prevFlag: boolean | null = null,
): any => ({
  color: currFlag && !prevFlag ? 'red' : 'white',
});

export {
  getTextAnimation,
  getCircleAnimation,
};