import Solution from '../site/leetcode/longest-substring-without-repeating-characters';
import {testSolution, toBe} from "./_utils";

let cases = [
	{
		params: {
			s: ""
		},
		result: 0,
		matcher: toBe,
	},
	{
		params: {
			s: "a"
		},
		result: 1,
		matcher: toBe,
	},
	{
		params: {
			s: "au"
		},
		result: 2,
		matcher: toBe,
	},
	{
		params: {
			s: "abcabcbb"
		},
		result: 3,
		matcher: toBe,
	},
	{
		params: {
			s: "bbbbb"
		},
		result: 1,
		matcher: toBe,
	},
	{
		params: {
			s: "pwwkew"
		},
		result: 3,
		matcher: toBe,
	},
	{
		params: {
			s: "ggububgvfk"
		},
		result: 6,
		matcher: toBe,
	},
];

testSolution(Solution, cases);