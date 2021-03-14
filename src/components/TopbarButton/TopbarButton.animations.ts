const getAnimation = (isHovering: boolean): any => ({
  config: isHovering
    ? { mass: 1, tension: 140, friction: 26 }
    : {
      mass: 2, tension: 140, friction: 26, clamp: true
    },
  from: { width: '0%' },
  enter: { width: '25%' },
  leave: { width: '0%' }
});

const getTransition = (isHovering: boolean): any => (
  'ontouchstart' in window
    ? null
    : getAnimation(isHovering)
);

export default getTransition;