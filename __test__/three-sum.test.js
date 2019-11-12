import Solution from '../site/leetcode/three-sum';
import {testSolution, toStrictEqual} from "./_utils";

let cases = [
	{
		params: {
			nums: [-1, 0, 1, 2, -1, -4]
		},
		result: [
			[-1, -1, 2],
			[-1, 0, 1]
		],
		matcher: toStrictEqual,
	},
];

testSolution(Solution, cases);