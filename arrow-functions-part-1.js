var inputs = process.argv.slice(2);

var result = inputs.map(str => str.charAt(0))
                   .reduce((soFar, str) => soFar + s);

console.log(`[${inputs}] becomes "${result}"`);
