/**
 * ДЗ-03 
 */

/**
 * 0. Исправь ошибки
 */
function initVal(str) {
	// Объясвляем const, так как мы не собираемся менять значения.
    const s = 'String';
    const a = 10;
    const b = true;
    const c = 'const';
}

/**
 * 1. Напиши функцию которая принимает на вход строку и преобразует ее в число
 * @param {string} str 
 * 
 * @returns (number)
 */
function stringToNumber(str) {
	return parseInt(str);
}

/**
 * 2. Функции возвращают значение val, если оно существует, иначе def
 * @param {*} val
 * @param {*} def
 * 
 * @returns val или def
 */
function checkVal1 (val, def) {
	// Согласно тестам, функция должна возвращать val если оно не равно нулю.
    if (val === 0)
    	return def;
    else
    	return val;

}

function checkVal2 (val, def) {
    // 2.2. тернарный оператор
    return val === 0 ? def : val;
}

function checkVal3 (val, def) {
    // 2.3. логическое или
    return val || def;
}

/**
 * 3. Фунция рендера
 * @param {string} title
 * @param {number} width
 * @param {number} height
 * @param {bool} isBox
 * 
 * @returns {string} строка формата 'Товар title, шириной width, высотой height, коробка' или '... не коробка'
 */
function renderItem (title, width, height, isBox) {
	// Выводим переменную, если в ней что-то есть. 
	// Если же нет, то выводим либо 0, либо пустую строку.
 	return `Товар ${title || ''}, шириной ${width || 0}, высотой ${height || 0}, ` + (isBox ? '' : 'не ') + 'коробка'; 
}

/**
 * 4. Напиши функцию oddNum с помощью цикла for
 * @param {number} max максимальное число
 * 
 * @returns {string} только не четные 1 3 5 7 9 ...max 
 */
function oddNum (max) {
	// Если число натуральное - то до него есть хотя бы одно нечетное число (если max=1, то оно само).
	let str = max > 0 ? '1' : '';
	for (let i = 3; i < max; i += 2)
		str += ' ' + i;
    return str;
}

/**
 * 5. Напиши функцию factorial рекурсивно
 * @param {number} n максимальное число для вычисления
 * 
 * @returns {number} факториал 
 */
function factorial(n) {
	// Условие выхода из рекурсии - n === 1;
    return n === 1 ? 1 : n * factorial(n-1);
}

module.exports = {
    initVal,
    stringToNumber,
    renderItem,
    checkVal1,
    checkVal2,
    checkVal3,
    oddNum,
    factorial
};
