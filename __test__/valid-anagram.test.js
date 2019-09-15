import Solution from '../site/leetcode/valid-anagram';
import {testSolution, toBe} from "./_utils";

let cases = [
	{
		params: {
			s: 'anagram',
			t: 'nagaram'
		},
		result: true,
		matcher: toBe,
	},
	{
		params: {
			s: 'rat',
			t: 'car'
		},
		result: false,
		matcher: toBe,
	},
	{
		params: {
			s: '',
			t: ''
		},
		result: true,
		matcher: toBe,
	},
	{
		params: {
			s: 'a',
			t: 'a'
		},
		result: true,
		matcher: toBe,
	},
];

testSolution(Solution, cases);