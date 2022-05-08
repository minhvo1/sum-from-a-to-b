function sum(fromN, toN) {
  if (fromN < toN) {
    return toN + sum(fromN, toN - 1);
  } else {
    return fromN;
  }
};

module.exports = sum;
