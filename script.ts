const URL_PARTE_PRIMARIA = "https://viacep.com.br/ws/";

const URL_PARTE_SECUNDARIA = "/json/";

let Resultado_Rua = (document.querySelector("#Resposta_Rua") as HTMLInputElement)
let Resultado_Bairro = (document.querySelector("#Resposta_Bairro") as HTMLInputElement)
let Resultado_Cidade = (document.querySelector("#Resposta_Cidade") as HTMLInputElement)
let Resultado_Estado = (document.querySelector("#Resposta_Estado") as HTMLInputElement)

function LimpaDados(){

      Resultado_Rua.innerHTML = '';
   Resultado_Bairro.innerHTML = '';
   Resultado_Cidade.innerHTML = '';
   Resultado_Estado.innerHTML = '';
}

async function PesquisaCEP() {

    const CEP = (document.querySelector("#Campo_CEP") as HTMLInputElement).value;

   if(CEP){

    const IniciaRequisição = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    const Response = await IniciaRequisição.json();
    const DadosLocalização = JSON.parse(JSON.stringify(Response))

    if(DadosLocalização){
        console.log(DadosLocalização);
           Resultado_Rua.innerHTML = DadosLocalização.logradouro;
            Resultado_Bairro.innerHTML = DadosLocalização.bairro;
            Resultado_Cidade.innerHTML = DadosLocalização.localidade;
            Resultado_Estado.innerHTML = DadosLocalização.uf;
    }

   }else{
    LimpaDados()
   }



}
