const getTopbarAnimation = (isInTop) => ({
  config: isInTop
    ? { mass: 2, tension: 120, friction: 26, clamp: true }
    : { mass: 1, tension: 120, friction: 26 },
  from: { height: '0%' },
  to: async (next) => {
    await next({ height: isInTop ?  '0%' : '100%' });
  }
});

const getTopbarSidebarAnimation = (isSidebarVisible) => ({
  config: { duration: 1000 },
  from: { transform: 'rotate(0deg)' },
  to: async (next) => {
    await next({
      transform: isSidebarVisible ? 'rotate(180deg)' : 'rotate(0deg)',
    });
  },
});

export { 
  getTopbarAnimation,
  getTopbarSidebarAnimation 
};