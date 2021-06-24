/* eslint-disable */

import simpleStateManagement from './simpleStateManagement';
import complexStateManagement from './complexStateManagement';
import findPair from './findPair';
import orderTimersPromisesAsyncAwait from './orderTimersPromisesAsyncAwait';
import lazyLoadingImages from './lazyLoadingImages';
import test from './test.json';

// const test = {"title":"article title","seo":"","text":[{"subtitle":"section title 1","paragraphsCommandsCode":[{"paragraph":"paragraph1"},{"command":["1","2","3","4","54",""]},{"codeBlock":{"language":"language-typescript","code":"function test() {\n  for (let i = 0; i < 10; i++);\n}\n\ntest()","filePath":"","disableLineNumbers":false,"disableFilePath":false}}],"id":"section-2021-06-22T22:24:18.224Z-2370.800000011921"},{"subtitle":"section after a deleted one","paragraphsCommandsCode":[{"paragraph":"second paragrapg"}],"id":"section-2021-06-22T22:24:55.766Z-39914.40000003576"}]};

const texts: any = {
  simpleStateManagement,
  complexStateManagement,
  findPair,
  orderForTimeoutsAndPromises: orderTimersPromisesAsyncAwait,
  lazyLoadingImages,
  test
};

export default texts;
