import Solution from '../site/leetcode/maximum-subarray';
import {testSolution, toBe} from "./_utils";

let cases = [
	{
		params: {
			nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
		},
		result: 6,
		matcher: toBe,
	},
	{
		params: {
			nums: [-2, -1, -3, -4, -1, 0, -1, -5, -4]
		},
		result: 0,
		matcher: toBe,
	},
	{
		params: {
			nums: [-2, 1]
		},
		result: 1,
		matcher: toBe,
	},
	{
		params: {
			nums: [0,3,-1]
		},
		result: 3,
		matcher: toBe,
	},
	{
		params: {
			nums: [-2,-1]
		},
		result: -1,
		matcher: toBe,
	},
];

testSolution(Solution, cases);