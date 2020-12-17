import contents from '../../constants/contents';
import { ReactComponent as JavaScriptSvg } from '../../assets/icons/javascript.svg';
import { ReactComponent as ReactSvg } from '../../assets/icons/react.svg';
import { ReactComponent as ServerSvg } from '../../assets/icons/server.svg';

const metaContents = [
  'Curated tutorials, emphasizing on ES6+ features',
  'Concepts from React, focusing on function components and React Hooks',
  'Extending applications with Node.js and GraphQL',
];

const metaSubcontents = [
  'Iterating over sequences by repetition or by traversing an iterable',
  'Making async calls and avoiding callback hell',
  'Syntatic sugar for Generator plus Promises',
  'Manipulating state with the useState hook',
  'Decoupling the state management with the useReducer hook',
  'Dealing with side effects inside functional components',
  'Using the Intersection Observer with React',
  'Optimizing images in React',
  'Modeling backend APIs with GraphQL and integrating with the frontend',
  'Persisting unstructured data using a Non-Relational Database',
  'Authenticating users on the web with passport.js',
];

let counter = -1;

const getProcessedSubcontents = (subcontents) => {
  const processedSubcontents = subcontents.map((subcontent) => {
    counter++;
    return {
      title: subcontent,
      path: subcontent.toLowerCase().replaceAll(' ', ''),
      description: metaSubcontents[counter],
    };
  });
  return processedSubcontents;
};

const processedContents = contents.map((content, index) => ({
  ...content,
  description: metaContents[index],
  subcontents: getProcessedSubcontents(content.subcontents),
}));

const icons = [
  JavaScriptSvg,
  ReactSvg,
  ServerSvg,
];

export { processedContents, icons };