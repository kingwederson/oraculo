var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/asia.png`,,0],

    [`Índia`,`http://oraculo.wederson.com/fifa/imagem/india.webp`,
        {a:1.3,d:1.3,rat:1146},25],
    [`Miamar`,`http://oraculo.wederson.com/fifa/imagem/miamar.webp`,
        {a:1.3,d:1.3,rat:1052},30],
    [`Kwait`,`http://oraculo.wederson.com/fifa/imagem/kwait.webp`,
        {a:1.3,d:1.3,rat:1292},21],
    [`Filipinas`,`http://oraculo.wederson.com/fifa/imagem/filipinas.webp`,
        {a:1.3,d:1.3,rat:1141},26],
    [`Singapura`,`http://oraculo.wederson.com/fifa/imagem/singapura.webp`,
        {a:1.3,d:1.3,rat:1119},28],
    [`Afeganistão`,`http://oraculo.wederson.com/fifa/imagem/afeganistao.webp`,
        {a:1.3,d:1.3,rat:1080},29],
    [`Nepal`,`http://oraculo.wederson.com/fifa/imagem/nepal.webp`,
        {a:1.3,d:1.3,rat:947},31],
    [`Bangladesh`,`http://oraculo.wederson.com/fifa/imagem/bangladesh.webp`,
        {a:1.3,d:1.3,rat:920},32],
    [`Taiwan`,`http://oraculo.wederson.com/fifa/imagem/taiwan.png`,
        {a:1.3,d:1.3,rat:905},33],
    [`Maldivas`,`http://oraculo.wederson.com/fifa/imagem/maldivas.webp`,
        {a:1.3,d:1.3,rat:879},34],
    [`Camboja`,`http://oraculo.wederson.com/fifa/imagem/camboja.webp`,
        {a:1.3,d:1.3,rat:834},35],
    [`Paquistão`,`http://oraculo.wederson.com/fifa/imagem/paquistao.webp`,
        {a:1.3,d:1.3,rat:813},36],
    [`Sri Lanka`,`http://oraculo.wederson.com/fifa/imagem/srilanka.webp`,
        {a:1.3,d:1.3,rat:776},37],
    [`Mongolia`,`http://oraculo.wederson.com/fifa/imagem/mongolia.webp`,
        {a:1.3,d:1.3,rat:729},38],
    [`Laos`,`http://oraculo.wederson.com/fifa/imagem/laos.webp`,
        {a:1.3,d:1.3,rat:713},39],
    [`Guam`,`http://oraculo.wederson.com/fifa/imagem/guam.webp`,
        {a:1.3,d:1.3,rat:712},40],
    [`Iêmen`,`http://oraculo.wederson.com/fifa/imagem/iemen.webp`,
        {a:1.3,d:1.3,rat:1132},27],
    [`Tailândia`,`http://oraculo.wederson.com/fifa/imagem/tailandia.webp`,
        {a:1.3,d:1.3,rat:1349},17],
    [`Vietnã`,`http://oraculo.wederson.com/fifa/imagem/vietna.webp`,
        {a:1.3,d:1.3,rat:1319},20],
    [`Tajiquistão`,`http://oraculo.wederson.com/fifa/imagem/tajiquistao.webp`,
        {a:1.3,d:1.3,rat:1286},23],
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