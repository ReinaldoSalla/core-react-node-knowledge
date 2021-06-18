/* eslint-disable */

function splitCommands(commands: string) {
  return { command: commands.split('\n') };
}

function processParagraphsCommandsCode(paragraphsCommandsCode: Array<any>) {
  return paragraphsCommandsCode.map((item: any) => {
    if (item.command) {
      return splitCommands(item.command)
    }
    return item;
  });
}

function processText(text: Array<any>) {
  return text.map((textItem) => {
    return {
      ...textItem,
      paragraphsCommandsCode: processParagraphsCommandsCode(textItem.paragraphsCommandCode)
    }
  });
}

export function processData(data: any) {
  return {
    ...data,
    text: processText(data.text)
  };
}
