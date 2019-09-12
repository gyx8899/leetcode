import Solution from '../site/leetcode/best-time-to-buy-and-sell-stock';
import {testUtil, toBe} from "./Utils";

let cases = [
	{
		params: {
			nums: [7,1,5,3,6,4]
		},
		result: 5,
		matcher: toBe,
	},
	{
		params: {
			nums: [7,6,4,3,1]
		},
		result: 0,
		matcher: toBe,
	},
];

testUtil(Solution, cases);