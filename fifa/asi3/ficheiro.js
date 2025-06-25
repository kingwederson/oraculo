var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/asia.png`,,0],
    
    [`Brunei`,`http://oraculo.wederson.com/fifa/imagem/brunei.png`,
        {a:1.3,d:1.3,rat:668},42],
    [`Butão`,`http://oraculo.wederson.com/fifa/imagem/butao.webp`,
        {a:1.3,d:1.3,rat:619},43],
    [`Nova Caledônia`,`http://oraculo.wederson.com/fifa/imagem/caledonia.webp`,
        {a:1.3,d:1.3,rat:5},46],
    [`Fiji`,`http://oraculo.wederson.com/fifa/imagem/fiji.png`,
        {a:1.3,d:1.3,rat:5},47],
    [`Taiti`,`http://oraculo.wederson.com/fifa/imagem/taiti.webp`,
        {a:1.3,d:1.3,rat:5},48],
    [`Il. Salomão`,`http://oraculo.wederson.com/fifa/imagem/salomao.webp`,
        {a:1.3,d:1.3,rat:5},49],
    [`Papua N.G.`,`http://oraculo.wederson.com/fifa/imagem/papua.png`,
        {a:1.3,d:1.3,rat:5},50],
    [`Vanuatu`,`http://oraculo.wederson.com/fifa/imagem/vanuatu.webp`,
        {a:1.3,d:1.3,rat:5},51],
    [`Tuvalu`,`http://oraculo.wederson.com/fifa/imagem/tuvalu.webp`,
        {a:1.3,d:1.3,rat:5},52],
    [`Samoa`,`http://oraculo.wederson.com/fifa/imagem/samoa.webp`,
        {a:1.3,d:1.3,rat:5},53],
    [`Il. Cook`,`http://oraculo.wederson.com/fifa/imagem/cook.webp`,
        {a:1.3,d:1.3,rat:5},54],
    [`Kiribati`,`http://oraculo.wederson.com/fifa/imagem/kiribati.webp`,
        {a:1.3,d:1.3,rat:5},55],
    [`Tonga`,`http://oraculo.wederson.com/fifa/imagem/tonga.webp`,
        {a:1.3,d:1.3,rat:5},56],
    [`Samoa Oc.`,`http://oraculo.wederson.com/fifa/imagem/samoaoc.webp`,
        {a:1.3,d:1.3,rat:5},57]
]

var tabelaRRinicial = [[equipe[0][0]]]

function criarRR(){
    for(let r = 1;r<equipe.length;r++){
        tabelaRRinicial[0].push(equipe[r][0])
    }
    for(let r = 1;r<equipe.length;r++){
        tabelaRRinicial.push([equipe[r][0]])
    }
    for(let r = 1;r<equipe.length;r++){
        for(let s=1;s<equipe.length;s++){
            tabelaRRinicial[r].push([,])
        }
    }
}
/*
var tabelaRRinicial = [[equipe[0][0]]]
for(let r = 1;r<=1+equipe.length;r++){
    tabelaRRinicial[0].push(equipe[r][0])
}
for(let r = 1;r<=1+equipe.length;r++){
    tabelaRRinicial.push(equipe[r][0])
}
for(let r = 1;r<=1+equipe.length;r++){
    for(let s=1;s<=1+equipe.length;s++){
        tabelaRRinicial[r].push([,])
    }
}
*/