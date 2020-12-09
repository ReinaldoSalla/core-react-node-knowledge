import ExCSSStyleDeclaration from './getScrollbarWidth.types';

const getScrollbarWidth = (): number => {
  const outer = document.createElement('div');
  const style = outer.style as ExCSSStyleDeclaration;
  style.visibility = 'hidden';
  style.overflow = 'scroll';
  style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  const parentNode = outer.parentNode as Node;
  parentNode.removeChild(outer);
  return scrollbarWidth;
};

export default getScrollbarWidth;