document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" && 
      document.getElementById("email").value != "" &&
      document.getElementById("telefone").value != ""){
        alert("Prontinho! Você receberá as novidades por email.")
  }else{
        alert("Por favor, preenchia os campos nome, email e telefone!")
  }
}




//dequemviráoevento.addEventListener("evento", oquedevefazer)
//function nome da função(){
        //código que deve ser executado
//}
//se os campos de nome e email estiverem preenchidos
  //envie os dados
//senão
  //peça a usúria que preencha os campos nome e email