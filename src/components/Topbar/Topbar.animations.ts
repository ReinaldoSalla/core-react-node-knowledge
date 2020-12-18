const getTopbarAnimation = (
  isInTop,
  isTopbarSidebarVisible,
  isTopbarSearchVisible,
): any => ({
  config: isInTop
    ? {
      mass: 2, tension: 120, friction: 26, clamp: true,
    }
    : { mass: 1, tension: 120, friction: 26 },
  from: { height: '0%' },
  to: async (next): Promise<void> => {
    await next({
      height:
        (isInTop && !isTopbarSidebarVisible)
        && (isInTop && !isTopbarSearchVisible)
          ? '0%'
          : '100%',
    });
  },
});

export default getTopbarAnimation;