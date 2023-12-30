let form = document.getElementById ('form');
let FirstName = document.getElementById ('F-name');
let LastName = document.getElementById ('L-name');
let Email = document.getElementById ('Email');
let Password = document.getElementById ('Password');

form.addEventListener ('submit', e =>{
    e.preventDefault();
    validateInputs();
})

let isEmailValid = Email =>{
    let emailcheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailcheck.test(string(Email).toLowerCase());
};


let setError = (element, message) => {
    let inputcontrol = element.parentElemt;
    const errorDisplay = inputcontrol.queryselector('.error');
    errorDisplay.innerText = message;
    inputcontrol.classlist.add('error');
    inputcontrol.classlist.remove('success')
}

let setSuccess = element =>{
    const inputcontrol = element.parentElemt;
    const errorDisplay = inputcontrol.queryselector('.error');
    errorDisplay.innerText = '';
    inputcontrol.classlist.add('success');
    inputcontrol.classlist.remove('error');

};
 const validateInputs = () =>{
    let FirstNameValue = FirstName.value.trim();
    let LastNameValue = LastName.value.trim();
    let EmailValue = Email.value.trim();
    let PasswordValue = Password.value.trim();

    if (FirstNameValue === '') {
        setError(FirstName, 'First Name is required')
    }else{
        setSuccess(FirstName)
    }
    if (LastNameValue === ''){
        setError(LastName, 'Last Name is required');
    }else{
        setSuccess(LastName)
    }
    if (EmailValue === ''){
        setError (Email, 'Enter Your Email');
    }else if (!isEmailValid(EmailValue)){
        setError(Email, 'Provide a Valid Email');
    }else{
        setSuccess(Email);
    }
    if (PasswordValue === ''){
        setError (Password, 'Provide a Password');
    }else if(PasswordValue.length < 8){
        setError(Password, 'Password Must atleast be 8 characters')
    }else{
        setSuccess(Password);
    }
    };
