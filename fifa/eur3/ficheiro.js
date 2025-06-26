var equipe = [
    [`UEFA`,`http://oraculo.wederson.com/fifa/imagem/europa.png`,,0],
    
    [`Andorra`,`http://oraculo.wederson.com/fifa/imagem/andorra.webp`,
        {a:1.3,d:1.3,rat:1066},37],
    [`Armenia`,`http://oraculo.wederson.com/fifa/imagem/armenia.png`,
        {a:1.3,d:1.3,rat:1388},38],
    [`Azerbaijao`,`http://oraculo.wederson.com/fifa/imagem/azerbaijao.webp`,
        {a:1.3,d:1.3,rat:1366},39],
    [`Bulgária`,`http://oraculo.wederson.com/fifa/imagem/bulgaria.webp`,
        {a:1.3,d:1.3,rat:1452},41],
    [`Chipre`,`http://oraculo.wederson.com/fifa/imagem/chipre.webp`,
        {a:1.3,d:1.3,rat:1300},43],
    [`Estônia`,`http://oraculo.wederson.com/fifa/imagem/estonia.webp`,
        {a:1.3,d:1.3,rat:1367},44],
    [`Ilhas Faroé`,`http://oraculo.wederson.com/fifa/imagem/faroe.png`,
        {a:1.3,d:1.3,rat:1277},45],
    [`Gibraltar`,`http://oraculo.wederson.com/fifa/imagem/gibraltar.webp`,
        {a:1.3,d:1.3,rat:1047},46],
    [`Letônia`,`http://oraculo.wederson.com/fifa/imagem/letonia.webp`,
        {a:1.3,d:1.3,rat:1301},47],
    [`Liechtenstein`,`http://oraculo.wederson.com/fifa/imagem/liechtenstein.webp`,
        {a:1.3,d:1.3,rat:906},48],
    [`Lituânia`,`http://oraculo.wederson.com/fifa/imagem/lituania.webp`,
        {a:1.3,d:1.3,rat:1294},49],
    [`Luxemburgo`,`http://oraculo.wederson.com/fifa/imagem/luxemburgo.webp`,
        {a:1.3,d:1.3,rat:1455},50],
    [`Malta`,`http://oraculo.wederson.com/fifa/imagem/malta.webp`,
        {a:1.3,d:1.3,rat:1251},51],
    [`Moldávia`,`http://oraculo.wederson.com/fifa/imagem/moldavia.webp`,
        {a:1.3,d:1.3,rat:1320},52],
    [`San Marino`,`http://oraculo.wederson.com/fifa/imagem/sanmarino.webp`,
        {a:1.3,d:1.3,rat:846},54],
    [`Chechênia`,`http://oraculo.wederson.com/fifa/imagem/chechenia.jpeg`,
        {a:1.3,d:1.3,rat:757},231],
    [`Daguestão`,`http://oraculo.wederson.com/fifa/imagem/daguestao.jpeg`,
        {a:1.3,d:1.3,rat:757},232],
    [`Sibéria`,`http://oraculo.wederson.com/fifa/imagem/siberia.jpeg`,
        {a:1.3,d:1.3,rat:757},233],
    [`Volga`,`http://oraculo.wederson.com/fifa/imagem/volga.jpeg`,
        {a:1.3,d:1.3,rat:757},234],
    [`Ural`,`http://oraculo.wederson.com/fifa/imagem/ural.jpeg`,
        {a:1.3,d:1.3,rat:757},235],
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