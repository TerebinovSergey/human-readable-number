module.exports = function toReadable (number) {
    let result = '';
    let count = 0;
    if (number >= 100) {
        count = Math.floor(number / 100);
        result = `${getDigit(count)} hundred `;
        number = number - count * 100;
        if (number == 0) return result.trim();
    }
   
    if (number < 20) {
        return result + getDigit(number);     
    }
    
    count = Math.floor(number / 10) * 10;
    result += getDigit(count);
    number = number - count;
    
    if (number > 0) {
        return `${result} ${getDigit(number)}`;   
    }
    
    return result;
}

function getDigit(number) {
    
    if (number < 20) {
        switch (number) {
            case 0:
                return 'zero';
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 10:
                return 'ten';
            case 11:
                return 'eleven';
            case 12:
                return 'twelve';
            case 13:
                return 'thirteen';
            case 14:
                return 'fourteen';
            case 15:
                return 'fifteen';
            case 16:
                return 'sixteen';
            case 17:
                return 'seventeen';
            case 18:
                return 'eighteen';
            case 19:
                return 'nineteen';
            default:
                return null;
        }
    } else {
        switch (number) {
            case 20:
                return 'twenty';
            case 30:
                return 'thirty';
            case 40:
                return 'forty';
            case 50:
                return 'fifty';
            case 60:
                return 'sixty';
            case 70:
                return 'seventy';
            case 80:
                return 'eighty';
            case 90:
                return 'ninety';
            default:
                return null;
        }
    }
}
