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
    [`Quirguistão`,`http://oraculo.wederson.com/fifa/imagem/quirguistao.webp`,
        {a:1.3,d:1.3,rat:1329},18],
    [`Malásia`,`http://oraculo.wederson.com/fifa/imagem/malasia.webp`,
        {a:1.3,d:1.3,rat:1289},22],
    [`Hong Kong`,`http://oraculo.wederson.com/fifa/imagem/hongkong.webp`,
        {a:1.3,d:1.3,rat:1250},24],
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