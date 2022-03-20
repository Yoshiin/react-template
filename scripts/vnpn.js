/*
* Validate npm package name
* From the work of https://github.com/npm/validate-npm-package-name
**/

module.exports = class Vnpn {
	static validate(name) {
		const scopedPackagePattern = new RegExp('^(?:@([^/]+?)[/])?([^/]+?)$');
		const blacklist = ['node_modules', 'favicon.ico'];
		let warnings = [];
		let errors = [];

		if (name === null) {
			errors.push('name cannot be null');
		}
		if (name === undefined) {
			errors.push('name cannot be undefined');
		}
		if (typeof name !== 'string') {
			errors.push('name must be a string');
		}
		if (!name.length) {
			errors.push('name length must be greater than zero');
		}
		if (name.match(/^\./)) {
			errors.push('name cannot start with a period');
		}
		if (name.match(/^_/)) {
			errors.push('name cannot start with an underscore');
		}
		if (name.trim() !== name) {
			errors.push('name cannot contain leading or trailing spaces');
		}
		blacklist.forEach(function (blacklistedName) {
			if (name.toLowerCase() === blacklistedName) {
				errors.push(blacklistedName + ' is a blacklisted name');
			}
		});
		if (name.length > 214) {
			warnings.push('name can no longer contain more than 214 characters');
		}
		if (name.toLowerCase() !== name) {
			warnings.push('name can no longer contain capital letters');
		}
		if (/[~'!()*]/.test(name.split('/').slice(-1)[0])) {
			warnings.push('name can no longer contain special characters ("~\'!()*")');
		}

		let result = {
			valid: errors.length === 0 && warnings.length === 0,
			errors: errors.concat(warnings),
		}
		if (!result.errors.length) delete result.errors
		return result
	}
}
