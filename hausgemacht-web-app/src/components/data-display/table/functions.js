export const sorter = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

export const limiter = (string, limit) =>
  string.length > limit ? `${string.substring(0, limit)}...` : string;

export const filter = (value, record) => record.diet.indexOf(value) === 0;
