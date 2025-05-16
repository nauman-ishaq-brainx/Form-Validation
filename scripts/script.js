
function changeParagraph(id, text){
    document.getElementById(id).innerHTML = text;
}

function validatePassword(){

    let pass = document.getElementById('pass');

    // Check Lenght
    if (pass.value.length < 8){
        return 'Password should be greater than 8 characters'
    }

    //Check if password contains an alphanumeric
    let digitFound = false;
    for (let character of pass.value){
        if (character.charCodeAt(0) >=49 && character.charCodeAt(0) <= 57){
            digitFound = true;
            break
        }
    }
    if (digitFound ===  false){
        return 'An alphanumeric character is required';
    }
    //Check if password contains an uppercase letter
    let uppercaseFound = false;
    for (let character of pass.value){
        if (character.charCodeAt(0) >=65 && character.charCodeAt(0) <= 90){
            uppercaseFound = true;
            break
        }
    }
    if (uppercaseFound ===  false){
        return 'An uppercase character is required';
    }

    //Check if password contains a lowercase letter
    let lowercaseFound = false;
    for (let character of pass.value){
        if (character.charCodeAt(0) >=97 && character.charCodeAt(0) <= 122){
            lowercaseFound = true;
            break
        }
    }
    if (lowercaseFound ===  false){
        return 'A lower case character is required';
    }

    return true;
}

function handlePassword(){
    let result = validatePassword();
    if (result !== true){
        changeParagraph('passParagraph', result)
    }
    else {
        changeParagraph('passParagraph', '')
    }
}
// Match both passwords
function ValidatePassword2(){
    let pass = document.getElementById('pass');
    let pass2 = document.getElementById('pass2');
    if (pass.value == pass2.value){
        return true;
    }
    return 'Passwords do not match'
}
function handlePassword2(){
    let result = ValidatePassword2();
    if (result !== true){
        changeParagraph('passParagraph2', result)
    }
    else {
        changeParagraph('passParagraph2', '')
    }
}

// Validate Age 
function ValidateAge(){
    let age = document.getElementById('age');

    if (+age.value < 18 || +age.value >151){
        return 'Age must be between 18 and 151';
    }
    return true
}
function handleAge(){
    let result = ValidateAge();
    if (result !== true){
        changeParagraph('ageParagraph', result)
    }
    else {
        changeParagraph('ageParagraph', '')
    }
}

//Validate Contact 
function ValidateContact(){
    let contact = document.getElementById('contact');
    if (contact.value ==''){
        return true;
    }

    if (contact.value.length != 11){
        return 'Contact Number should be exactly 11 digits'
    }
    return true
}
function handleContact(){
    let result = ValidateContact();
    if (result !== true){
        changeParagraph('contactParagraph', result)
    }
    else {
        changeParagraph('contactParagraph', '')
    }
}

function handleFirstName(){
    result = validateFirstName();
    if (result !== true){
        changeParagraph('firstNameParagraph', result)
    }
    else {
        changeParagraph('firstNameParagraph', '')
    }
}

function handleLastName(){
    result = validateLastName();
    if (result !== true){
        changeParagraph('lastNameParagraph', result)
    }
    else {
        changeParagraph('lastNameParagraph', '')
    }
}

function validateFirstName(){
    let inputName = document.getElementById('first');
    if (inputName.value.length < 1){
        return 'Name should have at least 1 character'
    }
    return true;

}

function validateLastName(){
    let inputName = document.getElementById('last');
    if (inputName.value.length < 1){
        return 'Name should have at least 1 character'
    }
    return true;

}


function validateAll(){
    let funcs = [validatePassword, ValidatePassword2, ValidateAge, ValidateContact, validateFirstName, validateLastName];
    let disableButton = false;
    for (let func of funcs){
        if (func() !== true){
            disableButton = true;
            break;
        }
    }
    let btn = document.getElementById('submit-button');
    if (disableButton){
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
    }
}

// Validate Email
function validateEmail(){
    var expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emails = document.getElementById("email").value.split(',');
    if (emails.at(-1) == ''){
        emails.pop()
    }

    for (let email of emails){
        let result = expression.test(email);
        if (result !== true){
            return 'Please enter valid email addresses separated by cameras'
}
        }
    return true;
    }

function handleEmail(){
    result = validateEmail();
    if (result !== true){
        changeParagraph('emailParagraph', result)
    }
    else {
        changeParagraph('emailParagraph', '')
    }
}