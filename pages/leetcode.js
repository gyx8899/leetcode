import React from 'react';
import Solution from '../site/leetcode/best-time-to-buy-and-sell-stock';

const LeetCodePage = () => {
	return (
			<div>
				<div>{Solution.name}</div>
				<div>{
					Object.keys(Solution)
							.filter(key => typeof Solution[key] === "function")
							// .map(key => (<div>{Solution[key].toString()}</div>))
							.map(key => (<div>{JSON.stringify(Solution[key].toString(), null, 4)}</div>))
				}</div>
			</div>
	);
};

export default LeetCodePage