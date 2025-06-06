export const decodePlayFairCypher = (code: string) => {
  //create cypher
  const playFairCypher = [
    ["S", "U", "P", "E", "R"],
    ["Y", "A", "B", "C", "D"],
    ["F", "G", "H", "I", "K"],
    ["L", "M", "N", "O", "Q"],
    ["T", "V", "W", "X", "Z"],
  ];

  const checkRules = (prev, curr): number[] => {
    let currRow = 0;
    let currColumn = 0;
    let prevRow = 0;
    let prevColumn = 0;
    for (const [index, row] of playFairCypher.entries()) {
      //check row
      if (row.indexOf(prev) !== -1 && row.indexOf(curr) !== -1) {
        let currIndex = row.indexOf(curr);
        let prevIndex = row.indexOf(prev);

        //1 scenario first of the array
        if (currIndex === 0) {
          curr = row[4];
        } else {
          //replace with one to the left
          curr = row[currIndex - 1];
        }
        if (prevIndex === 0) {
          prev = row[4];
        } else {
          //replace with one to the left
          prev = row[prevIndex - 1];
        }

        return [prev, curr];
      }

      if (row.indexOf(curr) !== -1) {
        currRow = index;
        currColumn = row.indexOf(curr);
      }
      if (row.indexOf(prev) !== -1) {
        prevRow = index;
        prevColumn = row.indexOf(prev);
      }
    }
    //check same column
    if (currColumn === prevColumn) {
      if (currRow === 0) {
        curr = playFairCypher[4][currColumn];
      } else {
        curr = playFairCypher[currRow - 1][currColumn];
      }
      if (prevRow === 0) {
        prev = playFairCypher[4][prevColumn];
      } else {
        prev = playFairCypher[prevRow - 1][prevColumn];
      }
      return [prev, curr];
    }

    //swap columns because falls in box rule
    curr = playFairCypher[currRow][prevColumn];
    prev = playFairCypher[prevRow][currColumn];
    return [prev, curr];
  };

  let decodedString = "";
  for (let i = 1; i < code.length; i += 2) {
    let previous = code[i - 1];
    let current = code[i];
    const letters = checkRules(previous, current);
    decodedString += letters[0] + letters[1];
  }
  let removeXs = decodedString.replace("X", "");

  if(removeXs[removeXs.length-1] === "X"){
    removeXs = removeXs.slice(0,-1);
  }
  return removeXs;
};

console.log(decodePlayFairCypher("IKEWENENXLNQLPZSLERUMRHEERYBOFNEINCHCV"));
