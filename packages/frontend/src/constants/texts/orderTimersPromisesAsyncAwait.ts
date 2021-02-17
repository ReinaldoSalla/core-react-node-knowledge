/* eslint-disable max-len */

const title = `
JavaScript - Order for timers, promises, async-await
`;

const seo = `
Interview questions, solutions, tutorials, guides for JavaScript promises, async-await, setTimeout, setInterval, asyncronous programming.
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
  console.log('top-level setTimeout 2ms');
}, 2);

setTimeout(() => {
  console.log('top-level setTimeout 1ms');
}, 1);

setTimeout(() => {
  console.log('top-level setTimeout 0ms');
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
Then, create a folder called src, and inside create a file
called app.ts, where you can paste the code for this question
`;

const filePath = `
./src/app.ts
`;

const code16 = `
console.log('sync start');

setTimeout(() => {
  console.log('top-level setTimeout 2ms');
}, 2);

setTimeout(() => {
  console.log('top-level setTimeout 1ms');
}, 1);

setTimeout(() => {
  console.log('top-level setTimeout 0ms');
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

const paragraph17 = `
Finally, to execute the project, run this command
`;

const commands18 = [
  '$ npm run start'
];

const subtitle19 = `
Separation
`;

const paragraph20 = `
First, it's worth mentioning that the code can be separated in three parts.
`;

const paragraph21 = `
Synchronous code will be execute right away.
`;

const paragraph22 = `
Resolved promises, either with .then or async-await, will be executed
as a microtask on the microtask queue. Therefore, they will be executed
when the current stack is empty, but before the next iteration of the
event loop.
`;

const paragraph23 = `
Timers, like setTimeout or setInterval, are able to schedule code to be
executed as a task on the task queue, which is also called 
macrotask queue or callback queue. This means that they will 
be executed on the next event loop.
`;

const subtitle24 = `
Sync
`;

const paragraph25 = `
Top-level console logs will be executed right away. Also, the code
inside the promise contructor, before the resolve invocation, will
be executed synchronously. Code written before the await in an async
function will also be executed right away. Thus, the non-commented
code below will be executed first
`;

const code26 = `
console.log('sync start');

setTimeout(() => {
  // console.log('top-level setTimeout 2ms');
}, 2);

setTimeout(() => {
  // console.log('top-level setTimeout 1ms');
}, 1);

setTimeout(() => {
  // console.log('top-level setTimeout 0ms');
}, 0);

const promise = new Promise((resolve) => {
  console.log('promise constructor before resolve');
  // resolve('promise resolved');
});

const callPromise = async (): Promise<void> => {
  console.log('started async function callPromise');
  // const result = await promise; 
  // console.log(\`result of await promise = \${result}\`);
  // console.log\`finished async function callPromise\`);
};

callPromise();

promise.then((result) => {
  // console.log(\`result of promise.then = \${result}\`);
});

const asyncSleep = (ms: number): Promise<void> => (
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
);

const callAsyncSleep = async (ms: number): Promise<void> => {
  console.log('start async function callAsyncSleep');
  // await asyncSleep(ms);
  // console.log(\`finished async function callAsyncSleep\`);
};

callAsyncSleep(1000);

console.log('sync finished');
`;

const paragraph27 = `
Therefore, these are the first logs to be executed.
`;

const commands28 = [
  'sync start',
  'promise constructor before resolve',
  'started async function callPromise',
  'start async function callAsyncSleep',
  'sync finished'
];

const subtitle29 = `
Microtask
`;

const paragraph30 = `
As mentioned above, resolved promises are executed on the microtask
queue. Hence, the non-commented code bellow represents the next batch
of log executed.
`;

const code31 = `
// console.log('sync start');

setTimeout(() => {
  // console.log('top-level setTimeout 2ms');
}, 2);

setTimeout(() => {
  // console.log('top-level setTimeout 1ms');
}, 1);

setTimeout(() => {
  // console.log('top-level setTimeout 0ms');
}, 0);

const promise = new Promise((resolve) => {
  // console.log('promise constructor before resolve');
  resolve('promise resolved');
});

const callPromise = async (): Promise<void> => {
  // console.log('started async function callPromise');
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
  // console.log('start async function callAsyncSleep');
  // await asyncSleep(ms);
  // console.log(\`finished async function callAsyncSleep\`);
};

callAsyncSleep(1000);

// console.log('sync finished');
`;

const paragraph32 = `
Even if the .then on line 30 was declared after the await on line 22,
when the promise is resolved, the .then will be executed before.
Also, after the promise resolution, the async function continue it's
normal execution. In practical words, it takes back control 
and unpauses itself.
`;

const paragraph33 = `
The callAsyncSleep function won't be executed on this second batch
because it contains a setTimeout, so it will only be executed on the
task queue after the delay of 1000ms.
`;

const paragraph34 = `
These are the logs executed on the microtask queue.
`;

const commands35 = [
  'result of promise.then = promise resolved',
  'result of await promise = promise resolved',
  'finished async function callPromise'
];

const subtitle36 = `
Task Queue
`;

const paragraph37 = `
The non-commented code bellow represents the code scheduled to be executed
after specific deplays, on the task queue.
`;

const code38 = `
// console.log('sync start');

