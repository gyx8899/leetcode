import Solution from '../site/leetcode/contains-duplicate';
import {testSolution, toBe} from "./_utils";

let cases = [
	{
		params: {
			nums: [1,2,3,1]
		},
		result: true,
		matcher: toBe,
	},
	{
		params: {
			nums: [1,2,3,4]
		},
		result: false,
		matcher: toBe,
	},
	{
		params: {
			nums: [1,1,1,3,3,4,3,2,4,2]
		},
		result: true,
		matcher: toBe,
	},
];

testSolution(Solution, cases);