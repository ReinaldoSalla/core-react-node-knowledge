import CONSTANTS from '../../Courosel.constants';

const couroselInputAnimation = {
  config: { 
    duration: CONSTANTS.DURATION 
  },
  from: {
    width: 0,
    opacity: 0
  },
  to: {
    width: 99,
    opacity: 1
  },
  reset: true
};

const offset = 15;

export { couroselInputAnimation, offset };