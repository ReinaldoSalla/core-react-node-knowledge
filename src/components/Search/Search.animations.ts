const getSpring = (isSearchVisible, springRef) => ({
  ref: springRef,
  from: {
    height: isSearchVisible ? '800px' : '0px'
  },
  to: async (next) => {
    await next({
      height: isSearchVisible ? '800px' : '0px',
    });
  },
});

const getTransitions = (isSearchVisible, transitionsRef, length) => ({
  ref: transitionsRef,
  unique: true,
  trail: 500 / length,
  from: { opacity: 0, transform: 'scale(0.5)', },
  enter: { opacity: 1, transform: 'scale(1)', },
  leave: { opacity: 0, transform: 'scale(0.9)', },
})

export { getSpring, getTransitions };