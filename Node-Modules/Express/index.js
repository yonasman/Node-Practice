const lodash = require("lodash");
let arr = [1,2,[3,4],[5,6,7,[8,9]]]
let flat = lodash.flatMapDeep(arr)
 
console.log(flat)