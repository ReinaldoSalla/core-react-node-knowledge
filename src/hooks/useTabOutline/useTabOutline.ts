import { useEffect } from 'react';

const useTabOutline = () => {
  useEffect(() => {
    const onKeyDown = event => {
      if (event.keyCode === 9) {
        document.body.classList.add('tab');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  useEffect(() => {
    const onMouseDown = () => {
      document.body.classList.remove('tab');
    }
    window.addEventListener('mousedown', onMouseDown);
    return () => window.removeEventListener('mousedown', onMouseDown);
  })

  return null;
};

export default useTabOutline;