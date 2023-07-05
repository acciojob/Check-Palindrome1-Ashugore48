function palindrome(str){
    let ch="" ;
	str=str.toLowerCase();
	for (let i = (str.length-1); i >=0 ; i--) {
		ch+=str[i];
	
	}
	if(ch==str){
		return true;
	}else{
		return false;
	}
}
module.exports = palindrome