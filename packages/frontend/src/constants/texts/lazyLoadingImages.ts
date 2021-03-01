/* eslint-disable max-len */

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
Note: Modern browsers allow the usage of a attribute called lazy on the image 
tag. The problem with this attribute is that it loads the image before it's
visible on the viewport, and the ideia here is to load only when it'a visible.
So, to solve this problem, we're going to use the Intersection Observer, which is
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
Hook
`;

const paragraph9 = `
We're going to create e custom hook in React to abstract the communication
with the Intersection Observer API. 
`;

const paragraph10 = `
Inside the src folder, create a folder named hooks and inside create 
a file named useIntersection.ts.
`;

const filePath11 = `
./src/hooks/useIntersection.ts
`;

const code12 = `
import { 
  useState, 
  useEffect,
  MutableRefObject 
} from 'react';

function useIntersection(
  domNode: MutableRefObject<HTMLDivElement>,
  threshold = 0.5, 
  rootMargin = '0px'
) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const currentDomNode = domNode.current;
    const observer = new IntersectionObserver(([entry], element) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        element.unobserve(currentDomNode)
      }
    }, { root: null, rootMargin, threshold }); 
    observer.observe(currentDomNode);
    return () => observer.unobserve(currentDomNode);
  }, [domNode, rootMargin, threshold]);

  return isVisible;
};

export default useIntersection;
`;

// const paragraph13 = `
// The Intersection Observer on line 16 accepts two parameters. One is the callback
// that will be invoked once the dom element becomes visible. More specifically,
// we\'re saying that the callback will be invoked once 50% of the dom element
// becomes visible, because the second parameter of the Intersection Observer
// allows you to customize this API. The threshold will be passed as a argument
// on the custom hook, and we give the base value of 0.5 (50%).
// `;

// const paragraph14 = `
// With respect to React, we're passing the domNode to this custom hook. This domNode
// will be a reference to the actual dom node or dom elements that we're tracking the
// visibility. The most interesting part is the useEffect hooks, which runs after
// the first render and when the dependencies array changes, on line x. Neither
// domNode, rootMargin or threshold will change. As a result, the "new Intersection
// Observer" instantiation will only happends once for each imagem. For exampple,
// if we have 100 images, we will instantiate the Intersection Observer 100 times.
// `;

const paragraph13 = `
The first argument received by the hooks will be the reference to the dom
element that we're tracking the visibility. The second is how much of the
dom element should be visible to invoke the Intersection Observer. We're specifing
0.5 (50%). The third argument is the margin for the elements, and we're specifing 0.
`;

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
        { paragraph: paragraph10 },
        { filePath: filePath11 },
        { codeBlock: { code: code12, language } },
        { paragraph: paragraph13 }
      ]
    }
  ]
};

export default orderTimersPromisesAsyncAwait;