export function validEmail(value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

export function containsUpperCase(value) {
    const upperCase = /^.*(?=.*[A-Z]).*$/;
    return upperCase.test(value);
}




export function maxLength5(value) {
    const length = /^.*(?=.{5,}).*$/;
    return length.test(value);
}


export function containsLetter(value) {
    const letter = /^.*(?=.*[a-zA-Z]).*$/;
    return letter.test(value);
}

export function containsDigit(value) {
    const digit = /^.*(?=.*\d).*$/;
    return digit.test(value);
}

export function containsSpecialCharacter(value) {
    const specialCharacter = /^.*(?=.*[!#$%&? "]).*$/;
    return specialCharacter.test(value);
}