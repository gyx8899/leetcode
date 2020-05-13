import Solution from '../site/leetcode/three-sum';
import {testSolution, toStrictEqual, toBe, toEqual} from './_utils';

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
  {
    params: {
      nums: [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]
    },
    result: [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]],
    matcher: toStrictEqual,
  },
];

testSolution(Solution, cases);
