var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/asia.png`,,0],
    
    [`Japão`,`http://oraculo.wederson.com/fifa/imagem/japao.webp`,
        {a:1.3,d:1.3,rat:1856},1],
    [`Irã`,`http://oraculo.wederson.com/fifa/imagem/ira.webp`,
        {a:1.3,d:1.3,rat:1800},2],
    [`Australia`,`http://oraculo.wederson.com/fifa/imagem/australia.webp`,
        {a:1.3,d:1.3,rat:1775},3],
    [`Coréia do Sul`,`http://oraculo.wederson.com/fifa/imagem/coreias.webp`,
        {a:1.3,d:1.3,rat:1769},4],
    [`Uzbequistão`,`http://oraculo.wederson.com/fifa/imagem/uzbequistao.webp`,
        {a:1.3,d:1.3,rat:1706},5],
    [`China`,`http://oraculo.wederson.com/fifa/imagem/china.webp`,
        {a:1.3,d:1.3,rat:1400},14],
    [`Coréia do Norte`,`http://oraculo.wederson.com/fifa/imagem/coreian.webp`,
        {a:1.3,d:1.3,rat:1374},15],
    [`Indonésia`,`http://oraculo.wederson.com/fifa/imagem/indonesia.webp`,
        {a:1.3,d:1.3,rat:1354},16],
    [`Tailândia`,`http://oraculo.wederson.com/fifa/imagem/tailandia.webp`,
        {a:1.3,d:1.3,rat:1349},17],
    [`Quirguistão`,`http://oraculo.wederson.com/fifa/imagem/quirguistao.webp`,
        {a:1.3,d:1.3,rat:1329},18],
    [`Vietnã`,`http://oraculo.wederson.com/fifa/imagem/vietna.webp`,
        {a:1.3,d:1.3,rat:1319},20],
    [`Índia`,`http://oraculo.wederson.com/fifa/imagem/india.webp`,
        {a:1.3,d:1.3,rat:1146},25],
    [`Tajiquistão`,`http://oraculo.wederson.com/fifa/imagem/tajiquistao.webp`,
        {a:1.3,d:1.3,rat:1286},23],
    [`Malásia`,`http://oraculo.wederson.com/fifa/imagem/malasia.webp`,
        {a:1.3,d:1.3,rat:1289},22],
    [`Miamar`,`http://oraculo.wederson.com/fifa/imagem/miamar.webp`,
        {a:1.3,d:1.3,rat:1052},30],
    [`Hong Kong`,`http://oraculo.wederson.com/fifa/imagem/hongkong.webp`,
        {a:1.3,d:1.3,rat:1250},24],
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