const getTopbarAnimation = (
  isInTop: boolean,
  isTopbarSidebarVisible: boolean,
  isTopbarSearchVisible: boolean
): any => ({
  config: isInTop
    ? {
      mass: 2, tension: 120, friction: 26, clamp: true
    }
    : { mass: 1, tension: 120, friction: 26 },
  from: { height: '0%' },
  to: async (next: any): Promise<void> => {
    await next({
      height:
        (isInTop && !isTopbarSidebarVisible)
        && (isInTop && !isTopbarSearchVisible)
          ? '0%'
          : '100%'
    });
  }
});

export default getTopbarAnimation;