const inputs = process.argv.slice(2);

const result = inputs.map(str => str.charAt(0))
                   .reduce((soFar, str) => soFar + s);

console.log(`[${inputs}] becomes "${result}"`);
