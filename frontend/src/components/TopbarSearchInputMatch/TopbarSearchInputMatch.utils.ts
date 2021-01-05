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

const targets = {
  broadTargets: getBroadTargets(contents),
  specificTargets: getSpecificTargets(contents)
};

const getLink = (text: string): string => (
  text.split(' -')[0].toLowerCase().split(' ').join('-')
);

export { targets, getLink };