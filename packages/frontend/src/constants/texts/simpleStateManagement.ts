/* eslint-disable max-len */

// todo
// send the seo data
// send the code path
// send the code ts or tsx
// send the link url

const filler = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
`;

const title = `
React - Simple State Management
`;

const introSubtitle = `
Intro
`;

const introParagraph1 = `
The guide aims to explore the useState hook from
react. We'l build a Navbar that re-renders a list of items 
when hovered over. And we'l also create a form that manipulates
state in the form of text and displays submitted items in a table.
`;

const setupSubtitle = `
Setup
`;

const setupParagraph1 = `
Install the latest recommended version of *Node.js
`;

const setupParagraph2 = `
Install the lastest recommended version of *Node.js* and later deno
`;

const commands = [
  '$ npx create-react-app progrtmp-simple-state-management',
  '$ cd progrtmp-simple-state-management',
  '$ npm run start'
];

const setupParagraph3 = `
After running npm run start, React will lauch the app in 
http://localhost:3000
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
${filler}
`;

const navbarSubtitle = `
Nabvar
`;

const navbarParagraph1 = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
${filler}
`;

// big ts chunk
// import React, { useEffect, FunctionComponent } from 'react';
// import { animated, useSpring } from 'react-spring';
// import Prism from 'prismjs';
// import {
//   Article,
//   ContentCoreHeading,
//   ContentCoreTitle,
//   ContentCoreText,
//   ContentCoreLink,
//   ContentCoreContainer,
//   ContentCoreCommand
// } from './ContentCore.styles';
// import { ContentCoreProps } from './ContentCore.types';
// import { getTitleSpring, getSectionSpring } from './ContentCore.animations';
// import 'prismjs/components/prism-typescript.min';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
// // import 'prismjs/themes/prism-twilight.css';
// import './ContentCore.css';

// setTimeout(() => {
//   console.log('top level setTimeout 2ms');
// }, 2);

// setTimeout(() => {
//   console.log('top level setTimeout 1ms');
// }, 1);

// setTimeout(() => {
//   console.log('top level setTimeout 0ms');
// }, 0);

// const promise = new Promise((resolve) => {
//   console.log('promise constructor before resolve');
//   resolve('Promise resolved');
// });

// promise.then((result) => {
//   console.log(\`result of createPromise().then = \${result}\`);
// });

// const callPromise = async (): Promise<void> => {
//   console.log('started async function callPromise');
//   const result = await promise;
//   console.log(\`result of callPromise using async-await = \${result}\`);
//   console.log(\`finished async function callPromise\`);
// };

// callPromise();

// const setTimeoutAfterResolve = (ms: number): Promise<void> => {
//   return new Promise((resolve) => {
//     resolve;
//     setTimeout(() => {
//       console.log(\`setTimeoutAfterResolve \${ms}ms\`);
//     }, ms);
//   });
// };

// setTimeoutAfterResolve(1000)
//   .then(() => console.log('.then for setTimeoutAfterResolve'));

// const callSetTimeoutAfterResolve = async (ms: number): Promise<void> => {
//   console.log('start async function callSetTimeoutAfterResolve');
//   await setTimeoutAfterResolve(ms);
//   console.log('finished async function callSetTimeoutAfterResolve');
// };

// callSetTimeoutAfterResolve(1000);

// const asyncSleep = (ms: number): Promise<void> => (
//   new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   })
// );

// asyncSleep(1000)
//   .then(() => {
//     console.log(\`.then for asynSleep 1000ms\`);
//   })

// const callAsyncSleep = async (ms: number): Promise<void> => {
//   console.log('start async function callAsyncSleep');
//   await asyncSleep(ms);
//   console.log(\`finished async function callAsyncSleep\`);
// };

// callAsyncSleep(1000);

// console.log('sync finished');

// big tsx chunk
// import React, {
//   useReducer, useEffect, useContext, useRef, FunctionComponent, useMemo
// } from 'react';
// import { useTransition } from 'react-spring';
// import CarouselWrapper from './Carousel.styles';
// import components from './Carousel.mapper';
// import initialState from './Carousel.init';
// import getTransition from './Carousel.animations';
// import reducer from './Carousel.reducer';
// import { CarouselProps } from './Carousel.types';
// import CONSTANTS from './Carousel.constants';
// import CarouselInput from '../CarouselInput';
// import useDocumentVisibility from '../../hooks/useDocumentVisibility';
// import CarouselBackground from '../CarouselBackground';
// import { ModalsState } from '../../shared/context/ModalsContext';

// const Carousel: FunctionComponent<CarouselProps> = ({
//   scrolls
// }): JSX.Element => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const transitions = useTransition(state.index, null, {
//     ...getTransition(),
//     order: ['leave', 'enter', 'update']
//   } as any);
//   const isDocumentVisible: boolean = useDocumentVisibility();
//   const { isTopbarSidebarVisible } = useContext(ModalsState);

//   const seconds = useRef(0);

//   useEffect(() => {
//     let hasUnmounted = false;
//     const intervalId = setInterval(() => {
//       seconds.current += 1;
//       if (seconds.current === 10) {
//         seconds.current = 0;
//         if (!hasUnmounted) {
//           dispatch({ type: 'MOVE_TO_NEXT_ITEM' });
//         }
//       }
//     }, 1000);
//     if (!isDocumentVisible || isTopbarSidebarVisible) {
//       seconds.current = 0;
//       clearInterval(intervalId);
//     }
//     return (): void => {
//       clearInterval(intervalId);
//       hasUnmounted = true;
//     };
//   }, [isDocumentVisible, isTopbarSidebarVisible]);

