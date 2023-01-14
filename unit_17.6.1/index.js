const invertedString = (string) => {
    let revStr = ''
    for (let index = string.length-1; index >= 0; index--) {
        revStr += string[index]
    }    
    return revStr;

};

export default invertedString;
