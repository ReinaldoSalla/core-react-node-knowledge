const couroselTransitionProps: any = {
  config: {
    mass: 5,
    tension: 50,
    friction: 26,
    clamp: true
  },
  trail: 1000,
  from: { 
    transform: 'scale(0.1)', 
    opacity: 0 
  },
  enter: {
    opacity: 1,
    transform: 'scale(1)'
  },
  leave: {
    opacity: 0,
    transform: 'scale(2)'
  }
};

export { couroselTransitionProps };