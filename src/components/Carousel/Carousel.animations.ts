import { config } from 'react-spring';
import { SpringUnknownProps } from '../../shared/types';

const carouselTransitionProps = {
  config: {
    mass: 5,
    tension: 50,
    friction: 26,
    clamp: true,
  },
  trail: 1000,
  from: {
    transform: 'scale(0.1)',
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transform: 'scale(1)',
  },
  leave: {
    opacity: 0,
    transform: 'scale(2)',
  },
};

const getspring = (isTopbarSidebarVisible): SpringUnknownProps => ({
  config: config.slow,
  from: {
    opacity: isTopbarSidebarVisible ? 0.5 : 1,
  },
  to: async (next): Promise<void> => {
    await next({
      opacity: isTopbarSidebarVisible ? 0.5 : 1,
    });
  },
});

export {
  carouselTransitionProps,
  getspring,
};
