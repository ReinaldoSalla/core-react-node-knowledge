/* eslint-disable */

import simpleStateManagement from './simpleStateManagement';
import complexStateManagement from './complexStateManagement';
import findPair from './findPair';
import orderTimersPromisesAsyncAwait from './orderTimersPromisesAsyncAwait';
import lazyLoadingImages from './lazyLoadingImages';

// const test = {"title":"article title","seo":"","text":[{"title":"section title 1","paragraphsCommandsCode":[{"codeBlock":{"language":"language-typescript","code":"function option() {\n  for (let i = 0; i < 10; i++)\n}\n\noption();","filePath":"","disableLineNumbers":false,"disableFilePath":false}},{"paragraph":""}]}]};
// const test = {"title":"article title","seo":"","text":[{"title":"section title 1","paragraphsCommandsCode":[{"command":["11","1","1","1","1","1"]},{"paragraph":"123"},{"codeBlock":{"language":"language-typescript","code":"function problem() {\n  console.log('wrong');\n  return what;\n}\n\n","filePath":"","disableLineNumbers":false,"disableFilePath":false}}]}]};
// const test = {"title":"article title","seo":"","text":[{"title":"section title 1","paragraphsCommandsCode":[{"paragraph":"You can check the code on the github\n*#Repository(https://github.com/ReinaldoSalla/progrtmp-find-pair)*."}]}]};
// const test = {"title":"article title","seo":"","text":[{"title":"section title 1","paragraphsCommandsCode":[{"paragraph":"paragraph 1"},{"command":["$ npm install this","$ npm install that"]},{"codeBlock":{"language":"language-typescript","code":"function do() {\n  getDt();\n}","filePath":"","disableLineNumbers":false,"disableFilePath":true}}]},{"title":"section title 2","paragraphsCommandsCode":[{"codeBlock":{"language":"language-typescript","code":"function test() {\n  console.log(data);\n}","filePath":"./app.tsx","disableLineNumbers":false,"disableFilePath":false}}]}]};
// const test = {"title":"article title","seo":"","text":[{"subtitle":"subtitle 1","paragraphsCommandsCode":[{"paragraph":"test"}]},{"subtitle":"subtitle 2","paragraphsCommandsCode":[{"paragraph":"tset2"},{"command":["1","2","3",""]},{"codeBlock":{"language":"language-typescript","code":"import somthing from somewhere\n\nfunction test() {\n  dt.next();\n}","filePath":"","disableLineNumbers":false,"disableFilePath":false}}]}]};
// const test = {"title":"article title","seo":"","text":[{"subtitle":" Problem","paragraphsCommandsCode":[{"paragraph":"Create a function able to return information about the first pair of items inside an array whose sum equals a target number. The function should return the numbers on the pair and their indexes mapped into an object. If there is no such pair, the function should return null."}]}]};
// const test = {"title":"article title","seo":"","text":[{"subtitle":" tset","paragraphsCommandsCode":[{"paragraph":"Create a function able to return information about the first pair of items inside an array whose sum equals a target number. The function should return the numbers on the pair and their indexes mapped into an object. If there is no such pair, the function should return null."},{"paragraph":""}]},{"subtitle":" something","paragraphsCommandsCode":[]}]};
const test = {"title":"article title","seo":"","text":[{"subtitle":"section title 1","paragraphsCommandsCode":[{"paragraph":"paragraph1"},{"command":["1","2","3","4","54",""]},{"codeBlock":{"language":"language-typescript","code":"function test() {\n  for (let i = 0; i < 10; i++);\n}\n\ntest()","filePath":"","disableLineNumbers":false,"disableFilePath":false}}],"id":"section-2021-06-22T22:24:18.224Z-2370.800000011921"},{"subtitle":"section after a deleted one","paragraphsCommandsCode":[{"paragraph":"second paragrapg"}],"id":"section-2021-06-22T22:24:55.766Z-39914.40000003576"}]};

const texts: any = {
  simpleStateManagement,
  complexStateManagement,
  findPair,
  orderForTimeoutsAndPromises: orderTimersPromisesAsyncAwait,
  lazyLoadingImages,
  test
};

export default texts;
