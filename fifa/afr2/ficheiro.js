var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/africa.png`,,0],

    [`Dijibouti`,`http://oraculo.wederson.com/fifa/imagem/dijibouti.webp`,
        {a:1.3,d:1.3,rat:932},13],
    [`Gabão`,`http://oraculo.wederson.com/fifa/imagem/gabao.webp`,
        {a:1.3,d:1.3,rat:1463},17],
    [`Benin`,`http://oraculo.wederson.com/fifa/imagem/benin.webp`,
        {a:1.3,d:1.3,rat:1412},21],
    [`Zimbabue`,`http://oraculo.wederson.com/fifa/imagem/zimbabue.webp`,
        {a:1.3,d:1.3,rat:1401},22],
    [`Tanzânia`,`http://oraculo.wederson.com/fifa/imagem/tanzania.webp`,
        {a:1.3,d:1.3,rat:1398},23],
    [`Gâmbia`,`http://oraculo.wederson.com/fifa/imagem/gambia.webp`,
        {a:1.3,d:1.3,rat:1389},25],
    [`Zâmbia`,`http://oraculo.wederson.com/fifa/imagem/zambia.webp`,
        {a:1.3,d:1.3,rat:1385},27],
    [`Namíbia`,`http://oraculo.wederson.com/fifa/imagem/namibia.png`,
        {a:1.3,d:1.3,rat:1384},28],
    [`Mauritânia`,`http://oraculo.wederson.com/fifa/imagem/mauritania.webp`,
        {a:1.3,d:1.3,rat:1334},34],
    [`Guiné`,`http://oraculo.wederson.com/fifa/imagem/guine.webp`,
        {a:1.3,d:1.3,rat:1463},18],
    [`Uganda`,`http://oraculo.wederson.com/fifa/imagem/uganda.webp`,
        {a:1.3,d:1.3,rat:1384},29],
    [`Quênia`,`http://oraculo.wederson.com/fifa/imagem/quenia.webp`,
        {a:1.3,d:1.3,rat:1379},30],
    [`Botswana`,`http://oraculo.wederson.com/fifa/imagem/botswana.webp`,
        {a:1.3,d:1.3,rat:1356},32],
    [`Niger`,`http://oraculo.wederson.com/fifa/imagem/niger.webp`,
        {a:1.3,d:1.3,rat:1339},33],
    [`Serra Leoa`,`http://oraculo.wederson.com/fifa/imagem/serraleoa.webp`,
        {a:1.3,d:1.3,rat:1329},35],
    [`Ruanda`,`http://oraculo.wederson.com/fifa/imagem/ruanda.webp`,
        {a:1.3,d:1.3,rat:1326},36],
    [`Zanzibar`,`http://oraculo.wederson.com/fifa/imagem/zanzibar.webp`,
        {a:1.3,d:1.3,rat:1326},37],
    [`Burundi`,`http://oraculo.wederson.com/fifa/imagem/burundi.webp`,
        {a:1.3,d:1.3,rat:1294},38],
    [`Madagascar`,`http://oraculo.wederson.com/fifa/imagem/madagascar.webp`,
        {a:1.3,d:1.3,rat:1289},39],
    [`Etiópia`,`http://oraculo.wederson.com/fifa/imagem/etiopia.webp`,
        {a:1.3,d:1.3,rat:1282},40],
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