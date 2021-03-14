import { useEffect } from 'react';

const useTabOutline = (): void => {
  useEffect(() => {
    const onKeyDown = (event: any): void => {
      if (event.keyCode === 9) {
        document.body.classList.add('tab');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return (): void => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  useEffect(() => {
    const onMouseDown = (): void => {
      document.body.classList.remove('tab');
    };
    window.addEventListener('mousedown', onMouseDown);
    return (): void => {
      window.removeEventListener('mousedown', onMouseDown);
    };
  });
};

export default useTabOutline;