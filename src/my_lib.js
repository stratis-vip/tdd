const add = (a, b) => a + b;
const roman = (integerValue) => {
    //if integerValue is 0 or undefined
    if (integerValue === 0 || integerValue === undefined) {
        return 'nulla';
    }
    let retVal = '';
    retVal = getVs(integerValue);
    // integerValue = integerValue % 5;
    // if (!integerValue) { return retVal; }

    // if (belowFour(integerValue)) {
    //     let counter = integerValue;
    //     do {
    //         retVal += getAnI();
    //         counter--;
    //     } while (counter >= 1);
    // } else {
    //     retVal = 'I' + retVal;
    // }
    return retVal;
};

const getAnI = () => 'I';
const getVs = (value) => {
    const romans = [{ value: 10, symbol: 'X' }, { value: 5, symbol: 'V' }];
    let localValue = value;
    let retVal = '';
    let lowSymbol = 'V';
    let lowValue = 5;
    for (let i = 0; i != romans.length; i++) {
        if (localValue <= romans[i].value){
            lowSymbol = romans[i].symbol;
            lowValue = romans[i].value;
        }
        let howV = Math.floor(localValue / romans[i].value);
        for (let j = 0; j !== howV; j++) {
            retVal += romans[i].symbol;
        }
        localValue -= howV * romans[i].value;
    }
    if (localValue === 0) {return retVal;}
    if (belowFour(localValue)) {
        let counter = localValue;
        do {
            retVal += getAnI();
            counter--;
        } while (counter >= 1);
    } else {
        // retVal = lowSymbol;
        if (localValue !== lowValue)
        retVal += 'I' + lowSymbol;
    }
    return retVal;
};

const belowFour = (a) => a < 4;

module.exports = {
    add: add,
    roman: roman
    
};