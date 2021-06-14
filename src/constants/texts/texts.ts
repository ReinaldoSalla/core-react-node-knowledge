/* eslint-disable */

import simpleStateManagement from './simpleStateManagement';
import complexStateManagement from './complexStateManagement';
import findPair from './findPair';
import orderTimersPromisesAsyncAwait from './orderTimersPromisesAsyncAwait';
import lazyLoadingImages from './lazyLoadingImages';

const test = {"title":"article title","seo":"","text":[{"title":"section title 1","paragraphsCommandsCode":[{"codeBlock":{"language":"language-typescript","code":"function option() {\n  for (let i = 0; i < 10; i++)\n}\n\noption();","filePath":"","disableLineNumbers":false,"disableFilePath":false}},{"paragraph":""}]}]};

const texts: any = {
  simpleStateManagement,
  complexStateManagement,
  findPair,
  orderForTimeoutsAndPromises: orderTimersPromisesAsyncAwait,
  lazyLoadingImages,
  test
};

export default texts;
