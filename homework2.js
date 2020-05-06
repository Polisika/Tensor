'use strict';

console.log("Первый массив со 100 не повторяющимися цифрами");
const arr1 = fillArrayRand(100);
console.log(arr1);

console.log("Второй массив, 'перевертыш' первого");
if (arr1 === null)
{
    console.log("Неверно задан первый массив");
    stop();
}
const arr2 = [...arr1].reverse();
console.log(arr2);

console.log("Вычли из первого массива второй");
const arr3 = unionArrays(arr1, arr2);
console.log(arr3);

console.log("Среднее арифметическое в массиве");
const avrg = mean(arr3);
console.log(avrg);

/**
 * Генерирует массив длинной len 
 * со случайными неповторяющимися числами от 0 до len.
 * @params {Array} first
 * @params {Array} second
 *
 * @returns (Array)
 */
function fillArrayRand (len)
{
    // Проверка на валидность входных данных
    if (isNaN(parseInt(len, 10)))
    {
        console.log("Неверный аргумент fillArrayRand");
        return null;
    }

    // Инициализируем массив
    let res = [];
    res.length = parseInt(len, 10);

    // Заполняем массив от 0 до len
    res = [...res.keys()];

    // Фукнция возвращает случайное число от -0.5 до 0.5
    const comparator = function() {
        return Math.random() - 0.5;
    };
    // Перемешиваем числа случайным образом
    res.sort(comparator);

    return res;
}

/**
 * Поэлементно вычитает из массива first массив second.
 * @params {Array} first
 * @params {Array} second
 * 
 * @returns (Array)
 */
function unionArrays (first, second)
{
    if (first === null) {
        console.log("Первый массив задан неверно");
        return null;
    }
    if (second === null) {
        console.log("Второй массив задан неверно")
        return null;
    }
    if (first.length !== second.length)
    {
        console.log("Размеры исходных массивов не равны");
        return null;
    }

    return first.map(function(item, index) {
        return item - second[index];
    });
}

/**
 * Возвращает среднее арифметическое элементов массива.
 * @params {Array} arr
 *
 * @returns (Number)
 */
function mean(arr) {
    if (arr.length === 0) return NaN;
    return arr.reduce(function(summ, item) {
        return summ + item;
    })/arr.length;
}
