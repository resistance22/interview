/**
 * Find number in a sorted array
 *
 * @export
 * @param {number} candidate
 * @param {number[]} numbers
 * @return {*}  {(number | null)}
 */
export function search(candidate: number, numbers: number[]): number | null {
	const res = numbers.findIndex((val) => val === candidate);
	return res === -1 ? null : res;
	// throw new Error('Not Implemented!')
}
