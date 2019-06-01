/*jshint -W030 */
let MyLib = require('./my_lib');
let roman = MyLib.arabicToRomanNumbers;
let arabic = MyLib.romanToArabicNumbers;

let expect = require('chai').expect;
var err = new TypeError('Illegal salmon!');
err.code = 42;
var badFn = function () { throw err; };

describe('MyLib test', () => {
    it('has a module', () => {
        expect(MyLib).to.be.ok;
    });

    describe('roman', () => {
        it('novalue is nulla', function () {
            expect(roman()).to.equal('nulla');
        });
        
        it('-1 is I', function () {
            expect(roman(-1)).to.equal('-I');
        });
        
        it('roman 0 is nulla', function () {
            expect(roman(0)).to.equal('nulla');
        });
        it('roman 1 is I', function () {
            expect(roman(1)).to.equal('I');
        });
        it('roman 2 is II', function () {
            expect(roman(2)).to.equal('II');
        });
        it('roman 3 is III', function () {
            expect(roman(3)).to.equal('III');
        });
        it('roman 4 is IV', function () {
            expect(roman(4)).to.equal('IV');
        });
        it('roman 5 is V', function () {
            expect(roman(5)).to.equal('V');
        });
        it('roman 6 is VI', function () {
            expect(roman(6)).to.equal('VI');
        });
        it('roman 7 is VII', function () {
            expect(roman(7)).to.equal('VII');
        });
        it('roman 8 is VIII', function () {
            expect(roman(8)).to.equal('VIII');
        });
        it('roman 9 is IX', function () {
            expect(roman(9)).to.equal('IX');
        });
        it('roman 10 is X', function () {
            expect(roman(10)).to.equal('X');
        });
        it('roman 11 is XI', function () {
            expect(roman(11)).to.equal('XI');
        });
        it('roman 14 is XIV', function () {
            expect(roman(14)).to.equal('XIV');
        }); 
        it('roman 15 is XV', function () {
            expect(roman(15)).to.equal('XV');
        }); 
        it('roman 18 is XVIII', function () {
            expect(roman(18)).to.equal('XVIII');
        });
        it('roman 19 is XIX', function () {
            expect(roman(19)).to.equal('XIX');
        });
        it('roman 20 is XX', function () {
            expect(roman(20)).to.equal('XX');
        });
        it('roman 26 is XXVI', function () {
            expect(roman(26)).to.equal('XXVI');
        });
        it('roman 31 is XXXI', function () {
            expect(roman(31)).to.equal('XXXI');
        });
        it('roman 39 is XXXIX', function () {
            expect(roman(39)).to.equal('XXXIX');
        });
        it('roman 40 is XL', function () {
            expect(roman(40)).to.equal('XL');
        });

        it('roman 50 is L', function () {
            expect(roman(50)).to.equal('L');
        });

        it('roman 88 is LXXXVIII', function () {
            expect(roman(88)).to.equal('LXXXVIII');
        });
        it('roman 98 is XCVIII', function () {
            expect(roman(98)).to.equal('XCVIII');
        });
        it('roman 449 is CDXLIX', function () {
            expect(roman(449)).to.equal('CDXLIX');
        });
        it('roman 894 is DCCCXCIV', function () {
            expect(roman(894)).to.equal('DCCCXCIV');
        });
        it('roman 999 is CMXCIX', function () {
            expect(roman(999)).to.equal('CMXCIX');
        });
        it('roman 999 is CMXCIX', function () {
            expect(roman(999)).to.equal('CMXCIX');
        });
        
        it('roman 2019 is MMXIX', function () {
            expect(roman(2019)).to.equal('MMXIX');
        });
        
        it('roman 4999 is MMMMCMXCIX', function () {
            expect(roman(4999)).to.equal('MMMMCMXCIX');
        });
        it('roman 5894 is MMMMMDCCCXCIV', function () {
            expect(roman(5894)).to.equal('MMMMMDCCCXCIV');
        });  
        it('ab is error', function () {
            expect(()=>roman('ab')).to.throw('ab is not a valid number!');
        });  

    });

    describe('arabic', () => {
        it('novalue is 0', () =>{
            expect(arabic()).to.be.eq(0);
        });
        it('novalue is 0', () =>{
            expect(arabic('')).to.be.eq(0);
        });
        it('novalue is 0', () =>{
            expect(arabic('      ')).to.be.eq(0);
        });
        it('I is 1', () =>{
            expect(arabic('I')).to.be.eq(1);
        });
        
        it('-IV is -4', () =>{
            expect(arabic('-IV')).to.be.eq(-4);
        });

        it('II is 2', () =>{
            expect(arabic('II')).to.be.eq(2);
        });
        it('III is 3', () =>{
            expect(arabic('III')).to.be.eq(3);
        });
        it('IV is 4', () =>{
            expect(arabic('IV')).to.be.eq(4);
        });
        it('VI is 6', () =>{
            expect(arabic('VI')).to.be.eq(6);
        });
        it('MMMMMDCCCXCIV is 5894', () =>{
            expect(arabic('MMMMMDCCCXCIV')).to.be.eq(5894);
        });
        it('LXXXVIII is 88', () =>{
            expect(arabic('LXXXVIII')).to.be.eq(88);
        });
        it('XLIX is 49', () =>{
            expect(arabic('XLIX')).to.be.eq(49);
        });
        
        it('XLIXBB is not a valid Roman numeral', () =>{
            expect(()=>arabic('XLIXBB')).to.throw('XLIXBB is not a valid Roman numeral');
        });
        it('-B is not a valid Roman numeral', () =>{
            expect(()=>arabic('-B')).to.throw('-B is not a valid Roman numeral');
        });
        

    });

});