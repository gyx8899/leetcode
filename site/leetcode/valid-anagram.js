/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	// Special case
	if (s === t) {
		return true;
	} else if (Array.from(s).length !== Array.from(t).length) {
		return false;
	}
	let obj = {};
	for (let i = 0, li = Array.from(s).length; i < li; i++) {
		let charSI = s.charCodeAt(i),
				charTI = t.charCodeAt(i);
		obj[charSI] = obj[charSI] === undefined ? 1 : (obj[charSI] + 1);
		obj[charTI] = obj[charTI] === undefined ? -1 : (obj[charTI] - 1);
	}
	return Object.keys(obj).filter(key => obj[key] !== 0).length === 0;
};

const isAnagram_Sort = (s, t) => {
	// Special case
	if (s.length === t.length) {
		if (s === t) {
			return true;
		} else {
			return Array.from(s).sort().join() === Array.from(t).sort().join();
		}
	}
	return false;
};

export default {
	name: 'valid-anagram',
	difficulty: 1, // Medium
	isAnagram,
	isAnagram_Sort
}