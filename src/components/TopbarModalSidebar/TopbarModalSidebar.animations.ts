import { config } from 'react-spring';

const getSpring = (isTopbarModalSidebarVisible, springRef) => ({
  config: config.slow,
  ref: springRef,
  from: {
    opacity: 0,
    transform: 'translate3d(-100%, 0, 0)'
  },
  to: async (next) => {
    await next({
      opacity: isTopbarModalSidebarVisible ? 1 : 0,
      transform: isTopbarModalSidebarVisible ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)'
    });
  }
});

const getTransitions = (isTopbarModalSidebarVisible, transitionsRef) => ({
  ref: transitionsRef,
  unique: true,
  trail: isTopbarModalSidebarVisible ? 200 : 100,
  from: { opacity: 0, transform: 'scale(0.9)' },
  enter: { opacity: 1, transform: 'scale(1)' },
  leave: { opacity: 0, transform: 'scale(0.9)' }
});

export { getSpring, getTransitions };