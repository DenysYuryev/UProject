const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis) {
    console.log(number * basis);
}

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top');