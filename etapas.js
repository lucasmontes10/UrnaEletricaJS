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
                nome: "Getúlio Vargas",
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
            {
                numero: '1956',
                nome: "Nereu Ramos",
                partido: "PSD",
                fotos:[
                    {url:'Presidente_Nereu_Ramos.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Nereu_Ramos"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1957',
                nome: "Juscelino Kubitschek",
                partido: "PSD",
                fotos:[
                    {url:'Juscelino.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Juscelino_Kubitscheks"},
                    {url:'Jango.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1961',
                nome: "Jânio Quadros",
                partido: "PTN",
                fotos:[
                    {url:'Janio_Quadros.png', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/J%C3%A2nio_Quadros"},
                    {url:'Jango.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1962',
                nome: "Ranieri Mazzilli",
                partido: "PSD",
                fotos:[
                    {url:'Mazzilli.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Ranieri_Mazzilli"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1963',
                nome: "João Goulart",
                partido: "PTB",
                fotos:[
                    {url:'Jango.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Goulart"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1964',
                nome: "Ranieri Mazzilli",
                partido: "PSD",
                fotos:[
                    {url:'Ranieiri.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Ranieri_Mazzilli"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1965',
                nome: "Humberto Castelo Branco",
                partido: "Arena",
                fotos:[
                    {url:'Castelobranco.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Humberto_Castelo_Branco"},
                    {url:'Jose_Maria_Alkmin.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1967',
                nome: "Artur da Costa e Silva",
                partido: "Arena",
                fotos:[
                    {url:'Costa_e_Silva.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Costa_e_Silvao"},
                    {url:'Pedro_Aleixo.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1969',
                nome: "Emílio Garrastazu Médici",
                partido: "Arena",
                fotos:[
                    {url:'medici.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Em%C3%ADlio_Garrastazu_M%C3%A9dici"},
                    {url:'Augusto_Hamann.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1974',
                nome: "Ernesto Geisel",
                partido: "Arena",
                fotos:[
                    {url:'Ernesto_Geisel.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Ernesto_Geisel"},
                    {url:'Adalberto.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1979',
                nome: "João Figueiredo",
                partido: "Arena/PDS",
                fotos:[
                    {url:'Figueiredo.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Jo%C3%A3o_Figueiredo"},
                    {url:'Aureliano_Chaves.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1985',
                nome: "José Sarney",
                partido: "PMDB",
                fotos:[
                    {url:'sarney.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Jos%C3%A9_Sarney"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1990',
                nome: "Fernando Collor",
                partido: "PRN",
                fotos:[
                    {url:'collor.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Fernando_Collor"},
                    {url:'itmar_franco.gif', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1992',
                nome: "Itamar Franco",
                partido: "PMDB",
                fotos:[
                    {url:'itmar_franco.gif', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Itamar_Franco"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '1995',
                nome: "Fernando Henrique Cardoso",
                partido: "PSDB",
                fotos:[
                    {url:'Fernando_Henrique_Cardoso_(1999).jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Fernando_Henrique_Cardoso"},
                    {url:'Marco_maciel_2010.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '2003',
                nome: "Luiz Inácio Lula da Silva",
                partido: "PT",
                fotos:[
                    {url:'lula.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva"},
                    {url:'jose_alencar.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '2011',
                nome: "Dilma Rousseff",
                partido: "PT",
                fotos:[
                    {url:'dilma.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Dilma_Rousseff"},
                    {url:'temer.jpg', legenda: "Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '2016',
                nome: "Michel Temer",
                partido: "PMDB",
                fotos:[
                    {url:'temer.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Michel_Temer"},
                    {url:'', legenda: "Sem Vice-Presidente", small: true}
                ]   
            },
            {
                numero: '2019',
                nome: "Jair Bolsonaro",
                partido: "PSL",
                fotos:[
                    {url:'bolsonaro.jpg', legenda:"Presidente", small: false, link: "https://pt.wikipedia.org/wiki/Jair_Bolsonaro"},
                    {url:'mourao.jpg', legenda: "Vice-Presidente", small: true}
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