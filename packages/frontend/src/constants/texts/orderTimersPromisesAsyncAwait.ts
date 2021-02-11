/* eslint-disable max-len */

// const title = `
// React - Simple State Management
// `;

// const seo = `
// Interview questions, solutions, tutorial, guides for JavaScript promises, async-await, setTimeout, setInterval, asyncronous programming.
// `;

// const introSubtitle = `
// Intro
// `;

// const introParagraph1 = `
// The guide aims to explore the useState hook from
// react. We'l build a Navbar that re-renders a list of items
// when hovered over. And we'l also create a form that manipulates
// state in the form of text and displays submitted items in a table.
// `;

const navbarSubtitle = `
Nabvar
`;

const navbarParagraph1 = `
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.:
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
`;

const language1 = `
language-tsx  
`;

const filePath1 = `
  ./src/app.ts
`;

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

const Carousel: Function<ComponentCarouselProps> = ({
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
`;

const paragraphWithLink10 = `
Install the lastest recommended version of 
*#Node.js(https://nodejs.org/en/)*, later 
*#Deno.js(https://deno.land/)*, and finally 
*#React.js(https://reactjs.org/)*.
`;

// const orderTimersPromisesAsyncAwait = {
//   title,
//   seo,
//   text: [
//     {
//       subtitle: introSubtitle,
//       paragraphsCommandsCode: [
//         { paragraph: introParagraph1 }
//       ]
//     },
//     {
//       subtitle: setupSubtitle,
//       paragraphsCommandsCode: [
//         { paragraphWithEndLink: setupParagraph1 },
//         { paragraphWithMiddleLink: setupParagraph2 },
//         { command: commands },
//         { paragraph: setupParagraph3 }
//       ]
//     },
//     {
//       subtitle: navbarSubtitle,
//       paragraphsCommandsCode: [
//         { paragraph: navbarParagraph1 },
//         { filePath: filePath1 },
//         {
//           codeBlock: {
//             code: navbarCode1,
//             language: language1
//           }
//         }
//       ]
//     },
//     {
//       subtitle: formSubtitle,
//       paragraphsCommandsCode: [
//         { paragraph: formParagraph1 }
//       ]
//     },
//     {
//       subtitle: tableSubtitle,
//       paragraphsCommandsCode: [
//         { paragraph: tableParagraph1 }
//       ]
//     },
//     {
//       subtitle: ' TestLink',
//       paragraphsCommandsCode: [
//         { paragraphWithLink: paragraphWithLink10 }
//       ]
//     }
//   ]
// };

const title = `
JavaScript - Order for timers, promises, async-await
`;

const seo = `
Interview questions, solutions, tutorial, guides for JavaScript promises, async-await, setTimeout, setInterval, asyncronous programming.
`;

const subtitle1 = `
Problem
`;

const paragraph2 = `
What is the order of the logs for the code bellow?
`;

const code3 = `
console.log('sync start');

setTimeout(() => {
  console.log('top level setTimeout 2ms');
}, 2);

setTimeout(() => {
  console.log('top level setTimeout 1ms');
}, 1);

setTimeout(() => {
  console.log('top level setTimeout 0ms');
}, 0);

const promise = new Promise((resolve) => {
  console.log('promise constructor before resolve');
  resolve('promise resolved');
});

const callPromise = async (): Promise<void> => {
  console.log('started async function callPromise');
  const result = await promise; 
  console.log(\`result of await promise = \${result}\`);
  console.log(\`finished async function callPromise\`);
};

callPromise();

promise.then((result) => {
  console.log(\`result of promise.then = \${result}\`);
});

const asyncSleep = (ms: number): Promise<void> => (
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
);

const callAsyncSleep = async (ms: number): Promise<void> => {
  console.log('start async function callAsyncSleep');
  await asyncSleep(ms);
  console.log(\`finished async function callAsyncSleep\`);
};

callAsyncSleep(1000);

console.log('sync finished');
`;

const language = `
language-typescript
`;

const subtitle4 = `
Setup
`;

const paragraphWithLink5 = `
Install the latest recommended version of
*#Node.js(https://nodejs.org/en/)*.
`;

const paragraph6 = `
Initialize a Node project and install the dependencies
ts-node, typescript and nodemon.
`;

const commands7 = [
  '$ npm init -y',
  '$ npm install ts-node typescript nodemon --save-dev'
];

const paragraph8 = `
Next, create a file on the root of the project named 
nodemon.json and paste this content.
`;

const filePath9 = `
./nodemon.json
`;

const code10 = `
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node ./src/app.ts"
}
`;

const paragraph11 = `
Then, paste this into package.json
`;

const filePath12 = `
./package.json
`;

const code13 = `
{
  "name": "progrtmp-order-timers-promises-async-await",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon "
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "2.0.6",
    "ts-node": "9.1.1",
    "typescript": "4.1.3"
  }
}
`;

const paragraph14 = `
Finally, create a folder called src, and inside create a file
called app.ts, where you can paste the code for this question
`;

const filePath15 = `
./src/app.ts
`;

const code16 = `
console.log('sync start');

setTimeout(() => {
  console.log('top level setTimeout 2ms');
}, 2);

setTimeout(() => {
  console.log('top level setTimeout 1ms');
}, 1);

setTimeout(() => {
  console.log('top level setTimeout 0ms');
}, 0);

const promise = new Promise((resolve) => {
  console.log('promise constructor before resolve');
  resolve('promise resolved');
});

const callPromise = async (): Promise<void> => {
  console.log('started async function callPromise');
  const result = await promise; 
  console.log(\`result of await promise = \${result}\`);
  console.log(\`finished async function callPromise\`);
};

callPromise();

promise.then((result) => {
  console.log(\`result of promise.then = \${result}\`);
});

const asyncSleep = (ms: number): Promise<void> => (
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
);

const callAsyncSleep = async (ms: number): Promise<void> => {
  console.log('start async function callAsyncSleep');
  await asyncSleep(ms);
  console.log(\`finished async function callAsyncSleep\`);
};

callAsyncSleep(1000);

console.log('sync finished');
`;

const orderTimersPromisesAsyncAwait = {
  title,
  seo,
  text: [
    {
      subtitle: subtitle1,
      paragraphsCommandsCode: [
        { paragraph: paragraph2 },
        {
          codeBlock: {
            code: code3,
            language
          }
        }
      ]
    },
    {
      subtitle: subtitle4,
      paragraphsCommandsCode: [
        { paragraphWithLink: paragraphWithLink5 },
        { paragraph: paragraph6 },
        { command: commands7 },
        { paragraph: paragraph8 },
        { filePath: filePath9 },
        {
          codeBlock: {
            code: code10,
            language
          }
        },
        { paragraph: paragraph11 },
        { filePath: filePath12 },
        {
          codeBlock: {
            code: code13,
            language
          }
        },
        { paragraph: paragraph14 },
        { filePath: filePath15 },
        {
          codeBlock: {
            code: code16,
            language
          }
        }
      ]
    },
    {
      subtitle: navbarSubtitle,
      paragraphsCommandsCode: [
        { paragraph: navbarParagraph1 },
        { filePath: filePath1 },
        {
          codeBlock: {
            code: navbarCode1,
            language: language1
          }
        }
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
      subtitle: ' TestLink',
      paragraphsCommandsCode: [
        { paragraphWithLink: paragraphWithLink10 }
      ]
    }
  ]
};

export default orderTimersPromisesAsyncAwait;