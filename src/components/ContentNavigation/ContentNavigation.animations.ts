const getCircleAnimation = (
  currFlag: boolean,
  prevFlag: boolean | null = null
) => ({
  border: currFlag && !prevFlag ? '1px solid red' : '1px solid black',
  background: currFlag && !prevFlag ? 'red' : 'rgba(0, 0, 0, 0)' 
});

const getTextAnimation = (
  currFlag: boolean, 
  prevFlag: boolean | null = null,
) => ({
  color: currFlag && !prevFlag ? 'red' : 'black'
});

export { 
  getTextAnimation,
  getCircleAnimation 
};