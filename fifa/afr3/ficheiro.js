var equipe = [
    [`AFC`,`http://oraculo.wederson.com/fifa/imagem/asia.png`,,0],
    
    [`R. Centro-Africana`,`http://oraculo.wederson.com/fifa/imagem/centro.webp`,
        {a:1.3,d:1.3,rat:1281},41],
    [`Guiné-Bissau`,`http://oraculo.wederson.com/fifa/imagem/guinebi.webp`,
        {a:1.3,d:1.3,rat:1267},42],
    [`Libéria`,`http://oraculo.wederson.com/fifa/imagem/liberia.webp`,
        {a:1.3,d:1.3,rat:1265},43],
    [`Malaui`,`http://oraculo.wederson.com/fifa/imagem/malaui.webp`,
        {a:1.3,d:1.3,rat:1259},44],
    [`Congo`,`http://oraculo.wederson.com/fifa/imagem/congo.webp`,
        {a:1.3,d:1.3,rat:1226},45],
    [`Lesoto`,`http://oraculo.wederson.com/fifa/imagem/lesoto.webp`,
        {a:1.3,d:1.3,rat:1225},46],
    [`Eswatini`,`http://oraculo.wederson.com/fifa/imagem/eswatini.webp`,
        {a:1.3,d:1.3,rat:1219},47],
    [`Tchade`,`http://oraculo.wederson.com/fifa/imagem/tchade.webp`,
        {a:1.3,d:1.3,rat:1153},48],
    [`Eritreia`,`http://oraculo.wederson.com/fifa/imagem/eritreia.webp`,
        {a:1.3,d:1.3,rat:1144},49],
    [`Sudão do Sul`,`http://oraculo.wederson.com/fifa/imagem/sudaodosul.webp`,
        {a:1.3,d:1.3,rat:1134},50],
    [`Il. Maurício`,`http://oraculo.wederson.com/fifa/imagem/mauricio.webp`,
        {a:1.3,d:1.3,rat:1095},51],
    [`S. Tomé e Príncipe`,`http://oraculo.wederson.com/fifa/imagem/tome.webp`,
        {a:1.3,d:1.3,rat:1041},52],
    [`Seicheles`,`http://oraculo.wederson.com/fifa/imagem/seicheles.webp`,
        {a:1.3,d:1.3,rat:851},55],
    [`Togo`,`http://oraculo.wederson.com/fifa/imagem/togo.webp`,
        {a:1.3,d:1.3,rat:1372},31],
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