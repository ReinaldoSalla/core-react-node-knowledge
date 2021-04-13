/* eslint-disable */

const languageTSX = `
language-tsx
`;

const languageCSS = `
language-css
`;

const title = `
React - Lazy Loading Images
`;

const seo = `
Interview questions, solutions, tutorials, guides for React, frontend, css, images, lazy-loading, software development, problem-solving. 
`;

const subtitle1 = `
Problem
`;

const paragraph2 = `
Create a component able to only load images when they are visible on the viewport.
Note: modern browsers allow the usage of a attribute called loading on the image tag
(<img loading='lazy' />). The problem with this attribute is that it loads the image before it's
visible on the viewport, and the ideia here is to load only when it's visible.
Therefore, to solve this problem, we're going to use the Intersection Observer, which is
a browser API able to track the visiblity of items on the screen.
`;

const subtitle4 = `
Setup
`;

const paragraphWithLink5 = `
Install the latest recommended version of
*#Node.js(https://nodejs.org/en/)*.
`;

const paragraph6 = `
Initialize a React/TypeScript project using CRA.
`;

const commands7 = [
  '$ npx create-react-app lazy-loading-images --template typescript'
];

const subtitle8 = `
App
`;

const paragraph9 = `
Write the following code into App.tsx.
`;

const filePath10 = `
./src/App.ts
`;

const code11 = `
import React from 'react';
import Lazy from './components/Lazy';
import getPlaceholders from './utils/getPlaceholders';

function App() {
  return (
    <>
      {getPlaceholders(100).map((id) => (
        <Lazy 
          key={id}
          src={\`https://source.unsplash.com/collection/\${id}/1600x900\`} 
        />
      ))}
    </>
  );
};

export default App;
`;

const paragraph12 = `
App is the main component, that calls 
the Lazy component. The Lazy component does all the heavy work, and it's instantiated
100 times, receiving a unique image from unsplash each time. 
A React component can only return a single html tag (also called host components), 
or another react component. However, the <> and the </> on lines 7 and 14 act as a wrapper.
It would be same thing as returning a div, but using <> is considered a better because
it does't create an additional node on the html document.
`;

const paragraph13 = `
To add the getPlaceholders function, inside the src folder, create another
folder called utils and inside add a file named getPlaceholders.ts.
`;

const filePath14 = `
./src/utils/getPlaceholders.ts
`;

const code15 = `
function getPlaceholders(n: number) {
  return new Array(n).fill(0).map((_, index) => index);
};

export default getPlaceholders;
`;

const paragraph16 = `
This function returns an array with integers from 0 to the argument 'n' - 1. Since
We're passing 100, it will create an array from 0 to 99. Each number
represents an unique id that gets passed to the Lazy component.
`;

const subtitle17 = `
Lazy
`;

// const paragraph18 = `
// To add the Lazy component, create a folder named components and inside another
// folder called Lazy. This file contains all the files related to the Lazy component.
// This is the TypeScript and the CSS for Lazy.tsx and Lazy.css. Also, be sure to add
// a file named index.ts that imports and exports the Lazy.tsx component. This simplifies 
// the import of the file that calls this component. For example, App.tsx can import like this:
// import Lazy from './components/Lazy', instead of: import Lazy from './components/Lazy/Lazy'.
// `;

const paragraph18 = `
To add the Lazy component, create a folder named components and inside create 
another folder names Lazy. This folder will contain all the files related to the
Lazy component. The TypeScript code for the Lazy component is represented
bellow.
`

const filePath19 = `
./src/components/Lazy/Lazy.tsx
`;

const code20 = `
import React, {
  useState,
  useRef
} from 'react';
import useIntersection from '../../hooks/useIntersection';
import computeCN from '../../utils/computeCN';
import LazyProps from './Lazy.types';
import './Lazy.css';

function Lazy({ src }: LazyProps) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);
  const isVisible = useIntersection(ref);
  const wrapperLoadingCN = computeCN('loading', 'finished', hasLoaded);
  const imgCN = computeCN('img', 'finished', hasLoaded);
  return (
    <div className='wrapper'>
      <div className={wrapperLoadingCN} ref={ref}>
        {isVisible && (
          <img
            className={imgCN}
            src={src}
            alt='random demonstration'
            onLoad={() => setHasLoaded(true)}
          />
        )}
      </div>
    </div> 
  );
};

export default Lazy;
`;

const paragraph21 = `
This component will receive the src as a prop. Like explained before, src will be the
url with an image from unsplash. We're destructuring this prop on line 10, to avoid
having to access as prop.src later on.
`;

const paragraph22 = `
The hasLoaded state variable on line 11 will be toggled to true when the callback
for the onLoad listener gets invoked on line 24.
`;

const paragraph23 = `
On line 12, we initialize the ref, and tell TypeScript that it's going to be
used as a reference for a div element. The null! means "non-null-assertation",
that it tells TypeScript that we are gived given the initial value of null to the ref,
but TypeScript should't check for type errors on the future envolving this
variable. This disables something called strict-null-checking in TypeScript,
but it\`s going to make our lives easier on future, to integrate React with the
Intersection Observer (more on that later). The reference will be passed
to the div on line 18.
`;

const paragraph24 = `
On line 13 we use the custom hook that will be used to integrate React with 
the Intersection Observer, and lines 13 and 14 contain the values returned by utility
functions. These functions enable us to modify the css classes from the JavaScript code
`;

const paragraph25 = `
The image will appear on the DOM when the custom hook returns true. The
code for this logic in on the lines 19 to 26. The logic is very straigthforward,
if isVisible is true the image should appear on the DOM, otherwise it should't.
`;

const paragraph26 = `
To add the CSS for the Lazy component, create a file named Lazy.css,
and add the code from the section bellow.
`;

