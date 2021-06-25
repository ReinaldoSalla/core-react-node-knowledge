import Content from './contents.types';

function flatReducer(flatArray: string[], itemArray: string[]) {
  return flatArray.concat(itemArray);
}

function flat(nestedArray: string[][]) {
  return nestedArray.reduce(flatReducer, []);
}

function getSubcontentsFlatList(contents: Content[]) {
  const nestedList = contents.map((content) => {
    return content.subcontents.map((subcontent) => {
      return subcontent;
    });
  });
  const flatArray = flat(nestedList);
  return flatArray;
}

export default getSubcontentsFlatList;
