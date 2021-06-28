import contents from './contents';
import Content from './contents.types';

function flatReducer(flatArray: string[], itemArray: string[]) {
  return flatArray.concat(itemArray);
}

function flat(nestedArray: string[][]) {
  return nestedArray.reduce(flatReducer, []);
}

function getSubcontentsFlatList(contentsFull: Content[]) {
  const nestedList = contentsFull.map((content) => {
    return content.subcontents.map((subcontent) => {
      return subcontent;
    });
  });
  const flatArray = flat(nestedList);
  return flatArray;
}

const subcontentsFlatList = getSubcontentsFlatList(contents);

export default subcontentsFlatList;
