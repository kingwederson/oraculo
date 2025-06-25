var equipe = [
    [`UEFA`,`http://oraculo.wederson.com/fifa/imagem/europa.png`,,0],
    
    [`Andorra`,`http://oraculo.wederson.com/fifa/imagem/andorra.webp`,
        {a:1.3,d:1.3,rat:1066},3],
    [`Armenia`,`http://oraculo.wederson.com/fifa/imagem/armenia.png`,
        {a:1.3,d:1.3,rat:1388},4],
    [`Azerbaijao`,`http://oraculo.wederson.com/fifa/imagem/azerbaijao.webp`,
        {a:1.3,d:1.3,rat:1366},6],
    [`Belarus`,`http://oraculo.wederson.com/fifa/imagem/belarus.webp`,
        {a:1.3,d:1.3,rat:1492},7],
    [`Bulgária`,`http://oraculo.wederson.com/fifa/imagem/bulgaria.webp`,
        {a:1.3,d:1.3,rat:1452},10],
    [`Cazaquistão`,`http://oraculo.wederson.com/fifa/imagem/cazaquistao.webp`,
        {a:1.3,d:1.3,rat:1401},11],
    [`Chipre`,`http://oraculo.wederson.com/fifa/imagem/chipre.webp`,
        {a:1.3,d:1.3,rat:1300},12],
    [`Estônia`,`http://oraculo.wederson.com/fifa/imagem/estonia.webp`,
        {a:1.3,d:1.3,rat:1367},19],
    [`Ilhas Faroé`,`http://oraculo.wederson.com/fifa/imagem/faroe.png`,
        {a:1.3,d:1.3,rat:1277},20],
    [`Gibraltar`,`http://oraculo.wederson.com/fifa/imagem/gibraltar.webp`,
        {a:1.3,d:1.3,rat:1047},25],
    [`Letônia`,`http://oraculo.wederson.com/fifa/imagem/letonia.webp`,
        {a:1.3,d:1.3,rat:1301},35],
    [`Liechtenstein`,`http://oraculo.wederson.com/fifa/imagem/liechtenstein.webp`,
        {a:1.3,d:1.3,rat:906},36],
    [`Lituânia`,`http://oraculo.wederson.com/fifa/imagem/lituania.webp`,
        {a:1.3,d:1.3,rat:1294},37],
    [`Luxemburgo`,`http://oraculo.wederson.com/fifa/imagem/luxemburgo.webp`,
        {a:1.3,d:1.3,rat:1455},38],
    [`Malta`,`http://oraculo.wederson.com/fifa/imagem/malta.webp`,
        {a:1.3,d:1.3,rat:1251},40],
    [`Moldávia`,`http://oraculo.wederson.com/fifa/imagem/moldavia.webp`,
        {a:1.3,d:1.3,rat:1320},41],
    [`Montenegro`,`http://oraculo.wederson.com/fifa/imagem/montenegro.webp`,
        {a:1.3,d:1.3,rat:1514},42],
    //[`Rússia`,`http://oraculo.wederson.com/fifa/imagem/russia.webp`,
    //    {a:1.3,d:1.3,rat:800},48],
    [`San Marino`,`http://oraculo.wederson.com/fifa/imagem/sanmarino.webp`,
        {a:1.3,d:1.3,rat:846},49],
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