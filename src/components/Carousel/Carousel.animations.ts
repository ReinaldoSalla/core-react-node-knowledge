const getMotionDisabledTransition = () => ({
  trail: 1000,
  from: {
    transform: 'scale(1)'
  },
  enter: {
    transform: 'scale(1)'
  },
  leave: {
    transform: 'scale(1)'
  }
});

const getMotionEnabledTransition = () => ({
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
});

const getTransition = (): any => (
  window.matchMedia('(prefers-reduced-motion)').matches
    ? getMotionDisabledTransition()
    : getMotionEnabledTransition()
);

export default getTransition;