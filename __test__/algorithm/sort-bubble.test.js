import Solution from "../../site/algorithm/sort-bubble";
import {testSolution, toStrictEqual} from "../_utils";

let cases = [
	{
		params: {
			sums: [2, 7, 11, 15],
		},
		result: [2, 7, 11, 15],
		matcher: toStrictEqual,
		matcherNot: false
	},
	{
		params: {
			sums: [11, 2, 1, 11, 15],
		},
		result: [1, 2, 11, 11, 15],
		matcher: toStrictEqual,
		matcherNot: false
	},
	{
		params: {
			sums: [],
		},
		result: [],
		matcher: toStrictEqual,
		matcherNot: false
	},
	{
		params: {
			sums: [2],
		},
		result: [2],
		matcher: toStrictEqual,
		matcherNot: false
	},
];

testSolution(Solution, cases);
