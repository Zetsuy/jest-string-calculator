import { stringCalculator } from '../js/stringCalculator';


describe('String Calculator', () => {

    let Calculator = new stringCalculator;

    test('for string empty it returns 0', () => {    

    expect(Calculator.add("")).toBe(0);

    });

    test('for string 1 it returns 1', () => {    

        expect(Calculator.add("1")).toBe(1);
    
    });

    test('for string 1 it not returns 2', () => {    

        expect(Calculator.add("1")).not.toBe(2);
    
    });

    test('for string 1,2 it returns 3', () => {    

        expect(Calculator.add("1,2")).toBe(3);
    
    });

    test('for string 1,2,3,4,5 it returns 15', () => {    

        expect(Calculator.add("1,2,3,4,5")).toBe(15);
    
    });

    test('for string 1\n2,3 it returns 6', () => {    

        expect(Calculator.add("1\n2,3")).toBe(6);
    
    });

    test('for string //;\n1;2 it returns 3', () => {    

        expect(Calculator.add("//;\n1;2")).toBe(3);
    
    });

    test('for string -1 it returns Negatives not allowed', () => {    

        expect(() => {Calculator.add("-1");}).toThrow("Negatives not allowed -1");
    
    });

    

});