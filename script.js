// complete the given function

function palindrome(str){
	let Str = "";
	for(let i = 0; i < str.length;i++){
		if(str.charAt(i) === ' '){
			continue;
		}
		Str = Str + str.charAt(i);
	}
	let revStr = Str.split('').reverse().join('')
	console.log(revStr);
	if(Str === revStr){
	    return true;
	}else{
	    return false;
	}
}
module.exports = palindrome
