var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/africa.png`,,0],

    [`Dijibouti`,`http://oraculo.wederson.com/fifa/imagem/dijibouti.webp`,
        {a:1.3,d:1.3,rat:932},187],
    [`Gabão`,`http://oraculo.wederson.com/fifa/imagem/gabao.webp`,
        {a:1.3,d:1.3,rat:1463},188],
    [`Benin`,`http://oraculo.wederson.com/fifa/imagem/benin.webp`,
        {a:1.3,d:1.3,rat:1412},189],
    [`Zimbabue`,`http://oraculo.wederson.com/fifa/imagem/zimbabue.webp`,
        {a:1.3,d:1.3,rat:1401},190],
    [`Tanzânia`,`http://oraculo.wederson.com/fifa/imagem/tanzania.webp`,
        {a:1.3,d:1.3,rat:1398},191],
    [`Gâmbia`,`http://oraculo.wederson.com/fifa/imagem/gambia.webp`,
        {a:1.3,d:1.3,rat:1389},192],
    [`Zâmbia`,`http://oraculo.wederson.com/fifa/imagem/zambia.webp`,
        {a:1.3,d:1.3,rat:1385},193],
    [`Namíbia`,`http://oraculo.wederson.com/fifa/imagem/namibia.png`,
        {a:1.3,d:1.3,rat:1384},194],
    [`Mauritânia`,`http://oraculo.wederson.com/fifa/imagem/mauritania.webp`,
        {a:1.3,d:1.3,rat:1334},195],
    [`Guiné`,`http://oraculo.wederson.com/fifa/imagem/guine.webp`,
        {a:1.3,d:1.3,rat:1463},196],
    [`Uganda`,`http://oraculo.wederson.com/fifa/imagem/uganda.webp`,
        {a:1.3,d:1.3,rat:1384},197],
    [`Quênia`,`http://oraculo.wederson.com/fifa/imagem/quenia.webp`,
        {a:1.3,d:1.3,rat:1379},198],
    [`Botswana`,`http://oraculo.wederson.com/fifa/imagem/botswana.webp`,
        {a:1.3,d:1.3,rat:1356},199],
    [`Niger`,`http://oraculo.wederson.com/fifa/imagem/niger.webp`,
        {a:1.3,d:1.3,rat:1339},200],
    [`Serra Leoa`,`http://oraculo.wederson.com/fifa/imagem/serraleoa.webp`,
        {a:1.3,d:1.3,rat:1329},201],
    [`Ruanda`,`http://oraculo.wederson.com/fifa/imagem/ruanda.webp`,
        {a:1.3,d:1.3,rat:1326},202],
    [`Zanzibar`,`http://oraculo.wederson.com/fifa/imagem/zanzibar.webp`,
        {a:1.3,d:1.3,rat:1326},203],
    [`Burundi`,`http://oraculo.wederson.com/fifa/imagem/burundi.webp`,
        {a:1.3,d:1.3,rat:1294},204],
    [`Madagascar`,`http://oraculo.wederson.com/fifa/imagem/madagascar.webp`,
        {a:1.3,d:1.3,rat:1289},205],
    [`Etiópia`,`http://oraculo.wederson.com/fifa/imagem/etiopia.webp`,
        {a:1.3,d:1.3,rat:1282},206],
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