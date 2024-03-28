// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

function  superbowlWin(record){
   let yearWon = record.find(match => match.result === 'W');
   return yearWon ? yearWon.year : undefined;
}

console.log(superbowlWin(record));