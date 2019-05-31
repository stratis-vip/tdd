const add = (a, b) => a + b;
const roman = (integerValue) => {
    //if integerValue is 0 or undefined
    if (integerValue === 0 || integerValue === undefined) {
        return 'nulla';
    }

    let retVal = '';
    if (integerValue === 1) { retVal = romans[1].symbol; }
    const next = findNextValue(integerValue);
    console.log(romans[next].value);
    if (integerValue === romans[next].value - romans[next - 2].value) {
        return romans[next - 2].symbol + romans[next].symbol;
    }



    return retVal;
};

const findNextValue = (a) => {
    for (let i = 0; i < len; i++) {
        if (romans[i].value > a) { return i; }
    }
    return 0;
}
const romans = [{ value: 0, symbol: 'nulla' }, { value: 1, symbol: 'I' },
{ value: 5, symbol: 'V' }, { value: 10, symbol: 'X' },];

let len = romans.length - 1;



module.exports = {
    roman: roman

};