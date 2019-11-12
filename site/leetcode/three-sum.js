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

export default {
	name: 'three-sum',
	seoName: '3sum',
	threeSum,
}