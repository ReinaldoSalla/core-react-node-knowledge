import { MutableRefObject } from 'react';

interface ContentCoreProps {
  introDomNode: MutableRefObject<HTMLElement>;
  setupDomNode: MutableRefObject<HTMLElement>;
  jsxDomNode: MutableRefObject<HTMLElement>;
  stylingDomNode: MutableRefObject<HTMLElement>;
  useStateDomNode: MutableRefObject<HTMLElement>;
  useReducerDomNode: MutableRefObject<HTMLElement>;
  finalCodeDomNode: MutableRefObject<HTMLElement>;
}

export type { ContentCoreProps };