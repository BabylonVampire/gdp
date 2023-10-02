/**
 * Функция, которая принимает регулярное выражение и возвращает массив всех символов, попадающих под это регулярное выражение
 * @param regex - регулярное выражение, которое нужно проверить на соответствие символам
 * @returns массив строк, содержащих все символы из unicode, которые соответствуют регулярному выражению
 * @example
 * // Возвращает массив из трех символов: 'a', 'b' и 'c'
 * matchAllChars(/[a-c]/);
 * @example
 * // Возвращает массив из двух символов: '😀' и '😁'
 * matchAllChars(/\u{1F600}|\u{1F601}/u);
 */

export const regExpToArray = (regex: RegExp): string[] => {
	let result: string[] = [];
	let char: string;
	for (let i = 0; i <= 0x10ffff; i++) {
		char = String.fromCodePoint(i);
		if (regex.test(char)) {
			result.push(char);
		}
	}
	return result;
};
