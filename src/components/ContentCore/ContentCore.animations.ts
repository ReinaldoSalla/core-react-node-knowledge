const getTitleSpring = (): any => ({
  from: {
    opacity: 0,
    transform: 'translateY(-50%)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0%)',
  },
});

const getSectionSpring = (): any => ({
  from: {
    opacity: 0,
    transform: 'translateX(-10%)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0%)',
  },
});

export { getTitleSpring, getSectionSpring };