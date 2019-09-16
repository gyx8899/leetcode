let util = require('../../app/node/util');
let path = require("path");

let solutionsPath = path.join(__dirname, "../leetcode/");
let targetIndexPath = path.join(__dirname, '../leetcode/_index.js');
let solutionNames = util.getDirectoryFileNames(solutionsPath);

const getIndexContent = (names) => {
	let importLines = [],
			exportLines = ['export default {'];
	for (let i = 0, li = names.length; i < li; i++) {
		if (names[i] !== '_index.js') {
			let name = names[i].replace(/-/g, '').replace('.js', '');
			importLines.push(`import ${name} from './${names[i]}'`);
			exportLines.push(`${name},`);
		}
	}
	return `${importLines.join('\n')}\n\n${exportLines.join('\n')}}`
};

util.writeDataToFile(targetIndexPath, getIndexContent(solutionNames));