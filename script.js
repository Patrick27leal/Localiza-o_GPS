"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const URL_PARTE_PRIMARIA = "https://viacep.com.br/ws/";
const URL_PARTE_SECUNDARIA = "/json/";
let Resultado_Rua = document.querySelector("#Resposta_Rua");
let Resultado_Bairro = document.querySelector("#Resposta_Bairro");
let Resultado_Cidade = document.querySelector("#Resposta_Cidade");
let Resultado_Estado = document.querySelector("#Resposta_Estado");
function LimpaDados() {
    Resultado_Rua.innerHTML = '';
    Resultado_Bairro.innerHTML = '';
    Resultado_Cidade.innerHTML = '';
    Resultado_Estado.innerHTML = '';
}
function PesquisaCEP() {
    return __awaiter(this, void 0, void 0, function* () {
        const CEP = document.querySelector("#Campo_CEP").value;
        if (CEP) {
            const IniciaRequisição = yield fetch(`https://viacep.com.br/ws/${CEP}/json/`);
            const Response = yield IniciaRequisição.json();
            const DadosLocalização = JSON.parse(JSON.stringify(Response));
            if (DadosLocalização) {
                console.log(DadosLocalização);
                Resultado_Rua.innerHTML = DadosLocalização.logradouro;
                Resultado_Bairro.innerHTML = DadosLocalização.bairro;
                Resultado_Cidade.innerHTML = DadosLocalização.localidade;
                Resultado_Estado.innerHTML = DadosLocalização.uf;
            }
        }
        else {
            LimpaDados();
        }
    });
}
