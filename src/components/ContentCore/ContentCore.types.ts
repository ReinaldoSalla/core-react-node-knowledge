import { MutableRefObject } from 'react';

interface ContentCoreProps {
  introDomNode: MutableRefObject<HTMLDivElement>;
  setupDomNode: MutableRefObject<HTMLDivElement>;
  jsxDomNode: MutableRefObject<HTMLDivElement>;
  stylingDomNode: MutableRefObject<HTMLDivElement>;
  useStateDomNode: MutableRefObject<HTMLDivElement>;
  useReducerDomNode: MutableRefObject<HTMLDivElement>;
  finalCodeDomNode: MutableRefObject<HTMLDivElement>;
}

export type { ContentCoreProps };