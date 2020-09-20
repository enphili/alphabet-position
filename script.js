const getIndexs = str => {
	const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщэюя';
	return str.toLowerCase().split('').filter(i => alphabet.indexOf(i) > -1).map(i => alphabet.indexOf(i) + 1).join(' ');
};

console.log(getIndexs('Или же  Диапа!зоны 2символов 33 нас языке,  [а-я] для')); // '10 13 10 8 6 5 10 1 17 1 9 16 15 19 10 14 3 16 13 16 3 15 1 19 30 9 12 6 1 30 5 13 30'
