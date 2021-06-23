//CRIAÇÃO DO MEU OBJETO, O BANCO DOS PRESIDENTES
var modificar = document.querySelector(".informacao-final");
let etapas = [
    {
        titulo: "PRESIDENTE",
        numeros: 4,
        candidatos: [
            {
                numero: '1889',
                nome: "Deodoro da Fonseca",
                partido: "NENHUM", 
                fotos:[
                 {url: 'Deodoro_da_Fonseca_(1889).jpg', legenda:'Presidente', small: false, link: "https://pt.wikipedia.org/wiki/Deodoro_da_Fonseca"},
                 {url: '99.jpg', legenda:'Vice-Presidente', small: true}
                ],
            },
            {
                numero: '2222',
                nome: "Lukita",
                partido: "BBC",
                fotos:[
                    {url:'77222.jpg', legenda:"Presidante", small: false, link: "https://pt.wikipedia.org/wiki/Deodoro_da_Fonseca"},
                    {url:'99_2.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
        ]
    }
]

// Função para escrever as informações a respeito do candidato
function escreveInformacao(candidato){
    // Por algum motivo nn está funcionando
    console.log(candidato.fotos[0].link);
    if(candidato.numero == "1889"){
        window.open(`${candidato.fotos[0].link}`, '_blank');
        //Ideia inicial, porém está dando inconsistência
        //modificar.innerHTML = "<iframe src = '${candidato.fotos[0].link}' frameborder='4'></iframe>";
    }
}