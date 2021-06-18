/* eslint-disable */

import simpleStateManagement from './simpleStateManagement';
import complexStateManagement from './complexStateManagement';
import findPair from './findPair';
import orderTimersPromisesAsyncAwait from './orderTimersPromisesAsyncAwait';
import lazyLoadingImages from './lazyLoadingImages';

// const test = {"title":"article title","seo":"","text":[{"title":"section title 1","paragraphsCommandsCode":[{"codeBlock":{"language":"language-typescript","code":"function option() {\n  for (let i = 0; i < 10; i++)\n}\n\noption();","filePath":"","disableLineNumbers":false,"disableFilePath":false}},{"paragraph":""}]}]};
const test = {"title":"article title","seo":"","text":[{"title":"section title 1","paragraphsCommandsCode":[{"command":["11","1","1","1","1","1"]},{"paragraph":"123"},{"codeBlock":{"language":"language-typescript","code":"function problem() {\n  console.log('wrong');\n  return what;\n}\n\n","filePath":"","disableLineNumbers":false,"disableFilePath":false}}]}]};

const texts: any = {
  simpleStateManagement,
  complexStateManagement,
  findPair,
  orderForTimeoutsAndPromises: orderTimersPromisesAsyncAwait,
  lazyLoadingImages,
  test
};

export default texts;
