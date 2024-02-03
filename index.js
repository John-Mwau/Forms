let form = document.getElementById('form');
let FirstName = document.getElementById('F-name');
let LastName = document.getElementById('L-name');
let Email = document.getElementById('Email');
let Password = document.getElementById('Password');
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let error = document.getElementsByClassName('error');


form.addEventListener ('submit', (e)=>{
e.preventDefault();
if (FirstName.value.trim() === '' || FirstName.value.trim() == null){
    error[0].innerHTML = 'First Name Is Required';
}
else{
    error[0].innerHTML = '';
}
if (LastName.value.trim() === '' || LastName.value.trim() == null){
    error[1].innerHTML = 'Last Name Is Required';
}
else{
    error[1].innerHTML = '';
}
if(!Email.value.match(emailRegex)){
    error[2].innerHTML ='Please Eneter a Valid Email'
}
else{
    error[2].innerHTML = '';
}
if (Password.value.length <=8){
    error[3].innerHTML = 'Password Must be atleast 8 Characters'
}
else{
    error[3].innerHTML = '';
}
})