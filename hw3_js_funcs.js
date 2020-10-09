//1. splitAndMerge function
function splitAndMerge(str, sp) {
    var words = str.split(' '); // splitting a string into words

    var letters = []; // array for letters selected from word
    for (var word of words) {
        letters.push(word.split(''));
    }

    var result = [];
    for (var letter of letters) {
        result.push(letter.join(sp));
    }

    return result.join(' ');
}

// ---------------------

//2. convert function

// ---------------------

//3. toCamelCase function
function toCamelCase(string) {
    var arr = string.split(''); // array for splitted into chars string
    var result = []; // array where we put our chars according to the task rules before merging it

    for(var i = 0; i < arr.length; i++) {
        if(arr[i].includes('-') || arr[i].includes('_')){
            result.push(arr[i + 1].toUpperCase());
            i++; // if we met '-' or '_' we have to skip next char to avoid repeating it
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
        if(arr[i].includes('-') || arr[i].includes('_')){
            result.push(` ${arr[i + 1].toUpperCase()}`);
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
    var words = string.split(' '); // splitting a string into words

    var letters = []; // array for letters selected from word
    for (var word of words) {
        letters.push(word.split(''));
    }

    //this loop is the only difference between reverseEachWord and splitAndMerge
    //it's cool when it's possible to reuse code that was written before :)
    for(var letter of letters) {
        letter.reverse();
    }

    var result = [];
    for (var letter of letters) {
        result.push(letter.join(''));
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

            i++; //if we find a 'number-letter' pair, we do +1 step to avoid duplicating the letter
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

    for (var item of args) {
        if (item < min) {
            min = item;
        }
    }

    return min;
}

function largest () {
    var args = [].slice.call(arguments);
    var max = args[0];

    for (var item of args) {
        if (item > max) {
            max = item;
        }
    }

    return max;
}

// ---------------------

//7.

// ---------------------

//8. sum function
function sum() {
    //Actually, before the array transformation construction, which is described below,
    //I used this option 'var args = [].slice.call(arguments);'
    //Just I checked on habr that construction below works faster and seems like good practice
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
