import Solution from '../site/leetcode/maximum-number-of-balloons';
import {testSolution, toBe} from "./_utils";

let cases = [
	{
		params: {
			text: 'nlaebolko'
		},
		result: 1,
		matcher: toBe,
	},
	{
		params: {
			text: 'loonbalxballpoon'
		},
		result: 2,
		matcher: toBe,
	},
	{
		params: {
			text: 'leetcode'
		},
		result: 0,
		matcher: toBe,
	},
];

testSolution(Solution, cases);