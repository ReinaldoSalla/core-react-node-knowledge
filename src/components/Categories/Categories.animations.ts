import { config } from 'react-spring';

const getSpring = (isSidebarActive) => ({
  config: config.slow,
  from: { 
    opacity: isSidebarActive ? 0.5 : 1 
  },
  to: async (next) => {
    await next({
      opacity: isSidebarActive ? 0.5 : 1
    });
  },
});

export { getSpring };