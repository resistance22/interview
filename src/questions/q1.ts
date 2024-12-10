/**
 *
 * A function for counting characters
 * @export
 * @param {string} input
 * @return {*}  {Record<string, number>}
 *
 * @example
 *
 * countCharacters("aabbcc"): {"a": 2, "b": 2, "c": 2}
 */
// 'aaabbcddeXeXffffGGGGG';
export function countCharacters(input: string): Record<string, number> {
	let res: Record<string, number> = {};
	for (let i = 0; i < input.length; i++) {
		if (input[i] in res) {
			res[input[i]] += 1;
		} else {
			res[input[i]] = 1;
		}
	}
	return res;
}

// countCharacters('aaabbcddeXeXffffGGGGG');
