var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/asia.png`,,0],

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
    [`Nova Zelândia`,`http://oraculo.wederson.com/fifa/imagem/zelandia.webp`,
        {a:1.3,d:1.3,rat:432},45],
    [`Timor-Leste`,`http://oraculo.wederson.com/fifa/imagem/timor.webp`,
        {a:1.3,d:1.3,rat:688},41],
    [`Macau`,`http://oraculo.wederson.com/fifa/imagem/macau.webp`,
        {a:1.3,d:1.3,rat:594},44],
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