
var isPalidroneNumber = function (x)  {
    const str = x.toString();
    const splitStr = str.split('');
    const reversedStr = splitStr.reverse().join('');
    
    if(reversedStr === str) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalidroneNumber(121));
console.log(isPalidroneNumber(21));