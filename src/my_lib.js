const arabicToRomanNumbers = (integerValue) => {
    //if integerValue is 0 or undefined
    if (integerValue === 0 || integerValue === undefined) {
        return 'nulla';
    }
    let retVal = '';
    for (let i = 0; i < romans.length; i++) {
        while (integerValue >= arabics[i]) {
            retVal += romans[i];
            integerValue -= arabics[i];
        }
    }

    return retVal;
};

const romanToArabicNumbers = (romanValue) => {

    if (romanValue === undefined) {
        return 0;
    }
    let rmVal = romanValue.trim();
    if (rmVal.length === 0) { return 0; }
    let retVal = 0;
    while (rmVal.length > 0) {
        let local = readNextDigit(rmVal);
        let indOfLocal = arabics.indexOf(local);
        let len = romans[indOfLocal].length;
        if (len < rmVal.length) {
            rmVal = rmVal.substring(len, rmVal.length);
        } else { rmVal = ''; }
        retVal += local;
    }
    return retVal;
};

const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const arabics = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const readNextDigit = (value) => {
    let valueOfDigit = getFirstRomanDigit(value);
    let indexOfValue = romans.indexOf(valueOfDigit);
    if (indexOfValue != -1) {
        return arabics[indexOfValue];
    }
    return 0;
};

const getFirstRomanDigit = (value) => {
    if (value.length === 1) {
        return value;
    }
    let twoDigit = value.slice(0, 2);
    if (romans.indexOf(twoDigit) != -1) {
        return twoDigit;
    } else {
        return value[0];
    }
};

module.exports = {
    arabicToRomanNumbers: arabicToRomanNumbers,
    romanToArabicNumbers: romanToArabicNumbers
};