import Solution from '../site/leetcode/valid-parentheses';
import {testSolution, toBe} from "./_utils";

let cases = [
	{
		params: {
			s: "()"
		},
		result: true,
		matcher: toBe,
	},
	{
		params: {
			s: "()[]{}"
		},
		result: true,
		matcher: toBe,
	},
	{
		params: {
			s: "(]"
		},
		result: false,
		matcher: toBe,
	},
	{
		params: {
			s: "([)]"
		},
		result: false,
		matcher: toBe,
	},
	{
		params: {
			s: "{[]}"
		},
		result: true,
		matcher: toBe,
	},
	{
		params: {
			s: "(((((())))))"
		},
		result: true,
		matcher: toBe,
	},
	{
		params: {
			s: "()()()()"
		},
		result: true,
		matcher: toBe,
	},
	{
		params: {
			s: "(((((((()"
		},
		result: false,
		matcher: toBe,
	},
	{
		params: {
			s: "((()(())))"
		},
		result: true,
		matcher: toBe,
	},
];

testSolution(Solution, cases);