# Validator

This is simple validation library used for validating form inputs.
Currently Supported Validations are:

* `hasValue`
* `hasMinLength`
* `hasMaxLength`
* `hasLowerCase`
* `hasUpperCase`
* `hasNumber`
* `hasSpecialChar`
* `check`

## Usage

Add the CDN link of the library to your HTML file.

```HTML
<script src="https://cdn.jsdelivr.net/gh/suryaumapathy2812/validator__js/validator.js"></script>
```

Now that the library is loaded, you can use it to validate your form inputs.

```JS

const inputElement = document.querySelector('input');
const {value} = inputElement;

Validator.hasValue(value);
Validator.hasMinLength(value, 5);
Validator.hasMaxLength(value, 10);
Validator.hasLowerCase(value);
Validator.hasUpperCase(value);
Validator.hasNumber(value);
Validator.hasSpecialChar(value);
```

To check if an input field value is valid based on multiple conditions, use `check` method.

```JS
Validator.check(inputElement, {
    minLength: 3,
    maxLength: 20,
    includeUpperCase: true,
    includeLowerCase: true,
    includeNumbers: true,
    includeSpecialChars: true
});
```
