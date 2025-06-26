var equipe = [
    [`CONAM`,`http://oraculo.wederson.com/fifa/imagem/americas.png`,,0],
    
    [`Belize`,`http://oraculo.wederson.com/fifa/imagem/belize.webp`,
        {a:1.3,d:1.3,rat:1057},76],
    [`Bermuda`,`http://oraculo.wederson.com/fifa/imagem/bermuda.webp`,
        {a:1.3,d:1.3,rat:1169},77],
    [`Cuba`,`http://oraculo.wederson.com/fifa/imagem/cuba.webp`,
        {a:1.3,d:1.3,rat:1225},78],
    [`Dominicana`,`http://oraculo.wederson.com/fifa/imagem/dominicana.webp`,
        {a:1.3,d:1.3,rat:1291},79],
    [`Granada`,`http://oraculo.wederson.com/fifa/imagem/grenada.png`,
        {a:1.3,d:1.3,rat:1107},80],
    [`Guadalupe`,`http://oraculo.wederson.com/fifa/imagem/guadalupe.webp`,
        {a:1.3,d:1.3,rat:1354},81],
    [`Guiana`,`http://oraculo.wederson.com/fifa/imagem/guiana.webp`,
        {a:1.3,d:1.3,rat:1264},82],
    [`Guiana Francesa`,`http://oraculo.wederson.com/fifa/imagem/guianaf.webp`,
        {a:1.3,d:1.3,rat:1221},83],
    [`Haiti`,`http://oraculo.wederson.com/fifa/imagem/haiti.webp`,
        {a:1.3,d:1.3,rat:1467},84],
    [`S. Martin`,`http://oraculo.wederson.com/fifa/imagem/martin.jpeg`,
        {a:1.3,d:1.3,rat:1045},85],
    [`Martinica`,`http://oraculo.wederson.com/fifa/imagem/martinica.png`,
        {a:1.3,d:1.3,rat:1372},86],
    [`Nicarágua`,`http://oraculo.wederson.com/fifa/imagem/nicaragua.webp`,
        {a:1.3,d:1.3,rat:1325},87],
    [`Porto Rico`,`http://oraculo.wederson.com/fifa/imagem/puertorico.webp`,
        {a:1.3,d:1.3,rat:1135},88],
    [`Suriname`,`http://oraculo.wederson.com/fifa/imagem/suriname.webp`,
        {a:1.3,d:1.3,rat:1388},89],
    [`Trinidad y Tobago`,`http://oraculo.wederson.com/fifa/imagem/trinidad.webp`,
        {a:1.3,d:1.3,rat:1407},90],
    [`S. Vicente`,`http://oraculo.wederson.com/fifa/imagem/vicente.webp`,
        {a:1.3,d:1.3,rat:1141},91],
    [`Barbados`,`http://oraculo.wederson.com/fifa/imagem/barbados.webp`,
        {a:1.3,d:1.3,rat:939},92],
    [`S. Cristóvão`,`http://oraculo.wederson.com/fifa/imagem/cristovao.webp`,
        {a:1.3,d:1.3,rat:1026},93],
    [`Antigua`,`http://oraculo.wederson.com/fifa/imagem/antigua.webp`,
        {a:1.3,d:1.3,rat:910},94],
    [`S. Lúcia`,`http://oraculo.wederson.com/fifa/imagem/lucia.webp`,
        {a:1.3,d:1.3,rat:1045},95],
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