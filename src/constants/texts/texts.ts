/* eslint-disable */

import simpleStateManagement from './simpleStateManagement';
import complexStateManagement from './complexStateManagement';
import findPair from './findPair';
import orderTimersPromisesAsyncAwait from './orderTimersPromisesAsyncAwait';
import lazyLoadingImages from './lazyLoadingImages';

const test = {"title":"page title","seo":"","text":[{"title":"first section","paragraphsCommandsCode":[{"paragraph":"first paragraph"},{"codeBlock":{"language":"tsx","code":"import { something } from somewhere;\n\nfunction test() {\n  for (let i = 0; i < 1e1000; i++) {\n    console.log(i);\n  }\n}\n\ntest()","filePath":"","disableLineNumbers":false,"disableFilePath":false}},{"paragraph":"second paragraph"}]},{"title":"second section","paragraphsCommandsCode":[{"paragraph":"final p"}]}]};

const texts: any = {
  simpleStateManagement,
  complexStateManagement,
  findPair,
  orderForTimeoutsAndPromises: orderTimersPromisesAsyncAwait,
  lazyLoadingImages,
  test
};

export default texts;
