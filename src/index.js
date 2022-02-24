const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let splitedString = [];
    let chars = [];

    for (let i = 0; i < expr.length;) {
        splitedString.push(expr.substr(i, 10));
        i += 10;
    }

    for (let i = 0; i < splitedString.length; i++) {
        if (splitedString[i] == '**********') {
            chars.push(' ');
        } else {
            convertToChars(splitedString[i]);
        }
    }

    function convertToChars(str) {
        let charsArr = []
        if (str.length == 10) {
            for (let i = 0; i < str.length;) {
                if (str.substr(i, 2) == 10) charsArr.push('.');
                if (str.substr(i, 2) == 11) charsArr.push('-');
                i += 2;
            }
        } else { return 0 };

        for (let key in MORSE_TABLE) {
            if (key == charsArr.join('')) chars.push(MORSE_TABLE[key]);
        }
    }
    return chars.join('');
}

module.exports = {
    decode
}
