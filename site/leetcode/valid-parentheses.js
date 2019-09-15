/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
	const LeftParentheses = {
		'(': true,
		'{': true,
		'[': true,
	};
	const RightParentheses = {
		')': '(',
		'}': '{',
		']': '['
	};
	let stack = [];
	for (let i = 0, li = s.length; i < li; i++) {
		let char = s.charAt(i);
		if (LeftParentheses[char] === true) {
			stack.push(char);
			// Optimize 1:
			if (stack.length > li / 2) {
				return false;
			}
		} else if (stack[stack.length - 1] === RightParentheses[char]) {
			stack.pop();
		} else {
			return false;
		}
	}
	return stack.length === 0;
};

export default {
	name: 'valid-parentheses',
	isValid
}