setTimeout(() => {
  console.log('top-level setTimeout 2ms');
}, 2);

setTimeout(() => {
  console.log('top-level setTimeout 1ms');
}, 1);

setTimeout(() => {
  console.log('top-level setTimeout 0ms');
}, 0);

const promise = new Promise((resolve) => {
  // console.log('promise constructor before resolve');
  // resolve('promise resolved');
});

const callPromise = async (): Promise<void> => {
  // console.log('started async function callPromise');
  // const result = await promise; 
  // console.log(\`result of await promise = \${result}\`);
  // console.log(\`finished async function callPromise\`);
};

callPromise();

promise.then((result) => {
  // console.log(\`result of promise.then = \${result}\`);
});

const asyncSleep = (ms: number): Promise<void> => (
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
);

const callAsyncSleep = async (ms: number): Promise<void> => {
  // console.log('start async function callAsyncSleep');
  await asyncSleep(ms);
  console.log(\`finished async function callAsyncSleep\`);
};

callAsyncSleep(1000);

// console.log('sync finished');
`;

const paragraph39 = `
Theoretically, regarding the top-level console logs from line 3 
to line 13, the execution order shold be 0ms, 1ms and 2ms.
However, in practice, the result will depend on which environment 
the code is executed. On Firefox, it will be 0ms, 1ms and 2ms. 
On Chrome, Edge and on Node.js, it will be 1ms, 0ms and 2ms.
`;

const paragraphWithLink40 = `
Node.js will convert 0ms to 1ms, so both are interpreted as 1ms. 
The first one to run will be the first one declared. 
That's why 1ms gets logged before 0ms. The code bellow is from the Node.js 
*#repository(https://github.com/nodejs/node/blob/master/lib/internal/timers.js)*, and
it demonstrates the conversion of anything bellow 1ms to 1ms.
`;

const filePath41 = `
https://github.com/nodejs/node/blob/master/lib/internal/timers.js
`;

const code42 = `
function Timeout(callback, after, args, isRepeat, isRefed) {
  after *= 1; // Coalesce to number or NaN
  if (!(after >= 1 && after <= TIMEOUT_MAX)) {
    if (after > TIMEOUT_MAX) {
      process.emitWarning(\`\${after} does not fit into\` +
                          ' a 32-bit signed integer.' +
                          'Timeout duration was set to 1.',
                          'TimeoutOverflowWarning');
    }
    after = 1; // Schedule on next tick, follows browser behavior
  }
}
`;

const paragraph43 = `
Lastly, the callAsyncSleep on line 41 will continue it's 
execution after the delay of 1000ms, and it contains last log.
`;

const paragraph44 = `
These are the finals logs
`;

const commands45 = [
  'top-level setTimeout 1ms',
  'top-level setTimeout 0ms',
  'top-level setTimeout 2ms',
  'finished async function callAsyncSleep'
];

const subtitle46 = `
Result
`;

const paragraph47 = `
This is the order of all the logs
`;

const commands48 = [
  'sync start',
  'promise constructor before resolve',
  'started async function callPromise',
  'start async function callAsyncSleep',
  'sync finished',
  'result of promise.then = promise resolved',
  'result of await promise = promise resolved',
  'finished async function callPromise',
  'top-level setTimeout 1ms',
  'top-level setTimeout 0ms',
  'top-level setTimeout 2ms',
  'finished async function callAsyncSleep'
];

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
        { filePath },
        {
          codeBlock: {
            code: code16,
            language
          }
        },
        { paragraph: paragraph17 },
        { command: commands18 }
      ]
    },
    {
      subtitle: subtitle19,
      paragraphsCommandsCode: [
        { paragraph: paragraph20 },
        { paragraph: paragraph21 },
        { paragraph: paragraph22 },
        { paragraph: paragraph23 }
      ]
    },
    {
      subtitle: subtitle24,
      paragraphsCommandsCode: [
        { paragraph: paragraph25 },
        { filePath },
        {
          codeBlock: {
            code: code26,
            language
          }
        },
        { paragraph: paragraph27 },
        { command: commands28 }
      ]
    },
    {
      subtitle: subtitle29,
      paragraphsCommandsCode: [
        { paragraph: paragraph30 },
        {
          codeBlock: {
            code: code31,
            language
          }
        },
        { paragraph: paragraph32 },
        { paragraph: paragraph33 },
        { paragraph: paragraph34 },
        { command: commands35 }
      ]
    },
    {
      subtitle: subtitle36,
      paragraphsCommandsCode: [
        { paragraph: paragraph37 },
        {
          codeBlock: {
            code: code38,
            language
          }
        },
        { paragraph: paragraph39 },
        { paragraphWithLink: paragraphWithLink40 },
        { filePath: filePath41 },
        {
          codeBlock: {
            code: code42,
            language
          }
        },
        { paragraph: paragraph43 },
        { paragraph: paragraph44 },
        { command: commands45 }
      ]
    },
    {
      subtitle: subtitle46,
      paragraphsCommandsCode: [
        { paragraph: paragraph47 },
        { command: commands48 }
      ]
    }
  ]
};

export default orderTimersPromisesAsyncAwait;