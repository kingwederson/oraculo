var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/asia.png`,,0],
    
    [`Japão`,`http://oraculo.wederson.com/fifa/imagem/japao.webp`,
        {a:1.3,d:1.3,rat:1856},107],
    [`Irã`,`http://oraculo.wederson.com/fifa/imagem/ira.webp`,
        {a:1.3,d:1.3,rat:1800},108],
    [`Australia`,`http://oraculo.wederson.com/fifa/imagem/australia.webp`,
        {a:1.3,d:1.3,rat:1775},109],
    [`Coréia do Sul`,`http://oraculo.wederson.com/fifa/imagem/coreias.webp`,
        {a:1.3,d:1.3,rat:1769},110],
    [`Uzbequistão`,`http://oraculo.wederson.com/fifa/imagem/uzbequistao.webp`,
        {a:1.3,d:1.3,rat:1706},111],
    [`China`,`http://oraculo.wederson.com/fifa/imagem/china.webp`,
        {a:1.3,d:1.3,rat:1400},112],
    [`Coréia do Norte`,`http://oraculo.wederson.com/fifa/imagem/coreian.webp`,
        {a:1.3,d:1.3,rat:1374},113],
    [`Indonésia`,`http://oraculo.wederson.com/fifa/imagem/indonesia.webp`,
        {a:1.3,d:1.3,rat:1354},114],
    [`Quirguistão`,`http://oraculo.wederson.com/fifa/imagem/quirguistao.webp`,
        {a:1.3,d:1.3,rat:1329},115],
    [`Malásia`,`http://oraculo.wederson.com/fifa/imagem/malasia.webp`,
        {a:1.3,d:1.3,rat:1289},116],
    [`Hong Kong`,`http://oraculo.wederson.com/fifa/imagem/hongkong.webp`,
        {a:1.3,d:1.3,rat:1250},117],
    [`Jordânia`,`http://oraculo.wederson.com/fifa/imagem/jordania.webp`,
        {a:1.3,d:1.3,rat:1623},118],
    [`Arábia Saudita`,`http://oraculo.wederson.com/fifa/imagem/arabia.webp`,
        {a:1.3,d:1.3,rat:1584},119],
    [`Iraque`,`http://oraculo.wederson.com/fifa/imagem/iraque.webp`,
        {a:1.3,d:1.3,rat:1549},120],
    [`Emirados Árabes`,`http://oraculo.wederson.com/fifa/imagem/eau.webp`,
        {a:1.3,d:1.3,rat:1536},121],
    [`Catar`,`http://oraculo.wederson.com/fifa/imagem/catar.webp`,
        {a:1.3,d:1.3,rat:1518},122],
    [`Omã`,`http://oraculo.wederson.com/fifa/imagem/oma.webp`,
        {a:1.3,d:1.3,rat:1499},123],
    [`Barein`,`http://oraculo.wederson.com/fifa/imagem/barein.webp`,
        {a:1.3,d:1.3,rat:1447},124],
    [`Síria`,`http://oraculo.wederson.com/fifa/imagem/siria.webp`,
        {a:1.3,d:1.3,rat:1447},125],
    [`Líbano`,`http://oraculo.wederson.com/fifa/imagem/libano.webp`,
        {a:1.3,d:1.3,rat:1327},126],
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