const encode = (str) => {
	var input     = ' ()"\'=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]&|!';
	var output    = '{}[]&|!NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm5678901234 ()"\'={}[]&|!';
	var index     = x => input.indexOf(x);
	var translate = x => index(x) > -1 ? output[index(x)] : x;
	return str.split('').map(translate).join('');
};

const decode = (str) => {
	var input     = '{}[]&|!NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm5678901234 ()"\'=';
	var output    = ' ()"\'=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789{}[]&|!';
	var index     = x => input.indexOf(x);
	var translate = x => index(x) > -1 ? output[index(x)] : x;
	return str.split('').map(translate).join('');
};


module.exports = {
	encode,
	decode,
}