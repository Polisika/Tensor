console.log("Первый массив со 100 не повторяющимися цифрами");
const arr1 = fillArrayRand(100);
console.log(arr1);

console.log("Второй массив, 'перевертыш' первого");
const arr2 = [...arr1].reverse();
console.log(arr2);

console.log("Вычли из первого массива второй");
const arr3 = unionArrays(arr1, arr2);
console.log(arr3);

console.log("Среднее арифметическое в массиве");
const avrg = mean(arr3);
console.log(avrg);

function fillArrayRand (len)
{
    // Инициализируем массив
    let res = [];
    res.length = parseInt(len, 10);

    // Заполняем массив от 0 до len
    res = [...res.keys()];

    // Фукнция возвращает случайное число от -0.5 до 0.5
    comparator = function() {
        return Math.random() - 0.5;
    };
    // Перемешиваем числа случайным образом
    res.sort(comparator);

    return res;
}

function unionArrays (first, second)
{
    return first.map(function(item, index) {
        return item - second[index];
    });
}

function mean(arr) {

    return arr.reduce(function(summ, item) {
        return summ + item;
    })/arr.length;
}