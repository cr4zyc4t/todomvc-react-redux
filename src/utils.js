export const pluralize = function (word, count) {
  return count === 1 ? word : `${word}s`;
};
