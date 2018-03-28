const inputs = process.argv.slice(2);

const result = inputs.map(str => str.charAt(0))
                   .reduce((soFar, str) => soFar + str);

console.log(`[${inputs}] becomes "${result}"`);
