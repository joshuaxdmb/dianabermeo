//Contact Form in PHP
const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e) => {
  console.log(e);
  e.preventDefault();
  const params = {
    name : document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value} 

    if(params.name!=='' && params.email!=='' && params.message !==''){
    emailjs.send("service_900f488","template_vvldibn",params).then((res)=>{
    form.reset();
    document.getElementById("contact-title").innerHTML="Mensaje enviado!"
  return false;
})}
}
