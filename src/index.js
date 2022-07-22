const { validateInput, isEmptyOrSpaces } = require("./modules/utils");
const myLogger = require("./modules/log");

var findSubsequence = (input) => {
  try {    
    myLogger.info(`Input: ${input}`);
    if(!isEmptyOrSpaces(input))
    {
      //trim, split and parse the string to int[]
      let intInput = input.trim().split(" ").map( Number );
      let finalSet = {
        results: []
      }
      let k = 1, startIndex = 0;
      
      // This loop will traverse though array to find all the sequences and their lengths
      // After it gets a final set of all sequences, it sorts them with length, index order
      // The first one is then picked
      for (let i = 0; i < intInput.length; i++) {        
        // If only the current value is lower then the next we want the sequence to begin
        if (intInput[i] < intInput[i + 1]) {
          k++;
        } else {
          if (k > 1) {
            finalSet.results.push({
              "startingIndex": startIndex,
              "seqLength": k
            });
          }
          startIndex = i + 1;
          k = 1;
        }
      }
      
      finalSet.results.sort(function(a, b) {
        // a and b will be two instances of result set        
        var a1st = -1; // negative value means left item should appear first
        var b1st = 1; // positive value means right item should appear first
        var equal = 0; // zero means objects are equal

        // The object will be ordered by sequence length and then starting index
        if (a.seqLength > b.seqLength) {
          return a1st;
        } else if (b.startingIndex < a.startingIndex) {
          return b1st;
        } else {
          return equal;
        }
      });
      
      //Check if there is atleast one sequence with length more than 2
      // If there is none return the 1st element
      if(finalSet.results.length > 0)
        return intInput.slice(finalSet.results[0].startingIndex,finalSet.results[0].startingIndex + finalSet.results[0].seqLength).join(' ');
      else
        return intInput.slice(0,1).join(' ');
    }
    else{
      return "";
    }
  } catch (err) {
    myLogger.error(err);
  }
};

module.exports = findSubsequence;
