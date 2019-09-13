import Solution from "../site/leetcode/two-sum";
import {testSolution, toStrictEqual} from "./_utils";

let cases = [
	{
		params: {
			sums: [2, 7, 11, 15],
			target: 9,
		},
		result: [0, 1],
		matcher: toStrictEqual,
		matcherNot: false
	},
	{
		params: {
			sums: [2, 7, 11, 15],
			target: 1,
		},
		result: [],
		matcher: toStrictEqual,
		matcherNot: false
	},
	{
		params: {
			sums: [2, 7, 11, 15],
			target: 27,
		},
		result: [],
		matcher: toStrictEqual,
		matcherNot: false
	},
	{
		params: {
			sums: [2, 7, 11, 15],
			target: 27,
		},
		result: [2, 3],
		matcher: toStrictEqual,
		matcherNot: true
	},
];

testSolution(Solution, cases);