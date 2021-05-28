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
Create a function able to return information about the first pair of 
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
all the other items, and return if the condition is true (firstNumber 
+ secondNumber = sum). This would require quadratic time complexity,
due to having a loop inside a loop. A quadratic time complexity solution
would not be received well in a job interview, when there is a better linear
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
to avoid false positives. Taking a look at the input example, if we simply 
add all elements from the array into the set, the program would falsly detect a pair when
the current element is the first number 1. The code bellow exemplifies
how to iterate the array and check for previous elements through the set.
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
Instead of using for loops, the problem can be solve with JavaScript
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
The idea is to add unit tests for the majority of articles on this website, since
this is a relatively common topic on job interviews, but it's often 
overlook on tutorials.
`;

const paragraph30 = `
For this article, we'l be using the jest library to execute the tests.
`;

const paragraph31 = `
To add jest in a node/typescript project, add the following modules.
`;

const commands32 = [
  '$ npm install jest ts-jest @types/jest'
];

const paragraph33 = `
Then, add the test script in the package.json. The final package.json
should look similar to this:
`;

const filePath34 = `
./package.json
`;

const code35 = `
{
  "name": "progrtmp-cb-promises-asyncawait",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon",
    "test": "jest --detectOpenHandles --watchAll"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/jest": "26.0.20",
    "jest": "26.6.3",
    "nodemon": "2.0.6",
    "ts-jest": "26.5.1",
    "ts-node": "9.1.1",
    "typescript": "4.1.3"
  }
}
`;

const paragraph36 = `
The option --detectOpenHandles is enabled to help identify if there are any asynchronous 
operations left open in the program after the test has finished. And 
--watchAll allows to update the tests whenever the files are saved.
`;

const paragraph37 = `
Finally, create a file called app.test.ts inside the src folder, where we'll
add the test code.
`;

const paragraph38 = `
The test consists of creating an array with elements from 0 to 999, and 
find a pair for the last 2 elements.
`;

const filePath39 = `
./src/app.test.ts
`;

const code40 = `
import findPair from './app';

describe('findPair', () => {
  // arrange global
  const numbers = Array(1000).fill(0).map((_, index) => index);

  it('Should return the pair information if the sequence has a pair equal to the target sum', () => {
    //arrange
    const penultimateIndex = numbers.length-2;
    const lastIndex = numbers.length-1;
    const sum = numbers[penultimateIndex] + numbers[lastIndex];
    const mockedResult = {
      firstNumber: numbers[penultimateIndex],
      firstNumberIndex: penultimateIndex,
      secondNumber: numbers[lastIndex],
      secondNumberIndex: lastIndex
    };

    // act
    const result = findPair(numbers, sum);

    //assert
    expect(result).toStrictEqual(mockedResult);
  });

  it('Should return null is the sequence does not have a pair equal to the target sum', () => {
    // arrange
    const sum = 0;
    const mockResult = null;

    // act
    const result = findPair(numbers, sum);

    // assert
    expect(result).toBe(mockResult);
  });
});
`;

const subtitle41 = `
Repository
`;

const paragraphWithLink42 = `
You can check the code on the github
*#Repository(https://github.com/ReinaldoSalla/progrtmp-find-pair)*.
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
        { paragraph: paragraph30 },
        { paragraph: paragraph31 },
        { command: commands32 },
        { paragraph: paragraph33 },
        { filePath: filePath34 },
        { codeBlock: { code: code35, language } },
        { paragraph: paragraph36 },
        { paragraph: paragraph37 },
        { paragraph: paragraph38 },
        { filePath: filePath39 },
        { codeBlock: { code: code40, language } }
      ]
    },
    {
      subtitle: subtitle41,
      paragraphsCommandsCode: [
        { paragraphWithLink: paragraphWithLink42 }
      ]
    }
  ]
};

export default orderTimersPromisesAsyncAwait;
