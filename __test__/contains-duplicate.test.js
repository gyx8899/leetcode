import Solution from '../leetcode/contains-duplicate';
import {testUtil, toBe} from "./Utils";

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

testUtil(Solution, cases);