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
the set.has method. 
`;

const paragraph20 = `
The only catch is that we need to check for elements 
that are declared before the current item we're iterating. This is necessary
to avoid false positives. For example, if we simply add all elements from
the array in the set and the input array had only one item with the value 1, 
the program would falsly detect a pair. The code bellow exemplifies
how to iterate the array abd check for previous elements through the set.
`;

const code21 = `
function findPair(numbers: Array<number>, sum: number) {
  const lookup = new Set();
  let secondNumber;
  for (let i = 0; i < numbers.length; i++) {
    if (lookup.has(sum - numbers[i])) {
      secondNumber = numbers[i];
      break;
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

const paragraph22 = `
To check for the indexes, we can iterate the the array again, populate
the object properties and return once all properties have been added. We
can also create a TypeScript interface to improve the type checking.
`;

const code23 = `
interface PairInfo {
  firstNumber?: number;
  firstNumberIndex?: number;
  secondNumber?: number;
  secondNumberIndex?: number;
}

function findPair(numbers: Array<number>, sum: number) {
  const lookup = new Set();
  let secondNumber;
  for (let i = 0; i < numbers.length; i++) {
    if (lookup.has(sum - numbers[i])) {
      secondNumber = numbers[i];
      break;
    }
    lookup.add(numbers[i])
  }
  if (!secondNumber) {
    return null;
  }
  const firstNumber = sum - secondNumber;
  const pairInfo: PairInfo = {};
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === firstNumber && !('firstNumber' in pairInfo)) {
      pairInfo.firstNumber = numbers[i];
      pairInfo.firstNumberIndex = i;
    } else if (numbers[i] === secondNumber && !('secondNumber' in pairInfo)) {
      pairInfo.secondNumber = numbers[i];
      pairInfo.secondNumberIndex = i;
    }
    if ('firstNumber' in pairInfo && 'secondNumber' in pairInfo) {
      return pairInfo;
    }
  }
}

const numbers = [0, 5, 5, 4, 4, 1, 1, 1, 10];
const sum = 2;

const result = findPair(numbers, sum);
console.log(result);
`;

const subtitle24 = `
Iteration
`;

const paragraph25 = `
Instead of using for loops, the problem could be solve with JavaScript
built-in array iterations methods, like Array.find and Array.reduce.
This would be more idiomatic and funcional, but less efficient. It would
be less eficient becase we can't exit the function during the reduce
execution, due to the fact that the callback will be called for every element.
In other others, reduce will traverse every element and we could only 
return the pair information after every element has been processed.
`;

const paragraph26 = `
Nevertheless, the code bellow demonstrates the solution with find and reduce.
Array.find will return the current element whenever the callback returns true, and
Array.reduce will populate the object as an accumulator, starting as an empty
object.
`;

const code27 = `
interface PairInfo {
  firstNumber?: number;
  firstNumberIndex?: number;
  secondNumber?: number;
  secondNumberIndex?: number;
}

function findPair(numbers: Array<number>, sum: number) {
  const lookup = new Set();
  const found = numbers.find((item) => {
    if (lookup.has(sum - item)) {
      return true;
    }
    lookup.add(item)
  });
  if (!found) {
    return null;
  }
  const secondNumber = found;
  const firstNumber = sum - found;
  const pairInfo = numbers.reduce((acc: PairInfo, curr, index) => {
    if (curr === firstNumber && !('firstNumber' in acc)) {
      acc.firstNumber = curr;
      acc.firstNumberIndex = index;
    } else if (curr === secondNumber && !('secondNumber' in acc)) {
      acc.secondNumber = curr;
      acc.secondNumberIndex = index;
    }
    return acc;
  }, {});
  return pairInfo;
}

const numbers = [0, 5, 5, 4, 4, 1, 1, 1, 10];
const sum = 2;

const result = findPair(numbers, sum);
console.log(result);
`;

const subtitle28 = `
Unit Testing
`;

const paragraph29 = `
The idea is to add unit tests for every article on this website, since
this is a relatively common topic on job interviews, but it's often 
overlook on tutorials.
`;

const paragraph30 = `
For this article, we'l be using the jest library to execute the tests
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
        { paragraph: paragraph20 },
        { filePath },
        { codeBlock: { code: code21, language } },
        { paragraph: paragraph22 },
        { filePath },
        { codeBlock: { code: code23, language } }
      ]
    },
    {
      subtitle: subtitle24,
      paragraphsCommandsCode: [
        { paragraph: paragraph25 },
        { paragraph: paragraph26 },
        { codeBlock: { code: code27, language } }
      ]
    },
    {
      subtitle: subtitle28,
      paragraphsCommandsCode: [
        { paragraph: paragraph29 },
        { paragraph: paragraph30 }
      ]
    }
  ]
};

export default orderTimersPromisesAsyncAwait;