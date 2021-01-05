// const getHoverAnimation = (isHovering: boolean): any => ({
//   config: isHovering
//     ? { mass: 1, tension: 140, friction: 26 }
//     : {
//       mass: 2, tension: 140, friction: 26, clamp: true
//     },
//   from: { width: '0%' },
//   to: async (next: any): Promise<void> => {
//     await next({ width: isHovering ? '25%' : '0%' });
//   }
// });

const getTransition = (isHovering: boolean): any => ({
  config: isHovering
    ? { mass: 1, tension: 140, friction: 26 }
    : {
      mass: 2, tension: 140, friction: 26, clamp: true
    },
  from: { width: '0%' },
  enter: { width: '25%' },
  leave: { width: '0%' }
});

export default getTransition;