/**
 * containsDuplicate
 * @param nums
 */
const containsDuplicate_withSet = function(nums) {
	return nums.length !== new Set(nums).size;
};

const containsDuplicate_onceHashMap = (nums) => {
	let numsObject = {};
	for (let i = 0, li = nums.length; i < li; i++) {
		if (numsObject[nums[i]] !== undefined) {
			return true;
		}
		numsObject[nums[i]] = i;
	}
	return false;
};

export default {
	name: 'contains-duplicate',
	containsDuplicate_withSet,
	containsDuplicate_onceHashMap
}