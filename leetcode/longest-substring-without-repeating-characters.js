/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
	let ls = s.length;
	if (ls < 2) {
		return ls;
	}
	let subStrArray = [s[0]],
			subStrMap = {[s[0]]: 0},
			maxLength = subStrArray.length;
	for (let i = 1; i < ls; i++) {
		let si = s[i];
		if (subStrMap[si] === undefined) {
			subStrMap[si] = subStrArray.length;
			subStrArray.push(si);
			if (subStrArray.length > maxLength) {
				maxLength = subStrArray.length;
			}
		} else {
			let duplicatedIndex = subStrMap[si];
			for (let j = 0, lj = duplicatedIndex; j <= lj; j++) {
				delete subStrMap[subStrArray[j]];
			}
			subStrArray = subStrArray.slice(duplicatedIndex + 1);
			for (let key in subStrMap) {
				subStrMap[key] -= duplicatedIndex + 1;
			}
			subStrMap[si] = subStrArray.length;
			subStrArray.push(si);
		}
	}
	return maxLength;
};

export default {
	name: 'longest-substring-without-repeating-characters',
	lengthOfLongestSubstring
}