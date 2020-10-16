const getCircleAnimation = (
  currFlag: boolean,
  prevFlag: boolean | null = null
) => ({
  border: currFlag && !prevFlag ? '1px solid red' : '1px solid black',
  background: currFlag && !prevFlag ? 'red' : 'rgba(0, 0, 0, 0)' 
});

const getTextAnimation = (
  innerWidth: number,
  currFlag: boolean, 
  prevFlag: boolean | null = null,
) => {
  if (innerWidth >= 768) {
    return {
      color: currFlag && !prevFlag ? 'red' : 'black'
    }
  }
  return { color: 'black' }
}


export { 
  getTextAnimation,
  getCircleAnimation 
};