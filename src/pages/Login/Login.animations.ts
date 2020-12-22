import { config } from 'react-spring';

const getLabelSpring = (isFocused: boolean): any => ({
  config: config.wobbly,
  from: {
    transform: 'scale(1) translate(0%, 0%)'
  },
  to: async (next: any): Promise<void> => {
    await next({
      transform: isFocused
        ? 'scale(0.8) translate(-30%, -200%)'
        : 'scale(1) translate(0%, 0%)'
    });
  }
});

export default getLabelSpring;