/* eslint-disable */

const language = `
language-tsx
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
Initialize a react/typescript project using CRA.
`;

const commands7 = [
  '$ npx create-react-app lazy-loading-images --template typescript'
];

const subtitle8 = `
App
`;

const paragraph9 = `
Write the following code into App.ts. 
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
App is the main root component that calls 
the Lazy component. The Lazy component does all the heavy work, and it's instantiated
100 times, receiving a unique image from unsplash each time. 
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
This function returns an array with integers from 0 to 99. Each number
represents an unique id that gets passed to the Lazy component.
`;

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
        { codeBlock: { code: code11, language } },
        { paragraph: paragraph12 },
        { paragraph: paragraph13 },
        { filePath: filePath14 },
        { codeBlock: { code: code15, language }},
        { paragraph: paragraph16 }
      ]
    }
  ]
};

export default orderTimersPromisesAsyncAwait;