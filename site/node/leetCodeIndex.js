let util = require('../../app/node/util');
let path = require("path");

let solutionsPath = path.join(__dirname, "../leetcode/");
let targetIndexPath = path.join(__dirname, '../../static/data/leetcode.json');
let solutionNames = util.getDirectoryFileNames(solutionsPath);

util.writeDataToFile(targetIndexPath, JSON.stringify(solutionNames));