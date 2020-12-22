import { config } from 'react-spring';

const getSvgAnimation = (isTopbarSidebarVisible: boolean): any => ({
  config: config.slow,
  from: { transform: 'rotate(0deg)' },
  to: async (next: any): Promise<void> => {
    await next({
      transform: isTopbarSidebarVisible
        ? 'rotate(180deg)'
        : 'rotate(0deg)'
    });
  }
});

export default getSvgAnimation;