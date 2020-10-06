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

    return(result.join(' '));
}

// ---------------------

