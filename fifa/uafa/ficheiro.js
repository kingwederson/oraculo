var equipe = [
    [`UAFA`,`http://oraculo.wederson.com/fifa/imagem/arab.png`,,0],

    [`Jordânia`,`http://oraculo.wederson.com/fifa/imagem/jordania.webp`,
        {a:1.3,d:1.3,rat:1623},6],
    [`Arábia Saudita`,`http://oraculo.wederson.com/fifa/imagem/arabia.webp`,
        {a:1.3,d:1.3,rat:1584},7],
    [`Iraque`,`http://oraculo.wederson.com/fifa/imagem/iraque.webp`,
        {a:1.3,d:1.3,rat:1549},8],
    [`Emirados Árabes`,`http://oraculo.wederson.com/fifa/imagem/eau.webp`,
        {a:1.3,d:1.3,rat:1536},9],
    [`Catar`,`http://oraculo.wederson.com/fifa/imagem/catar.webp`,
        {a:1.3,d:1.3,rat:1518},10],
    [`Omã`,`http://oraculo.wederson.com/fifa/imagem/oma.webp`,
        {a:1.3,d:1.3,rat:1499},11],
    [`Barein`,`http://oraculo.wederson.com/fifa/imagem/barein.webp`,
        {a:1.3,d:1.3,rat:1447},12],
    [`Síria`,`http://oraculo.wederson.com/fifa/imagem/siria.webp`,
        {a:1.3,d:1.3,rat:1447},13],
    [`Líbano`,`http://oraculo.wederson.com/fifa/imagem/libano.webp`,
        {a:1.3,d:1.3,rat:1327},19],
    [`Kwait`,`http://oraculo.wederson.com/fifa/imagem/kwait.webp`,
        {a:1.3,d:1.3,rat:1292},21],
    [`Iêmen`,`http://oraculo.wederson.com/fifa/imagem/iemen.webp`,
        {a:1.3,d:1.3,rat:1132},27],
    [`Marrocos`,`http://oraculo.wederson.com/fifa/imagem/marrocos.webp`,
        {a:1.3,d:1.3,rat:1813},1],
    [`Argélia`,`http://oraculo.wederson.com/fifa/imagem/argelia.webp`,
        {a:1.3,d:1.3,rat:1707},3],
    [`Egito`,`http://oraculo.wederson.com/fifa/imagem/egito.webp`,
        {a:1.3,d:1.3,rat:1668},4],
    [`Tunísia`,`http://oraculo.wederson.com/fifa/imagem/tunisia.webp`,
        {a:1.3,d:1.3,rat:1615},5],
    [`Sudão`,`http://oraculo.wederson.com/fifa/imagem/sudao.webp`,
        {a:1.3,d:1.3,rat:1396},24],
    [`Líbia`,`http://oraculo.wederson.com/fifa/imagem/libia.webp`,
        {a:1.3,d:1.3,rat:1387},26],
    [`Dijibouti`,`http://oraculo.wederson.com/fifa/imagem/dijibouti.webp`,
        {a:1.3,d:1.3,rat:932},13],
    [`Somália`,`http://oraculo.wederson.com/fifa/imagem/somalia.webp`,
        {a:1.3,d:1.3,rat:915},14],
    [`Mauritânia`,`http://oraculo.wederson.com/fifa/imagem/mauritania.webp`,
        {a:1.3,d:1.3,rat:1334},34],
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