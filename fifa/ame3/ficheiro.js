var equipe = [
    [`CONAM`,`http://oraculo.wederson.com/fifa/imagem/americas.png`,,0],
    
    [`Anguila`,`http://oraculo.wederson.com/fifa/imagem/anguila.webp`,
        {a:1.3,d:1.3,rat:618},35],
    [`Antigua`,`http://oraculo.wederson.com/fifa/imagem/antigua.webp`,
        {a:1.3,d:1.3,rat:910},36],
    [`Aruba`,`http://oraculo.wederson.com/fifa/imagem/aruba.webp`,
        {a:1.3,d:1.3,rat:918},37],
    [`Bahamas`,`http://oraculo.wederson.com/fifa/imagem/bahamas.png`,
        {a:1.3,d:1.3,rat:783},38],
    [`Barbados`,`http://oraculo.wederson.com/fifa/imagem/barbados.webp`,
        {a:1.3,d:1.3,rat:939},39],
    [`Bonaire`,`http://oraculo.wederson.com/fifa/imagem/bonaire.webp`,
        {a:1.3,d:1.3,rat:838},40],
    [`Cayman`,`http://oraculo.wederson.com/fifa/imagem/cayman.webp`,
        {a:1.3,d:1.3,rat:821},41],
    [`S. Cristóvão`,`http://oraculo.wederson.com/fifa/imagem/cristovao.webp`,
        {a:1.3,d:1.3,rat:1026},42],
    [`Dominica`,`http://oraculo.wederson.com/fifa/imagem/dominica.webp`,
        {a:1.3,d:1.3,rat:971},43],
    [`S. Lúcia`,`http://oraculo.wederson.com/fifa/imagem/lucia.webp`,
        {a:1.3,d:1.3,rat:1045},44],
    [`S. Maarten`,`http://oraculo.wederson.com/fifa/imagem/maarten.webp`,
        {a:1.3,d:1.3,rat:934},45],
    [`Monserrat`,`http://oraculo.wederson.com/fifa/imagem/montserrat.png`,
        {a:1.3,d:1.3,rat:972},46],
    [`Turks`,`http://oraculo.wederson.com/fifa/imagem/turks.webp`,
        {a:1.3,d:1.3,rat:650},47],
    [`Virgens Am.`,`http://oraculo.wederson.com/fifa/imagem/virgensa.webp`,
        {a:1.3,d:1.3,rat:587},48],
    [`Virgens Br.`,`http://oraculo.wederson.com/fifa/imagem/virgensb.webp`,
        {a:1.3,d:1.3,rat:628},49],
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