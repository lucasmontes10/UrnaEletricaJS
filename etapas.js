//CRIAÇÃO DO MEU OBJETO, O BANCO DOS PRESIDENTES
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
                 {url: 'Floriano_Peixoto_(1891).jpg', legenda:'Vice-Presidente', small: true}
                ],
            },
            {
                numero: '1891',
                nome: "Floriano Peixoto",
                partido: "NENHUM",
                fotos:[
                    {url:'Floriano_Peixoto_(1891).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Floriano_Peixoto"},
                    {url:'99_2.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1894',
                nome: "Prudente de Morais",
                partido: "PR-Federal",
                fotos:[
                    {url:'Prudentedemorais.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Prudente_de_Morais"},
                    {url:'Manoel_Victorino.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1898',
                nome: "Campos Sales",
                partido: "PRP",
                fotos:[
                    {url:'Campos_Sales.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Campos_Sales"},
                    {url:'Francisco_de_Assis_Rosa_e_Silva.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1902',
                nome: "Rodrigo Alves",
                partido: "PRP",
                fotos:[
                    {url:'Rodrigues_Alves_3.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Rodrigues_Alves"},
                    {url:'Afonso_Pena.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1906',
                nome: "Afonso Pena",
                partido: "PRM",
                fotos:[
                    {url:'Afonso_Pena.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Afonso_Pena"},
                    {url:'Nilo_Peçanha_02.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1909',
                nome: "Nilo Peçanha",
                partido: "PRF",
                fotos:[
                    {url:'Nilo_Peçanha_02.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Nilo_Pe%C3%A7anha"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1910',
                nome: "Hermes da Fonseca",
                partido: "PRC",
                fotos:[
                    {url:'Hermes_da_Fonseca_(1910).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Hermes_da_Fonseca"},
                    {url:'Venceslau_Bras.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1914',
                nome: "Venceslau Braus",
                partido: "PRM",
                fotos:[
                    {url:'Venceslau_Bras.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Venceslau_Br%C3%A1s"},
                    {url:'Urbano_Santos_da_Costa_Araújo.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1918',
                nome: "Delfim Moreira",
                partido: "PRM",
                fotos:[
                    {url:'Delfim_Moreira_(1918).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Delfim_Moreira"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1919',
                nome: "Epitácio Pessoa",
                partido: "PRM",
                fotos:[
                    {url:'Epitacio_Pessoa_(1919).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Epit%C3%A1cio_Pessoa"},
                    {url:'Delfim_Moreira_(1918).jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1922',
                nome: "Arthur Bernardes",
                partido: "PRM",
                fotos:[
                    {url:'Artur_Bernardes_(1922).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Artur_Bernardes"},
                    {url:'Estácio_de_Albuquerque_Coimbra.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1926',
                nome: "Washington Luís",
                partido: "PRP",
                fotos:[
                    {url:'Washington_Luís_(foto).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Washington_Lu%C3%ADs"},
                    {url:'Fernando_de_Mello_Vianna.jpg', legenda: "Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1930',
                nome: "Getulio Vargas",
                partido: "NENHUM",
                fotos:[
                    {url:'Getulio_Vargas_(1930).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Get%C3%BAlio_Vargas"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1945',
                nome: "José Linhares",
                partido: "NENHUM",
                fotos:[
                    {url:'José_Linhares_TSE.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Jos%C3%A9_Linhares"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]
            },
            {
                numero: '1946',
                nome: "Eurico Gaspar Dutra",
                partido: "PSD",
                fotos:[
                    {url:'GASPARDUTRA.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Eurico_Gaspar_Dutra"},
                    {url:'Presidente_Nereu_Ramos.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1951',
                nome: "Getúlio Vargas",
                partido: "PTB",
                fotos:[
                    {url:'Getulio_Vargas_(1930).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Get%C3%BAlio_Vargas"},
                    {url:'Cafe_Filho.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1954',
                nome: "Café Filho",
                partido: "PSP",
                fotos:[
                    {url:'Cafe_Filho.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Caf%C3%A9_Filho"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
            {
                //Problematica aqui, pois o presidente ficou apenas tres dias
                numero: '1955',
                nome: "Carlos Luz",
                partido: "PSD",
                fotos:[
                    {url:'CarlosLuz.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Carlos_Luzo"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
        ]
    }
]

// Função para escrever as informações a respeito do candidato
function escreveInformacao(){
    window.open(`${candidato.fotos[0].link}`, '_blank');
        //Ideia inicial, porém está dando inconsistência
        //modificar.innerHTML = "<iframe src = '${candidato.fotos[0].link}' frameborder='4'></iframe>";
}