//   const handleFirstClick = (): void => {
//     dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
//     seconds.current = 0;
//   };

//   const handleSecondClick = (): void => {
//     dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
//     seconds.current = 0;
//   };

//   const handleThirdClick = (): void => {
//     dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
//     seconds.current = 0;
//   };

//   const backgroundMemo = useMemo(() => (
//     <CarouselBackground />
//   ), []);

//   const inputMemo = useMemo(() => (
//     <CarouselInput
//       index={state.index}
//       handleFirstClick={handleFirstClick}
//       handleSecondClick={handleSecondClick}
//       handleThirdClick={handleThirdClick}
//     />
//   ), [state.index]);

//   return (
//     <>
//       {backgroundMemo}
//       <CarouselWrapper>
//         {transitions.map(({ item, props, key }) => {
//           const Component = components[item];
//           return (
//             <Component
//               key={key}
//               style={props}
//               scrolls={scrolls}
//               index={item}
//             />
//           );
//         })}
//         {inputMemo}
//       </CarouselWrapper>
//     </>
//   );
// };

// export default Carousel;

const navbarCode1 = `
import React, {
  useReducer, useEffect, useContext, useRef, FunctionComponent, useMemo
} from 'react';
import { useTransition } from 'react-spring';
import CarouselWrapper from './Carousel.styles';
import components from './Carousel.mapper';
import initialState from './Carousel.init';
import getTransition from './Carousel.animations';
import reducer from './Carousel.reducer';
import { CarouselProps } from './Carousel.types';
import CONSTANTS from './Carousel.constants';
import CarouselInput from '../CarouselInput';
import useDocumentVisibility from '../../hooks/useDocumentVisibility';
import CarouselBackground from '../CarouselBackground';
import { ModalsState } from '../../shared/context/ModalsContext';

const Carousel: FunctionComponent<CarouselProps> = ({
  scrolls
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const transitions = useTransition(state.index, null, {
    ...getTransition(),
    order: ['leave', 'enter', 'update']
  } as any);
  const isDocumentVisible: boolean = useDocumentVisibility();
  const { isTopbarSidebarVisible } = useContext(ModalsState);

  const seconds = useRef(0);

  useEffect(() => {
    let hasUnmounted = false;
    const intervalId = setInterval(() => {
      seconds.current += 1;
      if (seconds.current === 10) {
        seconds.current = 0;
        if (!hasUnmounted) {
          dispatch({ type: 'MOVE_TO_NEXT_ITEM' });
        }
      }
    }, 1000);
    if (!isDocumentVisible || isTopbarSidebarVisible) {
      seconds.current = 0;
      clearInterval(intervalId);
    }
    return (): void => {
      clearInterval(intervalId);
      hasUnmounted = true;
    };
  }, [isDocumentVisible, isTopbarSidebarVisible]);

  const handleFirstClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_FIRST_ITEM });
    seconds.current = 0;
  };

  const handleSecondClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_SECOND_ITEM });
    seconds.current = 0;
  };

  const handleThirdClick = (): void => {
    dispatch({ type: CONSTANTS.MOVE_TO_THIRD_ITEM });
    seconds.current = 0;
  };

  const backgroundMemo = useMemo(() => (
    <CarouselBackground />
  ), []);

  const inputMemo = useMemo(() => (
    <CarouselInput
      index={state.index}
      handleFirstClick={handleFirstClick}
      handleSecondClick={handleSecondClick}
      handleThirdClick={handleThirdClick}
    />
  ), [state.index]);

  return (
    <>
      {backgroundMemo}
      <CarouselWrapper>
        {transitions.map(({ item, props, key }) => {
          const Component = components[item];
          return (
            <Component
              key={key}
              style={props}
              scrolls={scrolls}
              index={item}
            />
          );
        })}
        {inputMemo}
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
`;

const formSubtitle = `
Form
`;

const formParagraph1 = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
${filler}
`;

const tableSubtitle = `
Table
`;

const tableParagraph1 = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
${filler}
`;

const finalSubtitle = `
Final Code
`;

const finalParagraph1 = `
You can check the final code by acessing the github repository
`;

const finalParagraph2 = `
And you can also check the application running on codesandbox
`;

const simpleStateManagement = {
  title,
  text: [
    {
      subtitle: introSubtitle,
      paragraphsCommandsCode: [
        { paragraph: introParagraph1 }
      ]
    },
    {
      subtitle: setupSubtitle,
      paragraphsCommandsCode: [
        { paragraphWithEndLink: setupParagraph1 },
        { paragraphWithMiddleLink: setupParagraph2 },
        { command: commands },
        { paragraph: setupParagraph3 }
      ]
    },
    {
      subtitle: navbarSubtitle,
      paragraphsCommandsCode: [
        { paragraph: navbarParagraph1 },
        { code: navbarCode1 }
      ]
    },
    {
      subtitle: formSubtitle,
      paragraphsCommandsCode: [
        { paragraph: formParagraph1 }
      ]
    },
    {
      subtitle: tableSubtitle,
      paragraphsCommandsCode: [
        { paragraph: tableParagraph1 }
      ]
    },
    {
      subtitle: finalSubtitle,
      paragraphsCommandsCode: [
        { paragraph: finalParagraph1 },
        { paragraph: finalParagraph2 }
      ]
    }
  ]
};

export default simpleStateManagement;