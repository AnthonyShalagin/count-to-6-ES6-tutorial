const userArray = process.argv.slice(2);
const result = {};
[, result.username, result.email] = userArray;
console.log(result);
