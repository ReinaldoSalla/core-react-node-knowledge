import contents from '../../constants/contents';

const getBroadTargets = (possibleTargets: typeof contents): Array<string> => (
  possibleTargets.map((item) => (
    `${item.title} - ${item.subcontents.length} tutorials`
  ))
);

const getSpecificTargets = (
  possibleTargets: typeof contents
): Array<string> => (
  possibleTargets.flatMap((possibleTarget) => (
    possibleTarget.subcontents.map((item) => (
      `${item} - ${possibleTarget.title}`
    ))
  ))
);

const getMatch = (text: string): string | null => {
  const targets = {
    broadTargets: getBroadTargets(contents),
    specificTargets: getSpecificTargets(contents)
  };
  const firstMatch = targets.specificTargets.find((target) => {
    const isolatedTarget = target.split(' - ')[0];
    return isolatedTarget.slice(
      0,
      text.length
    ).toLowerCase() === text.toLowerCase();
  });
  if (firstMatch) {
    return firstMatch;
  }
  const secondMatch = targets.broadTargets.find((target) => {
    const isolatedTarget = target.split('-')[0];
    return isolatedTarget.slice(
      0,
      text.length
    ).toLowerCase() === text.toLowerCase();
  });
  if (secondMatch) {
    return `#${secondMatch}`;
  }
  return null;
};

const getLink = (text: string): string => (
  text.split(' -')[0].toLowerCase().split(' ').join('-')
);

const formatResult = (currentText: string, match: string): Array<string> => {
  const matchWithoutHash = match.replace('#', '');
  const lowerCaseCurrentText = currentText.toLowerCase();
  const formatedCurrentText = matchWithoutHash.slice(
    0,
    lowerCaseCurrentText.length
  );
  const formatedMatch = matchWithoutHash.slice(lowerCaseCurrentText.length);
  return [formatedCurrentText, formatedMatch];
};

export { getLink, getMatch, formatResult };