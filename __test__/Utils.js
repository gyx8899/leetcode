/**
 * toBe uses Object.is to test exact equality
 * expect(2 + 2).toBe(4);
 * @type {string}
 */
export const toBe = 'toBe';

/**
 * toEqual recursively checks every field of an object or array.
 * expect(data).toEqual({one: 1, two: 2});
 * @type {string}
 */
export const toEqual = 'toEqual';

/**
 * Use .toStrictEqual to test that objects have the same types as well as structure.
 * @type {string}
 */
export const toStrictEqual = 'toStrictEqual';


const getTypeString = (variable) => {
	switch(typeof variable) {
		case 'function':
			return `function ${variable.name}`;
		case 'object':
			if (variable instanceof String) {
				return variable;
			} else if (variable instanceof Date) {
				return variable.toISOString();
			}
			return JSON.stringify(variable);
		default:
			// undefined, boolean, number, bigint, symbol
			return variable;
	}
};

const getParamsString = (params) => {
	let describe = '';
	for (let key in params) {
		if (params.hasOwnProperty(key)) {
			if (describe !== '') {
				describe += ', ';
			}
			describe += `${key}: ${getTypeString(params[key])}`;
		}
	}
	return describe;
};

/**
 * testUtil
 * @param Solution
 * @param cases
 */
export const testUtil = (Solution, cases) => {
	describe(`Problem: ${Solution.name}`, () => {
		const testSolution = (solution, caseItem) => {
			const {params, result, matcher, matcherNot} = caseItem;
			test(`${getParamsString(params)}`, () => {
				if (matcherNot) {
					expect(solution.apply(this, Object.values(params))).not[matcher](result);
				} else {
					expect(solution.apply(this, Object.values(params)))[matcher](result);
				}
			})
		};

		for (let key in Solution) {
			if (Solution.hasOwnProperty(key) && typeof Solution[key] === 'function') {
				describe(`Solution: ${key}`, () => {
					for (let i = 0, li = cases.length; i < li; i++) {
						testSolution(Solution[key], cases[i]);
					}
				});
			}
		}
	});
};

