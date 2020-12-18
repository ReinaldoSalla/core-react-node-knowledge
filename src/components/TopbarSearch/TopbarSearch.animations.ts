const getSpring = (
  isTopbarSearchVisible: boolean,
  springRef: any,
): any => ({
  ref: springRef,
  from: {
    height: isTopbarSearchVisible ? '800px' : '0px',
  },
  to: async (next: any): Promise<void> => {
    await next({
      height: isTopbarSearchVisible ? '800px' : '0px',
    });
  },
});

const getTransitions = (
  transitionsRef: any,
  length: number,
): any => ({
  ref: transitionsRef,
  unique: true,
  trail: 500 / length,
  from: { opacity: 0, transform: 'scale(0.5)' },
  enter: { opacity: 1, transform: 'scale(1)' },
  leave: { opacity: 0, transform: 'scale(0.9)' },
});

export { getSpring, getTransitions };