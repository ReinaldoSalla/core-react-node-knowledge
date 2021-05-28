/* eslint-disable max-len */

const title = `
React - Simple State Management
`;

const seo = `
Interview questions, solutions, tutorial, guides for JavaScript promises, async-await, setTimeout, setInterval, asyncronous programming.
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
`;

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

const simpleStateManagement = {
  title,
  seo,
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

export default simpleStateManagement;
