import Solution from '../site/leetcode/product-of-array-except-self';
import {testSolution, toStrictEqual} from "./_utils";

let cases = [
	{
		params: {
			nums: [1,2,3,4]
		},
		result: [24,12,8,6],
		matcher: toStrictEqual,
	},
];

testSolution(Solution, cases);