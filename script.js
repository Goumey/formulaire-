function messageErreur(x,z,w){
    x.style.border=" 2px solid  #e74c3c";
    z.textContent=w;
    z.style.color="#e74c3c"
  
  }
  function messageValidation(y) {
      y.style.border=" 1px solid  #2ecc71";
      
  }
  function cacherMessage(z){
      z.textContent="";
  }
let form =document.getElementById("form");
form.addEventListener("submit",function fonction (event){
event.preventDefault();
let username=document.getElementById("username");
let email=document.getElementById("email");
let password=document.getElementById("password");
 let password2=document.getElementById("password2");
//   selection des small
let usernamemessage=document.getElementById("usernamemessage");
let emailmessage=document.getElementById("emailmessage");
let passwordmessage=document.getElementById("passwordmessage");
let password2message=document.getElementById("password2message");


if( username.value=="" || username.value.lenght<3 ){
    messageErreur(username,usernamemessage,"le username doit avoir minimum 3 caractére");
   

}
else if(username.value.lenght>15) {
    messageErreur(username,usernamemessage,"le username doit avoir maximun 15 caractére");
}
else{
    messageValidation(username)
    cacherMessage(usernamemessage);
}


const expresion = /^(([^<>()[].,;:s@]+(.[^<>()[].,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
console.log(expresion.test(email.value))
if(expresion.test(email.value)){
    messageValidation(email)
    cacherMessage(emailmessage);
}
else{
    messageErreur(email,emailmessage,"Email incorrect!");
}
if(password.value=="" || password.value.lenght<8){
    messageErreur(password,passwordmessage,"le mot de passe est incorrect!");
 }
 else if(password.value.lenght>15) {
    messageErreur(username,passwordmessage,"le pssword doit avoir maximun 20 caractére");
}
else{
    messageValidation(password)
    cacherMessage(passwordmessage);
}
if(password2.value !== password.value || password2.value==""){
    messageErreur(password2,password2message,"le mot n'est pas le meme!"); 
}
else{
    messageValidation(password2)
    cacherMessage(password2message);
}
});

