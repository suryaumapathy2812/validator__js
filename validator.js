class Validator {

    /**
     * Returns true if the string is not empty
     * @param str - The string to be tested.
     * @returns The `hasValue` function returns a boolean value.
     */
    static hasValue(str) {
        return str.trim().length > 0;
    }

    /**
     * Returns true if the value's length is greater than or equal to the specified minimum length.
     * @param value - The value to be tested.
     * @param minLength - The minimum length of the string.
     * @returns The result of the function call.
     */
    static hasMinLength(value, minLength) {
        return value.length >= minLength;
    }

    /**
     * Returns true if the value is less than or equal to the maxLength
     * @param value - The value to be tested.
     * @param maxLength - The maximum length of the string.
     * @returns The result of the function call.
     */
    static hasMaxLength(value, maxLength) {
        return value.length <= maxLength;
    }

    /**
     * Returns true if the string contains a lowercase letter
     * @param str - The string to check.
     * @returns The result of the test.
     */
    static hasLowerCase(str) {
        return (/[a-z]/.test(str));
    }

    /**
     * Returns true if the string contains an upper case letter
     * @param str - The string to check.
     * @returns The result of the test.
     */
    static hasUpperCase(str) {
        return (/[A-Z]/.test(str));
    }

    /**
     * *Returns* `true` if the given value contains a number
     * @param value - The value to be tested.
     * @returns A boolean value.
     */
    static hasNumber(value) {
        return !/\d/.test(value);
    }

    /**
     * Returns true if the string contains special characters
     * @param value - The value to be checked.
     * @returns The result of the test.
     */
    static hasSpecialChar(value) {
        return !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
    }

    /**
     * Check if the value of the input element meets the requirements of the validations object
     * @param elem - The element to validate.
     * @param validations - The validations object.
     * @returns The return value is a boolean value. If the value is valid, the return value is true.
     * If the value is invalid, the return value is false.
     */
    static check(elem, validations) {
        const value = elem.value.trim();

        // check if value is present
        if (this.hasValue(value)) {
            console.error("Value is empty");
            return false;
        }

        const { minLength, maxLength } = validations;

        // check if value meets minimum length
        if (minLength && this.hasMinLength(value, minLength)) {
            console.error(`Value must be at least ${minLength} characters long`);
            return false;
        }

        // check if value meets maximum length
        if (maxLength && this.hasMaxLength(value, maxLength)) {
            console.error(`Value must be at most ${maxLength} characters long`);
            return false;
        }

        const { includeUpperCase, includeLowerCase } = validations;

        // check if value includes upper case
        if (includeUpperCase && !this.hasUpperCase(value)) {
            console.error("Value must include upper case");
            return false;
        }

        // check if value includes lower case
        if (includeLowerCase && !this.hasLowerCase(value)) {
            console.error("Value must include lower case");
            return false;
        }

        const { includeNumbers, includeSpecialChars } = validations;

        // check if value includes numbers
        if (includeNumbers && Validator.hasNumber(value)) {
            console.error('Value must include numbers');
            return false;
        }

        // check if value includes special characters
        if (includeSpecialChars && this.hasSpecialChar(value)) {
            console.error('Value must include special characters');
            return false;
        }

        return true;
    }

}
