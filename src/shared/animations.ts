import { config } from 'react-spring';

const getOpacitySpring = (isSidebarVisible: boolean): any => ({
  config: config.slow,
  from: { 
    opacity: isSidebarVisible ? 0.5 : 1 
  },
  to: async (next) => {
    await next({ 
      opacity: isSidebarVisible ? 0.5 : 1
    });  
  }
});

export { getOpacitySpring };