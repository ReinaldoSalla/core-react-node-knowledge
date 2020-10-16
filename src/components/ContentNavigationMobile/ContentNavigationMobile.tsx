import React from 'react';
import { ContentNavigationMobileItem } from './ContentNavigationMobile.styles';

const titles = [
  'Intro',
  'Setup',
  'JSX',
  'Styling',
  'useState',
  'useReducer',
  'Final Code'
];

const ContentNavigationMobile = () => (
  <ul>
    {titles.map((title, index) => (
      <ContentNavigationMobileItem key={index}>
        {index}. {title}
      </ContentNavigationMobileItem>
    ))}
  </ul>
);

export default ContentNavigationMobile;