/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	let profits = 0;
	if (prices.length > 1) {
		let li = prices.length,
				maxPrice = prices[li - 1];
		for (let i = li - 2; i >= 0; i--) {
			let _profits = maxPrice - prices[i];
			if (_profits > profits) {
				profits = _profits;
			} else if (_profits < 0){
				maxPrice = prices[i];
			}
		}
	}
	return profits;
};

const maxProfit_SequentialTraversal = (prices) => {
	let profits = 0;
	if (prices.length > 1) {
		let li = prices.length,
				minPrice = prices[0];
		for (let i = 1; i < li; i++) {
			let _profits = prices[i] - minPrice;
			if (_profits > profits) {
				profits = _profits;
			} else if (_profits < 0) {
				minPrice = prices[i];
			}
		}
	}
	return profits;
};

export default {
	name: 'maxProfit',
	maxProfit,
	maxProfit_SequentialTraversal
}