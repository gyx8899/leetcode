const BubbleSort = function (sourceArray) {
  if (!sourceArray || sourceArray.length === 0 || sourceArray.length === 1) {
    return sourceArray;
  }

  let result = sourceArray;
  for (let i = 1, l = result.length; i < l; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (result[i] < result[j]) {
        result[j] = result[j] + result[i];
        result[i] = result[j] - result[i];
        result[j] = result[j] - result[i];
      }
    }
  }

  return result;
};

export default {
  name: 'sort-bubble',
  seoName: 'sortBubble',
  BubbleSort,
}
