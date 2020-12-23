import { config } from 'react-spring';

const getLabelSpring = (isFocused: boolean, length: number): any => ({
  config: config.wobbly,
  from: {
    transform: 'scale(1) translate(0%, -50%)'
  },
  to: async (next: any): Promise<void> => {
    await next({
      transform: isFocused || length > 0
        ? 'scale(0.8) translate(-100%, -275%)'
        : 'scale(1) translate(0%, -50%)'
    });
  }
});

export default getLabelSpring;