const filePath27 = `
./src/components/Lazy/Lazy.css
`;

const code28 = `
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading {
  width: 75vw;
  height: 75vh;
  background: grey;
  animation: loading 1s infinite;
}

@keyframes loading {
  0% {
    opacity: 0.7;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.7;
  }
}

.loading.finished {
  animation: none;
}

.img {
  width: 75vw;
  height: 75vh;
  opacity: 0;
  transition: opacity 0.5s;
}

.img.finished {
  opacity: 1;
}
`;

const paragraph29 = `
The wrapper will center its children (the image and the loading placeholder)
using flexbox. The loading placeholder is a gray box that keeps changing its
opacity until the image gets loaded. Both the image and the loading placeholder
will have 75% of the viewport width and height.`

const paragraph30 = `
The animation for the loading placeholder
it implemented with CSS keyframes. Also, the image will have a 'fade-in' effect,
implemented througth CSS transitions. The JavaScript code that control these
class names in described on the next section.
`;

const subtitle31 = `
CSS Util
`;

const paragraph32 = `
The code demonstrates how the function that changes the CSS class names is defined
`;

const filePath33 = `
./src/utils/computeCN.ts
`;

const code34 = `
function computeCN(element: string, modifier: string, state: boolean) {
  return state ? \`\${element} \${modifier}\` : element;
}

export default computeCN;
`

// const subtitle8 = `
// Hook
// `;

// const paragraph9 = `
// We're going to create e custom hook in React to abstract the communication
// with the Intersection Observer API. 
// `;

// const paragraph10 = `
// Inside the src folder, create a folder named hooks and inside create 
// a file named useIntersection.ts.
// `;

// const code12 = `
// import { 
//   useState, 
//   useEffect,
//   MutableRefObject 
// } from 'react';

// function useIntersection(
//   ref: MutableRefObject<HTMLDivElement>,
//   threshold = 0.5, 
//   rootMargin = '0px'
// ) {
//   const [isVisible, setIsVisible] = useState(false);
  
//   useEffect(() => {
//     const currentRef = ref.current;
//     const observer = new IntersectionObserver(([entry], element) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true);
//         element.unobserve(currentRef)
//       }
//     }, { root: null, rootMargin, threshold }); 
//     observer.observe(currentRef);
//     return () => observer.unobserve(currentRef);
//   }, [ref, rootMargin, threshold]);

//   return isVisible;
// };

// export default useIntersection;
// `;

// const paragraph13 = `
// The first argument received by the hooks will be the dom
// element that we're tracking the visibility. The second is how much of the
// dom element should be visible to invoke the callback for the Intersection Observer. We're specifing
// 0.5 (50%). The third argument is the margin for the element, and we're specifing 0.
// `;

// const paragraph14 = `
// The isVisible state variable is initialized as false and it will be toggled to true
// then the element becomes visible.
// `;

// const paragraph15 = `
// The dom element will be inside an object field called current. Consequently, the
// first action performed by the useEffect hook will be to capture this element, on
// line 15. The first argument for the Intersection Observer consists in the callback
// that will be invoked when the element becomes visible. Note that we cancel
// the intersection observer after the first visibility intersection, on line 19.
// The second argument for the intersection observer is a object with the options passed as arguments
// into the custom book, as explained above.
// `;

// const paragraph16 = `
// The return on line 23 is executed when the components calling the hook is
// unmounted. An example for unmounting could be considered a website consisting
// of multiple pages, and the user going to another page. That way, if the user 
// goes to another page before the element becomes visible, we remove the intersection
// observer, since it's no longer necessary.
// `;

// const paragraph17 = `
// Line 24 contain the dependecies array for the useEffect. Whenever one of those
// variables changes, react would re-run the useEffect. In our case, none of those
// variables will change, so the useEffect (and the instantiation of new IntersectionObserver())
// will only be executed when the components calling the hook mounts (only once). The only piece
// of code that gets executed when the element becomes visible will be the callback from line
// 17 to line 20, not the entire useEffect.
// `;

const orderTimersPromisesAsyncAwait = {
  title,
  seo,
  text: [
    {
      subtitle: subtitle1,
      paragraphsCommandsCode: [
        { paragraph: paragraph2 }
      ]
    },
    {
      subtitle: subtitle4,
      paragraphsCommandsCode: [
        { paragraphWithLink: paragraphWithLink5 },
        { paragraph: paragraph6 },
        { command: commands7 }
      ]
    },
    {
      subtitle: subtitle8,
      paragraphsCommandsCode: [
        { paragraph: paragraph9 },
        { filePath: filePath10 },
        { codeBlock: { code: code11, language: languageTSX }},
        { paragraph: paragraph12 },
        { paragraph: paragraph13 },
        { filePath: filePath14 },
        { codeBlock: { code: code15, language: languageTSX }},
        { paragraph: paragraph16 }
      ]
    },
    {
      subtitle: subtitle17,
      paragraphsCommandsCode: [
        { paragraph: paragraph18 },
        { filePath: filePath19 },
        { codeBlock: { code: code20, language: languageTSX }},
        { paragraph: paragraph21 },
        { paragraph: paragraph22 },
        { paragraph: paragraph23 },
        { paragraph: paragraph24 },
        { paragraph: paragraph25 },
        { paragraph: paragraph26 },
        { filePath: filePath27 },
        { codeBlock: { code: code28, language: languageCSS }},
        { paragraph: paragraph29 },
        { paragraph: paragraph30 }
      ],
    },
    {
      subtitle: subtitle31,
      paragraphsCommandsCode: [
        { paragraph: paragraph32 },
        { filePath: filePath33 },
        { codeBlock: { code: code34, language: languageTSX }}
      ]
    }
  ]
};

export default orderTimersPromisesAsyncAwait;