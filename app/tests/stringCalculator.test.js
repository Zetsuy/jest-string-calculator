import { stringCalculator } from '../js/stringCalculator';


describe('String Calculator', () => {

    let Calculator = new stringCalculator;

    test('for string empty it returns 0', () => {    

    expect(Calculator.add("")).toBe(0);

    });

});