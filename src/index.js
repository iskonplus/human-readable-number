module.exports = function toReadable (number) {
    const single_digits = ["zero", "one", "two",  "three", "four","five", "six", "seven", "eight", "nine"]; 
    const two_digits = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens_multiple = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const ten_power = ["hundred", "thousand", "million"];
    const strNumber = number.toString();
    const hundred = Math.trunc(number / 100);
    const newNumber = String(number%100);
    if(hundred < 1) {
      if(strNumber.length < 2) {
        return single_digits[number];
      } else if(strNumber.length == 2 && strNumber[0] == 1) {
        return two_digits[number-10];
      } else if(strNumber.length == 2 && strNumber[0] != 1 && strNumber[1] !=0) {
        return tens_multiple[+strNumber[0]]+ ' ' +single_digits[number%10];
      }  else if(strNumber.length == 2 && strNumber[0] != 1 && strNumber[1] ==0) {
        return tens_multiple[+strNumber[0]];
      };
    } else {
      const strHundred = single_digits[hundred] +' ' + ten_power[0];
      if(number%100 === 0) {
        return strHundred;      
      } else if(newNumber.length < 2) {
        return strHundred + ' ' +single_digits[+newNumber];
      } else if(newNumber.length == 2 && newNumber[0] == 1) {
        return strHundred + ' ' +two_digits[+newNumber-10];
      } else if(newNumber.length == 2 && newNumber[0] != 1 && newNumber[1] !=0) {
        return strHundred + ' ' +tens_multiple[+newNumber[0]]+ ' ' +single_digits[+newNumber%10];
      }  else if(newNumber.length == 2 && newNumber[0] != 1 && newNumber[1] ==0) {
        return strHundred + ' ' +tens_multiple[+newNumber[0]];
      };

    }

   
    
}