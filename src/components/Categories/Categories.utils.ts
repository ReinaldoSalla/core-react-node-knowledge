/* eslint-disable max-len */

import contents from '../../constants/contents';
import {
  ReactComponent as JavaScriptSvg
} from '../../assets/icons/javascript.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { normalToHifen } from '../../utils/textManipulation';

const injectableContents = [
  'Curated tutorials, emphasizing on ES6+ features',
  'Interview questions envolving traversable sequences',
  'Concepts from React, focusing on functional components and React Hooks'
];

const injectableSubcontents = [
  {
    description: [
      'Determine the order of execution for code with timeouts, promises and async-await',
      'todo description placeholder',
      'todo description placeholder'
    ]
  },
  {
    description: [
      'Find a pair of numbers inside an array whose sum equals to a target sum',
      'todo description placeholder',
      'todo description placeholder'
    ]
  },
  {
    description: [
      'Create a components able to lazy load images using the Intersection Observer API',
      'todo description placeholder',
      'todo description placeholder'
    ]
  }
];

const getProcessedSubcontents = (
  subcontents: any,
  injectableIndex: number
): any => (
  subcontents.map((subcontent: any, index: number) => ({
    title: subcontent,
    path: normalToHifen(subcontent),
    description: injectableSubcontents[injectableIndex].description[index]
  }))
);

const processedContents = contents.map((content, index) => ({
  ...content,
  description: injectableContents[index],
  subcontents: getProcessedSubcontents(content.subcontents, index)
}));

const icons = [
  JavaScriptSvg,
  JavaScriptSvg,
  ReactSvg
];

export { processedContents, icons };