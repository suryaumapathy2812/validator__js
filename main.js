function submitHandler(event) {
    event.preventDefault();

    const usernameElem = document.getElementById('username');
    const passwordElem = document.getElementById('password');

    // check username and password, if it has value
    const usernameHasValue = Validator.hasValue(usernameElem.value);
    const passwordHasValue = Validator.hasValue(passwordElem.value);


    // check if username & password meets minimum length
    const usernameMinLength = Validator.hasMinLength(usernameElem.value, 3);
    const passwordMinLength = Validator.hasMinLength(passwordElem.value, 8);


    //check if username & password meets maximum length
    const usernameMaxLength = Validator.hasMaxLength(usernameElem.value, 20);
    const passwordMaxLength = Validator.hasMaxLength(passwordElem.value, 20);


    // check if username & password includes lower case
    const usernameHasLowerCase = Validator.hasLowerCase(usernameElem.value);
    const passwordHasLowerCase = Validator.hasLowerCase(passwordElem.value);


    // check if username & password includes upper case
    const usernameHasUpperCase = Validator.hasUpperCase(usernameElem.value);
    const passwordHasUpperCase = Validator.hasUpperCase(passwordElem.value);


    // check if username & password includes numbers
    const usernameHasNumbers = Validator.hasNumber(usernameElem.value);
    const passwordHasNumbers = Validator.hasNumber(passwordElem.value);


    // check if username & password includes special characters
    const usernameHasSpecialChars = Validator.hasSpecialChar(usernameElem.value);
    const passwordHasSpecialChars = Validator.hasSpecialChar(passwordElem.value);


    // check if username & password meets all requirements
    const usernameValidation = Validator.check(usernameElem, {
        minLength: 3,
        maxLength: 20,
        includeUpperCase: true,
        includeLowerCase: true,
        includeNumbers: true,
        includeSpecialChars: true
    });

    const passwordValidation = Validator.check(passwordElem, {
        minLength: 8,
        maxLength: 20,
        includeUpperCase: true,
        includeLowerCase: true,
        includeNumbers: true,
        includeSpecialChars: true
    });

}