/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  let _nums = nums.sort((a, b) => (a - b)), result = [], resultStrings = [];
  for (let i = 0, li = _nums.length; i < li - 2; i++) {
    for (let j = i + 1; j < li - 1; j++) {
      for (let k = j + 1; k < li; k++) {
        if (_nums[i] + _nums[j] + _nums[k] === 0) {
          let items = [_nums[i],_nums[j], _nums[k]].sort((a, b) => (a - b));
          if (resultStrings.indexOf(items.join('')) === -1) {
            resultStrings.push(items.join(''));
            result.push(items);
          }
        }
      }
    }
  }
  return result;
};

const threeSum2 = function (nums) {
  let negatives = [],
      zeros = [],
      positives = [],
      result = [];
  let negativesObj = {},
      positivesObj = {};
  let twoNegativesObj = null,
      twoPositivesObj = null;
  let resultStrObj = {};
  for (let i = 0, li = nums.length; i < li; i++) {
    let num = nums[i];
    if (num === 0) {
      zeros.push(num);
    } else if (num < 0) {
      negatives.push(num);
      negativesObj[num] = num;
    } else {
      positives.push(num);
      positivesObj[num] = num;
    }
  }
  negatives = negatives.sort((a, b) => a - b);
  positives = positives.sort((a, b) => a - b);

  const getArrayTwoItemSumsObj = (_nums) => {
    let sumObj = {};
    for (let m = 0, lm = _nums.length; m < lm - 1; m++) {
      for (let n = m + 1; n < lm; n++) {
        let sum = _nums[m] + _nums[n];
        if (sumObj[sum]) {
					sumObj[sum].push([_nums[m], _nums[n]]);
				} else {
					sumObj[sum] = [[_nums[m], _nums[n]]];
				}
      }
    }
    return sumObj;
  };

  twoNegativesObj = getArrayTwoItemSumsObj(negatives);
  twoPositivesObj = getArrayTwoItemSumsObj(positives);

  for (let i = positives.length - 1; i >= 0; i--) {
    let twoNegatives = twoNegativesObj[positives[i] * -1];
    if (twoNegatives) {
      twoNegatives.forEach((_twoNegative) => {
				let target = _twoNegative.concat(positives[i]);
				if (resultStrObj[target.join()] === undefined) {
					result.push(target);
					resultStrObj[target.join()] = true;
				}
			});
    }
  }

	if (zeros.length) {
		for (let j = 0, lj = negatives.length; j < lj && zeros.length; j++) {
			let negativesJ = negatives[j];
			if (positivesObj[negativesJ * -1] !== undefined) {
				const target = [negativesJ, 0, negativesJ * -1];
				if (resultStrObj[target.join()] === undefined) {
					result.push(target);
					resultStrObj[target.join()] = true;
				}
			}
		}
		if (zeros.length > 2) {
			result.push([0, 0, 0]);
		}
	}

  for (let j = 0, lj = negatives.length; j < lj; j++) {
    let twoPositives = twoPositivesObj[negatives[j] * -1];

    if (twoPositives) {
			twoPositives.forEach((_twoPositive) => {
				let target = [negatives[j]].concat(_twoPositive);
				if (resultStrObj[target.join()] === undefined) {
					result.push(target);
					resultStrObj[target.join()] = true;
				}
			});
    }
  }
  result = result.sort((a, b) => {
  	return (a[0] - b[0]) || (a[1] - b[1]) || (a[2] - b[2]);
	});
  return result;
};

export default {
  name: 'three-sum',
  seoName: '3sum',
  threeSum,
  threeSum2,
};
