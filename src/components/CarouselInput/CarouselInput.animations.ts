const getDisabledText = (): any => ({
  color: 'black'
});

const getTextSpring = (currentIndex: number, targetIndex: number): any => ({
  config: { duration: 2000 },
  color: currentIndex === targetIndex ? 'black' : 'white'
});

const getTextProps = (currentIndex: number, targetIndex: number): any => (
  window.matchMedia('(prefers-reduced-motion)').matches
    ? getDisabledText()
    : getTextSpring(currentIndex, targetIndex)
);

const getInnerDisabled = (): any => ({
  background: 'white',
  width: '100%'
});

const getInnerSpring = (currentIndex: number, targetIndex: number): any => ({
  config: { duration: 2000 },
  background: currentIndex === targetIndex ? 'white' : 'rgba(0, 0, 0, 0)',
  width: currentIndex === targetIndex ? '98%' : '0%'
});

const getInnerProps = (currentIndex: number, targetIndex: number): any => (
  window.matchMedia('(prefers-reduced-motion)').matches
    ? getInnerDisabled()
    : getInnerSpring(currentIndex, targetIndex)
);

export {
  getTextProps,
  getInnerProps
};