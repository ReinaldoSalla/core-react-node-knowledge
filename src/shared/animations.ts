import { config } from 'react-spring';

const getOpacitySpring = (isTopbarSidebarVisible: boolean): any => ({
  config: config.slow,
  from: {
    opacity: isTopbarSidebarVisible ? 0.5 : 1
  },
  to: async (next: any): Promise<void> => {
    await next({
      opacity: isTopbarSidebarVisible ? 0.5 : 1
    });
  }
});

export default getOpacitySpring;