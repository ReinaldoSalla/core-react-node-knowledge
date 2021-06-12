/* eslint-disable */

import simpleStateManagement from './simpleStateManagement';
import complexStateManagement from './complexStateManagement';
import findPair from './findPair';
import orderTimersPromisesAsyncAwait from './orderTimersPromisesAsyncAwait';
import lazyLoadingImages from './lazyLoadingImages';

const test = {
  "title": "page title",
  "sections": [
    {
      "title": "1. Problem",
      "contents": [
        {
          "paragraph": "solve the problem in js"
        },
        {
          "codeBlock": {
            "language": "tsx",
            "code": "const process = dt.next();",
            "filePath": "./app.ts",
            "disableLineNumbers": false,
            "disableFilePath": false
          }
        },
        {
          "paragraph": "solution is aboved"
        }
      ]
    },
    {
      "title": "second paragraph",
      "contents": [
        {
          "codeBlock": {
            "language": "tsx",
            "code": "final thoughts",
            "filePath": "",
            "disableLineNumbers": true,
            "disableFilePath": true
          }
        },
        {
          "codeBlock": {
            "language": "tsx",
            "code": "function test() {\n  console.log('data');\n}\n\nfor (let i = 0; i < 10; i++) {\n  test()\n}",
            "filePath": "",
            "disableLineNumbers": false,
            "disableFilePath": true
          }
        }
      ]
    }
  ]
};

const texts: any = {
  simpleStateManagement,
  complexStateManagement,
  findPair,
  orderForTimeoutsAndPromises: orderTimersPromisesAsyncAwait,
  lazyLoadingImages,
  test
};

export default texts;
