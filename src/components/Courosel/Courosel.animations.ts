import { config } from 'react-spring';

const couroselTransitionProps: any = {
  config: {
    mass: 5,
    tension: 50,
    friction: 26,
    clamp: true
  },
  trail: 1000,
  from: { 
    transform: 'scale(0.1)', 
    opacity: 0 
  },
  enter: {
    opacity: 1,
    transform: 'scale(1)'
  },
  leave: {
    opacity: 0,
    transform: 'scale(2)'
  }
};

const getCouroselSpring = (isSidebarActive) => ({
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

export { 
  couroselTransitionProps,
  getCouroselSpring 
};