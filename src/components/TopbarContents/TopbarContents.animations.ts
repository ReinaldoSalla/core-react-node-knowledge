const getSvgAnimation = (isTopbarContentsVisible: boolean): any => ({
  config: { mass: 1, tension: 240, friction: 60 },
  from: { transform: 'rotate(0deg)' },
  to: async (next: any): Promise<void> => {
    await next({
      transform: isTopbarContentsVisible ? 'rotate(180deg)' : 'rotate(0deg)'
    });
  }
});

export default getSvgAnimation;