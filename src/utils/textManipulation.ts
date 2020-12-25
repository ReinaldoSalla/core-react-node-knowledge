const prettify = (text: string): string => {
  // Convert e.g. async-await to Async Await
  const words = text.split('-');
  const upperCaseWords = words.map((word: string) => (
    word.replace(
      word.charAt(0),
      word.charAt(0).toUpperCase()
    )
  ));
  return upperCaseWords.join(' ');
};

const uglify = (text: string): string => (
  // Convert e.g, Async Await to async-await
  text.split(' ').join('-').toLowerCase()
);

const hifenCasify = (text: string): string => {
  // Convert, e.g. simpleStateManagement to simple-state-management
  const letters = text.split('');
  const convertedLetters = letters.map((letter: string) => {
    if (letter === letter.toUpperCase()) {
      return `-${letter.toLowerCase}`;
    }
    return letter;
  });
  return convertedLetters.join('');
};

const camelCasify = (text: string): string => {
  // Convert, e.g. simple-state-management to simpleStateManagement
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
  prettify, uglify, hifenCasify, camelCasify
};