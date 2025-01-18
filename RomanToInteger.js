const romanToInt = function(roman) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let total = 0;
    let prevVal = 0;

    for (let i = 0; i < roman.length; i++) {
        let currentVal = romanMap[roman[i]];

        if (currentVal > prevVal) {
            total += currentVal - 2 * prevVal;
        } else {
            total += currentVal;
        }
        prevVal = currentVal;
    }
    return total;
};