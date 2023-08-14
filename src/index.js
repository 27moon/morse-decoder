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
    // write your solution here
    let arr= [];
    let arr2 = [];
    
    let numRemove;
    
    for (let i = 0; i <= expr.length; i+=10) {
    arr.push(expr.slice(i, i + 10)); // разбили строку по 10 символов=> массив со строками по 10 символов
    }
    for(let i=0; i < arr.length; i++) {
    arr[i] = arr[i].replace('**********',' '); // заменили строку со ********** на строку - пробел
    }
    
    for (let item of arr) { //каждая строчка по 10 по отдельности
      //console.log(item); //-показывает десятизначную строку 
      numRemove = arr2.push(item.replace(/00/g,'').replace(/10/g,'.').replace(/11/g,'-')); //заменили двойные цифры 00, 10 и 11 на символы. Получили новый массив со значениями точка-тире
    }
    
    
    
    let result;
    let arr3 = [];
    
    for (let i = 0; i < arr2.length; i++){
    for (let key in MORSE_TABLE) {
      
    
    if (MORSE_TABLE.hasOwnProperty(key) && arr2[i] === key) {
     arr3[i] = MORSE_TABLE[arr2[i]];// вывело побуквенно h e l l o w o r l d
      arr3.push(result);
      //console.log(arr3);
      }
      if (arr3[i] === undefined) {
       arr3[i] = arr2[i];
      }
      //console.log(arr3);
    }
    }
    //вывело ["h","e","l","l","o"," ","w","o","r","l","d",""]
    
    let resultString = arr3.join('');
    return resultString;
    //console.log(resultString);
}

module.exports = {
    decode
}