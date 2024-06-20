/**
 * https://www.w3.org/TR/webauthn-2/#base64url-encoding
 * https://stackoverflow.com/questions/55389211/string-based-data-encoding-base64-vs-base64url
 */

/**
 * Convert base64url to ArrayBuffer
 * @param {string} string
 */
export function base64url_to_buffer(string) {
	// convert from base64URL to base64
	const base64 = string.replace(/-/g, '+').replace(/_/g, '/');
	/**
		* pad with '=' until it's a multiple of four
		* (4 - (85 % 4 = 1) = 3) % 4 = 3 padding
		* (4 - (86 % 4 = 2) = 2) % 4 = 2 padding
		* (4 - (87 % 4 = 3) = 1) % 4 = 1 padding
		* (4 - (88 % 4 = 0) = 4) % 4 = 0 padding
		*/
	const padLength = (4 - (base64.length % 4)) % 4;
	const padded = base64.padEnd(base64.length + padLength, '=');
	const binary = atob(padded);
	const buffer = new ArrayBuffer(binary.length);
	const bytes = new Uint8Array(buffer);

	for (let i = 0; i < binary.length; i++) {
		bytes[i] = binary.charCodeAt(i);
	}

	return buffer;
}

/**
 * Convert ArrayBuffer to base64url
 * @param {ArrayBuffer} buffer
 */
export function buffer_to_base64url(buffer) {
	const bytes = new Uint8Array(buffer);
	let str = '';

	for (const charCode of bytes) {
		str += String.fromCharCode(charCode);
	}

	const base64String = btoa(str);

	return base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
