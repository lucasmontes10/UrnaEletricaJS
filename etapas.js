//CRIAÇÃO DO MEU OBJETO, O BANCO DOS PRESIDENTES
var modificar = document.querySelector(".informacao-final");
let etapas = [
    {
        titulo: "PRESIDENTE",
        numeros: 4,
        candidatos: [
            {
                numero: '1111',
                nome: "Fulaninho",
                partido: "ABC", 
                fotos:[
                 {url: '38111.jpg', legenda:'Presidente', small: false},
                 {url: '99.jpg', legenda:'Vice-Presidente', small: true}
                ]
            },
            {
                numero: '2222',
                nome: "Lukita",
                partido: "BBC",
                fotos:[
                    {url:'77222.jpg', legenda:"Presidante", small: false},
                    {url:'99_2.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
        ]
    }
]

// Função para escrever as informações a respeito do candidato
function escreveInformacao(candidato){
    if(candidato.numero == "1111"){
        modificar.innerHTML = "<iframe src='https://pt.wikipedia.org/wiki/Jair_Bolsonaro' frameborder='5px'></iframe>";
    }
}