/* eslint-disable max-len */

// const language = `
// language-typescript
// `;

// const filePath = `
// ./src/app.ts
// `;

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
    }
  ]
};

export default orderTimersPromisesAsyncAwait;