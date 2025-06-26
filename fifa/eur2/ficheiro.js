var equipe = [
    [`UEFA`,`http://oraculo.wederson.com/fifa/imagem/europa.png`,,0],
    
    [`Israel`,`http://oraculo.wederson.com/fifa/imagem/israel.webp`,
        {a:1.3,d:1.3,rat:1629},19],
    [`Albania`,`http://oraculo.wederson.com/fifa/imagem/albania.webp`,
        {a:1.3,d:1.3,rat:1627},20],
    [`Bósnia`,`http://oraculo.wederson.com/fifa/imagem/bosnia.webp`,
        {a:1.3,d:1.3,rat:1523},21],
    [`Escócia`,`http://oraculo.wederson.com/fifa/imagem/escocia.webp`,
        {a:1.3,d:1.3,rat:1718},22],
    [`Eslováquia`,`http://oraculo.wederson.com/fifa/imagem/eslovaquia.webp`,
        {a:1.3,d:1.3,rat:1666},23],
    [`Eslovênia`,`http://oraculo.wederson.com/fifa/imagem/eslovenia.webp`,
        {a:1.3,d:1.3,rat:1752},24],
    [`Finlândia`,`http://oraculo.wederson.com/fifa/imagem/finlandia.webp`,
        {a:1.3,d:1.3,rat:1556},25],
    [`Pais de Gales`,`http://oraculo.wederson.com/fifa/imagem/gales.webp`,
        {a:1.3,d:1.3,rat:1727},26],
    [`Geórgia`,`http://oraculo.wederson.com/fifa/imagem/georgia.webp`,
        {a:1.3,d:1.3,rat:1710},27],
    [`Hungria`,`http://oraculo.wederson.com/fifa/imagem/hungria.webp`,
        {a:1.3,d:1.3,rat:1702},28],
    [`Irlanda`,`http://oraculo.wederson.com/fifa/imagem/irlanda.webp`,
        {a:1.3,d:1.3,rat:1634},29],
    [`Irlanda do Norte`,`http://oraculo.wederson.com/fifa/imagem/irlandadonorte.webp`,
        {a:1.3,d:1.3,rat:1561},30],
    [`Islândia`,`http://oraculo.wederson.com/fifa/imagem/islandia.webp`,
        {a:1.3,d:1.3,rat:1550},31],
    [`Kosovo`,`http://oraculo.wederson.com/fifa/imagem/kosovo.webp`,
        {a:1.3,d:1.3,rat:1609},32],
    [`Macedônia do N.`,`http://oraculo.wederson.com/fifa/imagem/macedonia.webp`,
        {a:1.3,d:1.3,rat:1635},33],
    [`Polônia`,`http://oraculo.wederson.com/fifa/imagem/polonia.webp`,
        {a:1.3,d:1.3,rat:1683},34],
    [`Romênia`,`http://oraculo.wederson.com/fifa/imagem/romenia.webp`,
        {a:1.3,d:1.3,rat:1681},35],
    [`Tchéquia`,`http://oraculo.wederson.com/fifa/imagem/tchequia.webp`,
        {a:1.3,d:1.3,rat:1750},36]
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