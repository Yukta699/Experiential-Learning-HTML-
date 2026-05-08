const form=document.getElementById('contactForm');

if(form){
form.addEventListener('submit',e=>{
e.preventDefault();

let name=document.getElementById('name').value.trim();
let email=document.getElementById('email').value.trim();
let subject=document.getElementById('subject').value.trim();
let message=document.getElementById('message').value.trim();
let msg=document.getElementById('formMsg');

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(name===""||email===""||subject===""||message===""){
msg.innerHTML='<div class="alert alert-danger">Please fill all fields.</div>';
return;
}

if(!email.match(emailPattern)){
msg.innerHTML='<div class="alert alert-warning">Enter valid email address.</div>';
return;
}

msg.innerHTML='<div class="alert alert-success">Message sent successfully.</div>';
form.reset();
});
}