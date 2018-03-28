module.exports = function average(...args) {
    var result = 0;
    var count = 0; 
    args.forEach(function (value) {
        result += value;
        count++; 
    });
    return result/count; 
};


module.exports = (...args) => {
    var sum = args.reduce((soFar, value) => soFar + value, 0);
    return sum / args.length;
};
