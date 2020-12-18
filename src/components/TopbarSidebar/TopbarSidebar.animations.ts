import { config } from 'react-spring';

const getSpring = (
  isTopbarSidebarVisible: boolean,
  springRef: any,
): any => ({
  config: config.slow,
  ref: springRef,
  from: {
    opacity: 0,
    transform: 'translate3d(-100%, 0, 0)',
  },
  to: async (next): Promise<void> => {
    await next({
      opacity: isTopbarSidebarVisible ? 1 : 0,
      transform: isTopbarSidebarVisible ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)',
    });
  },
});

const getTransitions = (
  isTopbarSidebarVisible: boolean,
  transitionsRef: any,
): any => ({
  ref: transitionsRef,
  unique: true,
  trail: isTopbarSidebarVisible ? 200 : 100,
  from: { opacity: 0, transform: 'scale(0.9)' },
  enter: { opacity: 1, transform: 'scale(1)' },
  leave: { opacity: 0, transform: 'scale(0.9)' },
});

export { getSpring, getTransitions };