var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/asia.png`,,0],
    
    [`R. Centro-Africana`,`http://oraculo.wederson.com/fifa/imagem/centro.webp`,
        {a:1.3,d:1.3,rat:1281},207],
    [`Guiné-Bissau`,`http://oraculo.wederson.com/fifa/imagem/guinebi.webp`,
        {a:1.3,d:1.3,rat:1267},208],
    [`Libéria`,`http://oraculo.wederson.com/fifa/imagem/liberia.webp`,
        {a:1.3,d:1.3,rat:1265},209],
    [`Malaui`,`http://oraculo.wederson.com/fifa/imagem/malaui.webp`,
        {a:1.3,d:1.3,rat:1259},210],
    [`Congo`,`http://oraculo.wederson.com/fifa/imagem/congo.webp`,
        {a:1.3,d:1.3,rat:1226},211],
    [`Lesoto`,`http://oraculo.wederson.com/fifa/imagem/lesoto.webp`,
        {a:1.3,d:1.3,rat:1225},212],
    [`Eswatini`,`http://oraculo.wederson.com/fifa/imagem/eswatini.webp`,
        {a:1.3,d:1.3,rat:1219},213],
    [`Tchade`,`http://oraculo.wederson.com/fifa/imagem/tchade.webp`,
        {a:1.3,d:1.3,rat:1153},214],
    [`Eritreia`,`http://oraculo.wederson.com/fifa/imagem/eritreia.webp`,
        {a:1.3,d:1.3,rat:1144},215],
    [`Sudão do Sul`,`http://oraculo.wederson.com/fifa/imagem/sudaodosul.webp`,
        {a:1.3,d:1.3,rat:1134},216],
    [`Il. Maurício`,`http://oraculo.wederson.com/fifa/imagem/mauricio.webp`,
        {a:1.3,d:1.3,rat:1095},217],
    [`S. Tomé e Príncipe`,`http://oraculo.wederson.com/fifa/imagem/tome.webp`,
        {a:1.3,d:1.3,rat:1041},218],
    [`Seicheles`,`http://oraculo.wederson.com/fifa/imagem/seicheles.webp`,
        {a:1.3,d:1.3,rat:851},219],
    [`Togo`,`http://oraculo.wederson.com/fifa/imagem/togo.webp`,
        {a:1.3,d:1.3,rat:1372},220],
    [`Somália`,`http://oraculo.wederson.com/fifa/imagem/somalia.webp`,
        {a:1.3,d:1.3,rat:915},221],
    [`Somalilândia`,`http://oraculo.wederson.com/fifa/imagem/somalilandia.jpeg`,
        {a:1.3,d:1.3,rat:1002},222],
    [`Saara Ocidental`,`http://oraculo.wederson.com/fifa/imagem/saara.jpeg`,
        {a:1.3,d:1.3,rat:996},223],
    [`Ilha da Reunião`,`http://oraculo.wederson.com/fifa/imagem/franca.webp`,
        {a:1.3,d:1.3,rat:700},224],
    [`Mayotte`,`http://oraculo.wederson.com/fifa/imagem/franca.webp`,
        {a:1.3,d:1.3,rat:700},225],
    [`Ilhas Chagos`,`http://oraculo.wederson.com/fifa/imagem/chagos.jpeg`,
        {a:1.3,d:1.3,rat:700},226],
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