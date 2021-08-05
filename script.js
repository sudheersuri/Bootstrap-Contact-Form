

document.getElementById("submitform").addEventListener("click", function(){
let name = document.getElementById('contactname').value;
let email = document.getElementById('contactemail').value;
let phone = document.getElementById('contactphone').value;
let text = document.getElementById('contactmessage').value;

    alert(`${name}, ${email}, ${phone}, ${text}`);    
});

