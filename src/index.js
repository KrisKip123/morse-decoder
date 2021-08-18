const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let a = expr.split('');
    let c = a.length/10;
    let b;
    let res =[];
    for(let i = 1; i <= c; i++ ){
        b = a.splice(0,10);
        if(b[0] == '*'){
            res.push(' ');
            continue
        }
        while(b[0] === '0'){
            b.splice(0,1);
        }
        let k = [];
        w = b.length;
        for (let i = 1; i <= w/2; i++){
            let l = b.splice(0,2);
            l = l.join('');
            k.push(l);
        }
        let c = [];
        for (let item of k){ 
            if(item === '10'){
                c.push('.');
            }else c.push('-');
        }
        c = c.join('');
        res.push(MORSE_TABLE[c]);   
    }
    return res.join('');
}

module.exports = {
    decode
}