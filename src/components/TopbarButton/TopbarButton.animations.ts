const getTopbarButtonAnimation = (isHovering) => ({
  config: isHovering
    ? { mass: 1, tension: 140, friction: 26 }
    : { mass: 2, tension: 140, friction: 26 , clamp: true },
  from: { width: '0%' },
  to: async (next) => {
    await next({ width: isHovering ?  '33%' : '0%' });
  }
});

export { getTopbarButtonAnimation };