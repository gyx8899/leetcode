/**
 * 暴力法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const _twoSum = function(nums, target) {
	let result = [];

	for (let i = 0, li = nums.length; i < li - 1; i++) {
		for (let j = i + 1; j < li; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(i);
				result.push(j);
				break;
			}
		}
		if (result.length) {
			break;
		}
	}

	return result;
};

const twoSum_OnceHashMap = (nums, target) => {
	let sumObject = {};
	for (let i = 0; i < nums.length; i++) {
		let left = target - nums[i];
		if (sumObject[left] !== undefined) {
			return [sumObject[left], i];
		}
		sumObject[nums[i]] = i;
	}
	return [];
};

export default {
	name: 'Two sum',
	_twoSum,
	twoSum_OnceHashMap
};