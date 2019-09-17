/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
	if (!nums || nums.length === 0) {
		return undefined;
	} else if (nums.length === 1) {
		return nums[0];
	}

	let maxSum = nums[0];
	const updateMaxSum = (num) => {
		if (num > maxSum) {
			maxSum = num;
		}
	};
	let start = 0,
			numsLength = nums.length,
			last = numsLength;
	for (let i = start; i < numsLength; i++) {
		updateMaxSum(nums[i]);
		if (nums[i] <= 0 && i === start) {
			start++;
		}
		if (nums[last - 1] < 0 && nums.length - i === last) {
			last--;
		}
	}

	for (let i = start; i < last; i++) {
		let numI = nums[i];
		if (numI <= 0) {
			updateMaxSum(numI);
			continue;
		}
		let _maxSum = numI;
		if (i + 1 === last) {
			updateMaxSum(_maxSum);
		} else {
			for (let j = i + 1; j < last; j++) {
				_maxSum += nums[j];
				updateMaxSum(_maxSum);
			}
		}
	}

	return maxSum;
};

export default {
	name: 'maximum-subarray',
	maxSubArray,
}