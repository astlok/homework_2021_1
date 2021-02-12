'use strict'

/** 
  *  Функция объединяет свойства объектов
  *  @param {object} args массив объектов переданный в качестве параметров
  *  @returns {object} возвращает результирующий объект
  *  @example 
  *
  *  zip({name: 'Pavel', age 42}, {town: 'Moscow', car: 'Volvo'});
  */

const zip = (...args) => {
	const result = {};
	args.forEach((item, index, array) => {
		if ({}.toString.call(item).slice(8, -1) != 'Object') {
			return;
		}
		Object.keys(item).forEach((key) => {
			if (!(key in result)) {
				result[key] = item[key];
			}
		});
	});
 	return result;
};
