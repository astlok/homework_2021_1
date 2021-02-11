'use strict'

/** 
  *  Функция объединяет свойства объектов
  *  @param {object} args массив объектов переданный в качестве параметров
  *  @returns {object} возвращает результирующий объект
  *  @example 
  *
  *  zip({name: 'Pavel', age 42}, {town: 'Moscow', car: 'Volvo'});
  */
  
let zip = (...args) => {
	const result = {};
	args.forEach(function(item, index, array) {
		if ({}.toString.call(item).slice(8, -1) != 'Object') {
			return;
		}
		for (let key of Object.keys(item)) {
			if (!(key in result)) {
				result[key] = item[key];
			}
		}
	});
 	return result;
};
