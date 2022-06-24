import { useSelector } from "react-redux";

// test('test return method methodMgTest', () => {
//     const methodMgTest = useSelector(state => state.methodMgTest);
//
//     expect(methodMgTest).toBe(null) // сравнивает результат
// });
describe('less number case', () => { // для объеденения тестовых кейсов
    test('test number', () => {
        expect(5).toBe(5) // результат должен быть равен
        expect(5).toBeGreaterThan(4) // результат должен быть больше
        expect(5).toBeGreaterThanOrEqual(4) // результат должен быть равен или больше
        expect(5).toBeLessThan(6) // результат должен быть меньше
        expect(5).toBeLessThanOrEqual(6) // результат должен быть равен или меньше
        expect(0.1 + 0.2).toBeCloseTo(0.3) // результат должен быть близок. Не получится вравнить: 0.30000000000000004 === 0.3 // false
    });
});

test('test nativeNull', () => {
    expect(undefined).toBeFalsy() // любое false значение
    expect(null).toBeDefined() // значение должно быть определено
    expect(undefined).not.toBeDefined() // not диаметрально меняющее значение метода
});

describe('', () => {
    class CTest {
        compact(arr) {
            return arr.filter(item => item);
        }
    };

    let Ctest, aFull, aShort;
    beforeEach(() => { // запускает скрипт перед каждым тестом
        Ctest = new CTest();
        aFull = ['', 'hello', false, true, null, undefined];
        aShort = ['hello', true];
    })
    test('match', () => {

        expect(Ctest.compact(aFull)).toEqual(aShort); // для сравнеия более сложных значений
        expect(Ctest.compact(aFull)).toContain(true); // что в себе должен содержать массив
        expect(aFull).toBeInstanceOf(Array) // проверяет объекты

    });
});
