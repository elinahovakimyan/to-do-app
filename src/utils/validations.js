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

export const loginValidation = [
    {validator: validEmail, msg: 'Email is invalid'},
    {validator: containsUpperCase, msg: "Email must contain at least one upper case."}
]

export const passwordValidation = [
    {validator: maxLength5, msg: 'Password must be at least 5 characters.'},
    {validator: containsLetter, msg: "Password must contain at least one letter."},
    {validator: containsDigit, msg: 'Password must contain at least one digit.'},
    {validator: containsSpecialCharacter, msg: "Password must contain at least one special character."}
]