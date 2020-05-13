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

const twoSumHash = (nums, target) => {
	let result = [];
	if (nums && nums.length > 1) {
		const hashObj = {};
		for (let i = 0, l = nums.length; i < l; i++) {
			const numIndex = hashObj[target - nums[i]];
			if (numIndex !== undefined) {
				result = [numIndex, i];
				break;
			} else {
				hashObj[nums[i]] = i;
			}
		}
	}
	return result;
};

export default {
	name: 'two-sum',
	_twoSum,
	twoSum_OnceHashMap,
	twoSumHash
};
