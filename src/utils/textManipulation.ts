/**
 * Convert from normal to hifen-case
 * Software Development = software-development
 */
const normalToHifen = (text: string): string => (
  text.split(' ').join('-').toLowerCase()
);

/**
 * Convert from camelCase to hifen-case
 * softwareDevelopment = sofware-development
 */
const camelToHifen = (text: string): string => {
  const letters = text.split('');
  const convertedLetters = letters.map((letter: string) => {
    if (letter === letter.toUpperCase()) {
      return `-${letter.toLowerCase}`;
    }
    return letter;
  });
  return convertedLetters.join('');
};

/**
 * Convert from hifen-case to normal
 * software-development = Software Development
 */
const hifenToNormal = (text: string): string => {
  const words = text.split('-');
  const upperCaseWords = words.map((word: string) => (
    word.replace(
      word.charAt(0),
      word.charAt(0).toUpperCase()
    )
  ));
  return upperCaseWords.join(' ');
};

/**
 * Convert from hifen-case to camelCase
 * software-development = softwareDevelopment
 */
const hifenToCamel = (text: string): string => {
  const words = text.split('-');
  const convertedLetters = words.map((word, index) => {
    if (index > 0) {
      return word.replace(
        word.charAt(0),
        word.charAt(0).toUpperCase()
      );
    }
    return word;
  });
  return convertedLetters.join('');
};

export {
  hifenToNormal, normalToHifen, camelToHifen, hifenToCamel
};