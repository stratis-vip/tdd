/*jshint -W030 */
let MyLib = require('./my_lib');
let roman = MyLib.roman;

let expect = require('chai').expect;

describe('MyLib test', () => {
    it('has a module', () => {
        expect(MyLib).to.be.ok;
    });

    describe('roman', () => {
        it('novalue is nulla', function () {
            expect(roman()).to.equal('nulla');
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
        
    });

});