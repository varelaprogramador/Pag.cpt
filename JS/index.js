let isValidatyEmail=false;
const infoForm=document.getElementById("info-form");
const inputEmail=document.getElementById("input-email");
/*scroll proxima seçao*/
document.getElementById("btn-scroll").addEventListener("click", function() {
    document.getElementById("container-precos").scrollIntoView({
      behavior: "smooth"
    });
  });


/* form personalizado*/
  function mensagemForm(){
    inputEmail.style.border="1px solid transparent";
    infoForm.style.color="black";
   infoForm.innerHTML="Aguardando verificação...";

   if(isValidatyEmail){
   setTimeout(function(){
   infoForm.innerHTML="Recebemos seu e-mail  com sucesso!<br> verifique seu e-mail";
   infoForm.style.color="rgb(0 133 0)";
   infoForm.style.fontWeight="600";
   infoForm.style.textAlign="center";
   },5000);
}else{
    setTimeout(function(){
      
            inputEmail.style.border="2px solid #bd1212";
     
        infoForm.innerHTML="Email Inválido!!";
        infoForm.style.color="rgb(255 0 0)";
        infoForm.style.fontWeight="600";
        infoForm.style.textAlign="center";
        },5000);

}
}



function validacaoEmail(field) {
    let usuario = field.value.substring(0, field.value.indexOf("@"));
    let dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            isValidatyEmail=true;     
            
    }
    else{
        isValidatyEmail=false;     
    }
    mensagemForm();
    }