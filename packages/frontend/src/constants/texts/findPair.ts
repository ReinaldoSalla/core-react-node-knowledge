/* eslint-disable max-len */

const language = `
language-typescript
`;

const filePath = `
./src/app.ts
`;

const title = `
JavaScript - Find Pair
`;

const seo = `
Interview questions, solutions, tutorials, guides for JavaScript, find pair equal to sum, loops, arrays, map, filter, reduce, problem solving.
`;

const subtitle1 = `
Problem
`;

const paragraph2 = `
Create a function that returns information about the first pair of 
items inside an array whose sum equals a target number. 
The function should return the numbers on the pair and their 
indexes mapped into an object. If there is no such pair, 
the function should return null.
`;

const paragraph3 = `
For example, for the input bellow:
`;

const code4 = `
array = [0, 5, 5, 4, 4, 1, 1, 1, 10]

sum = 2
`;

const paragraph5 = `
The function should return the following object:
`;

const code6 = `
{ 
  firstNumber: 1,
  firstNumberIndex: 5,
  secondNumber: 1,
  secondNumberIndex: 6 
}
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
    "start": "nodemon"
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
Then, create a folder called src, and inside create a file
called app.ts, where you can write the code for this question.
`;

const paragraph15 = `
Finally, to execute code inside ./src/app.ts, run this command
`;

const command16 = [
  '$ npm run start'
];

const subtitle17 = `
For loops
`;

const paragraph18 = `
The easy solution would be to iterate all the items, and then iterate
all the other items, and return if the codition is true (firstNumber 
+ secondNumber = sum). This would require quadratic time complexity,
due to having a loop inside a loop. A quadratic time complexity solution
would not be received well in a serious job interview, when there is a better linear
alternative.
`;

const paragraph19 = `
One method for solving the question in linear time is to use a set
as an auxiliary variable to check the items on the array. As we iterate
the array, we can check for elements inside a set in constant time, using
the set.has method. The only catch is that we need to check for elements 
that are declared before the current item we're iterating. This is necessary
to avoid false positives.
`;

const code20 = `
function findPair(numbers: Array<number>, sum: number) {
  const lookup = new Set();
  let secondNumber;
  for (let i = 0; i < numbers.length; i++) {
    if (lookup.has(sum - numbers[i])) {
      secondNumber = numbers[i];
    }
    lookup.add(numbers[i])
  }
  if (!secondNumber) {
    return null;
  }
  const firstNumber = sum - secondNumber; 
  return [firstNumber, secondNumber];
}

const numbers = [0, 5, 5, 4, 4, 1, 1, 1, 10];
const sum = 2;

const result = findPair(numbers, sum);
console.log(result);
`;

const orderTimersPromisesAsyncAwait = {
  title,
  seo,
  text: [
    {
      subtitle: subtitle1,
      paragraphsCommandsCode: [
        { paragraph: paragraph2 },
        { paragraph: paragraph3 },
        {
          codeBlock: {
            code: code4,
            disableLineNumbers: true,
            language
          }
        },
        { paragraph: paragraph5 },
        {
          codeBlock: {
            code: code6,
            disableLineNumbers: true,
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
            disableLineNumbers: true,
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
        { paragraph: paragraph15 },
        { command: command16 }

      ]
    },
    {
      subtitle: subtitle17,
      paragraphsCommandsCode: [
        { paragraph: paragraph18 },
        { paragraph: paragraph19 },
        { filePath },
        {
          codeBlock: {
            code: code20,
            language
          }
        }
      ]
    }
  ]
};

export default orderTimersPromisesAsyncAwait;