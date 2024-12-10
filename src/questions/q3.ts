/**
 *
 * Check if a string is palindrome
 * @export
 * @param {string} input
 * @return {*}  {boolean}
 *
 * @example
 *
 * isPalindrome("madam"): true
 * isPalindrome("hello"): false
 */
export function isPalindrome(input: string): boolean {
	// throw new Error('Not Implemented!')
	for (let i = input.length - 1; i > 0; i--) {
		if (!(input[input.length - 1 - i] === input[i])) {
			return false;
		}
	}
	return true;
}
