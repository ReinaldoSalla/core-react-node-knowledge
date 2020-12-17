import { config } from 'react-spring';

const getSpring = (isTopbarSidebarVisible) => ({
  config: config.slow,
  from: {
    opacity: isTopbarSidebarVisible ? 0.5 : 1,
  },
  to: async (next) => {
    await next({
      opacity: isTopbarSidebarVisible ? 0.5 : 1,
    });
  },
});

export { getSpring };
