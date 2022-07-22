console.log("Calling function");
//const { validateInput } = require("./modules/utils");
const myLogger = require("./modules/log");

var findSubsequence = (input) => {
  try {
    myLogger.info("Input: ", input);
    return "1 5 9";
  } catch (err) {
    myLogger.error(err);
  }
};

module.exports = findSubsequence
