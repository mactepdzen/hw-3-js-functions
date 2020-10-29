//1. splitAndMerge function
function splitAndMerge(str, sp) {
    var words = str.split(' ');

    var result = [];
    for (var i = 0; i < words.length; i++) {
        result[i] = words[i].split('').join(sp);
    }

    return result.join(' ');
}

// ---------------------

//2. convert function
function convert(hash) {
    var result = [];
    Object.keys(hash).forEach(key => {
        result.push([key, hash[key]]);
    });
    return result;
}

// added implementation using for...in statement :)
function convertModified(hash) {
    var result = [];
    for (var key in hash) {
        result.push([key, hash[key]]);
    }
    return result;
}

// ---------------------

//3. toCamelCase function
function toCamelCase(string) {
    var arr = string.split('');
    var result = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === '-' || arr[i] === '_'){
            result.push(arr[i + 1].toUpperCase());
            i++;
        } else {
            result.push(arr[i]);
        }
    }

    return result.join('');
}

// just added implementation with spaces between words in the final output :)
function toCamelCaseModified(string) {
    var arr = string.split('');
    var result = [];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === '-' || arr[i] === '_'){
            result.push(' ' + arr[i + 1].toUpperCase());
            i++;
        } else {
            result.push(arr[i]);
        }
    }

    return result.join('');
}

// ---------------------

//4. reverseEachWord function
function reverseEachWord(string) {
    var words = string.split(' ');

    var result = [];
    for (var i = 0; i < words.length; i++) {
        result[i] = words[i].split('').reverse().join('');
    }

    return result.join(' ');
}

// ---------------------

//5. stringExpansion function
function stringExpansion(string) {
    var result = [];

    for (var i = 0; i < string.length; i++) {
        if (Number.isNaN(Number.parseInt(string[i])) === false &&
            Number.isNaN(Number.parseInt(string[i + 1]))) {
            var currentNum = Number.parseInt(string[i]);

            for (var j = 0; j < currentNum; j++) {
                result.push(string[i + 1]);
            }

            i++;
        } else if (Number.isNaN(Number.parseInt(string[i]))) {
            result.push(string[i]);
        }
    }

    return result.join('');
}

// ---------------------

//6. largest and smallest functions

function smallest () {
    var args = [].slice.call(arguments);
    var min = args[0];

    for (var i = 0; i < args.length; i++) {
        if(args[i] < min) {
            min = args[i];
        }
    }

    return min;
}

function largest () {
    var args = [].slice.call(arguments);
    var max = args[0];

    for (var i = 0; i < args.length; i++) {
        if(args[i] > max) {
            max = args[i];
        }
    }

    return max;
}

// ---------------------

//7. transform function
function transform(arr) {
    var transformedArr = arr.map(function (item) {
        return function () {
            return item;
        }
    })
    return transformedArr;
}

// ---------------------

//8. sum function
function sum() {
    var i;
    var args = new Array(arguments.length);
    for (i = 0; i < args.length; i++) {
        args[i] = arguments[i];
    }

    if (args.length === 0) {
        return 0;
    }

    return args.shift() + sum.apply(null, args);
}

// ---------------------

//9. countDown function
function countDown(number) {
    if (number < 0) return 0;

    setTimeout(() => {
        console.log(number);
        --number;
        countDown(number)
    }, 1000);
}

// ---------------------

//10. myBind function (bind polyfill)
Function.prototype.myBind = function (context) {
    var current = this;
    var rest = [].slice.call(arguments, 1);
    return function () {
        var params = [].slice.call(arguments);
        return current.apply(context, rest.concat(params))
    }
}