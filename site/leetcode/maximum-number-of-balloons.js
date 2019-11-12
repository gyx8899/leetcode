/**
 * @param {string} text
 * @return {number}
 * balloon
 */
var maxNumberOfBalloons = function(text) {
	let balloonArray = 'balloon'.split('');
	let balloonObject = {}, _balloonObject = {};
	for (let i = 0, li = balloonArray.length, iValue = balloonArray[i]; i < li; i++) {
		balloonObject[iValue] = balloonObject[iValue] ? (balloonObject[iValue] + 1) : 1;
		_balloonObject[iValue] = balloonObject[iValue];
	}
};

export default {
	name: 'maximum-number-of-balloons',
	maxNumberOfBalloons
}