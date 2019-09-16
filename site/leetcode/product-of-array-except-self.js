/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	if (!nums || nums.length < 2) {
		return [];
	}
	let numsLength = nums.length;
	let result = new Array(numsLength).fill(1);
	for (let i = 0; i < numsLength; i++ ) {
		for (let j = 0; j < numsLength; j++) {
			if (j !== i) {
				result[i] *= nums[j];
			}
		}
	}
	return result;
};

const productExceptSelf_LeftRightAccumulate = (nums) => {
	let result = [];
	let accumulate = 1;
	for (let i = 0; i < nums.length; i++) {
		result.push(accumulate);
		accumulate *= nums[i];
	}
	accumulate = 1;
	for (let j = nums.length - 1; j > -1; j--) {
		result[j] *= accumulate;
		accumulate *= nums[j];
	}
	return result;
};

export default {
	name: 'product-of-array-except-self',
	difficulty: 1,
	productExceptSelf,
	productExceptSelf_LeftRightAccumulate,
}