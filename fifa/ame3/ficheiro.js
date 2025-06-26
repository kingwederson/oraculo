var equipe = [
    [`CONAM`,`http://oraculo.wederson.com/fifa/imagem/americas.png`,,0],
    
    [`Barbados`,`http://oraculo.wederson.com/fifa/imagem/barbados.webp`,
        {a:1.3,d:1.3,rat:939},92],
    [`Antigua`,`http://oraculo.wederson.com/fifa/imagem/antigua.webp`,
        {a:1.3,d:1.3,rat:910},94],
    [`Anguila`,`http://oraculo.wederson.com/fifa/imagem/anguila.webp`,
        {a:1.3,d:1.3,rat:618},96],
    [`Aruba`,`http://oraculo.wederson.com/fifa/imagem/aruba.webp`,
        {a:1.3,d:1.3,rat:918},97],
    [`Bahamas`,`http://oraculo.wederson.com/fifa/imagem/bahamas.png`,
        {a:1.3,d:1.3,rat:783},98],
    [`Bonaire`,`http://oraculo.wederson.com/fifa/imagem/bonaire.webp`,
        {a:1.3,d:1.3,rat:838},99],
    [`Cayman`,`http://oraculo.wederson.com/fifa/imagem/cayman.webp`,
        {a:1.3,d:1.3,rat:821},100],
    [`Dominica`,`http://oraculo.wederson.com/fifa/imagem/dominica.webp`,
        {a:1.3,d:1.3,rat:971},101],
    [`S. Maarten`,`http://oraculo.wederson.com/fifa/imagem/maarten.webp`,
        {a:1.3,d:1.3,rat:934},102],
    [`Monserrat`,`http://oraculo.wederson.com/fifa/imagem/montserrat.png`,
        {a:1.3,d:1.3,rat:972},103],
    [`Turks`,`http://oraculo.wederson.com/fifa/imagem/turks.webp`,
        {a:1.3,d:1.3,rat:650},104],
    [`Virgens Am.`,`http://oraculo.wederson.com/fifa/imagem/virgensa.webp`,
        {a:1.3,d:1.3,rat:587},105],
    [`Virgens Br.`,`http://oraculo.wederson.com/fifa/imagem/virgensb.webp`,
        {a:1.3,d:1.3,rat:628},106],
    [`Groelândia`,`http://oraculo.wederson.com/fifa/imagem/groelandia.jpeg`,
        {a:1.3,d:1.3,rat:946},227],
    [`S. Pierre e Miquelon`,`http://oraculo.wederson.com/fifa/imagem/franca.webp`,
        {a:1.3,d:1.3,rat:677},228],
    [`São Bartolomeu`,`http://oraculo.wederson.com/fifa/imagem/franca.webp`,
        {a:1.3,d:1.3,rat:725},229],
    [`Santo Estáquio`,`http://oraculo.wederson.com/fifa/imagem/neerlandia.webp`,
        {a:1.3,d:1.3,rat:757},230],
    [`Saba`,`http://oraculo.wederson.com/fifa/imagem/saba.jpeg`,
        {a:1.3,d:1.3,rat:757},231],
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