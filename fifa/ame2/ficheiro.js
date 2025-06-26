var equipe = [
    [`CONAM`,`http://oraculo.wederson.com/fifa/imagem/americas.png`,,0],
    
    [`Belize`,`http://oraculo.wederson.com/fifa/imagem/belize.webp`,
        {a:1.3,d:1.3,rat:1057},19],
    [`Bermuda`,`http://oraculo.wederson.com/fifa/imagem/bermuda.webp`,
        {a:1.3,d:1.3,rat:1169},20],
    [`Cuba`,`http://oraculo.wederson.com/fifa/imagem/cuba.webp`,
        {a:1.3,d:1.3,rat:1225},21],
    [`Dominicana`,`http://oraculo.wederson.com/fifa/imagem/dominicana.webp`,
        {a:1.3,d:1.3,rat:1291},23],
    [`Granada`,`http://oraculo.wederson.com/fifa/imagem/grenada.png`,
        {a:1.3,d:1.3,rat:1107},25],
    [`Guadalupe`,`http://oraculo.wederson.com/fifa/imagem/guadalupe.webp`,
        {a:1.3,d:1.3,rat:1354},26],
    [`Guiana`,`http://oraculo.wederson.com/fifa/imagem/guiana.webp`,
        {a:1.3,d:1.3,rat:1264},50],
    [`Guiana Francesa`,`http://oraculo.wederson.com/fifa/imagem/guianaf.webp`,
        {a:1.3,d:1.3,rat:1221},51],
    [`Haiti`,`http://oraculo.wederson.com/fifa/imagem/haiti.webp`,
        {a:1.3,d:1.3,rat:1467},27],
    [`S. Martin`,`http://oraculo.wederson.com/fifa/imagem/martin.jpeg`,
        {a:1.3,d:1.3,rat:1045},28],
    [`Martinica`,`http://oraculo.wederson.com/fifa/imagem/martinica.png`,
        {a:1.3,d:1.3,rat:1372},29],
    [`Nicarágua`,`http://oraculo.wederson.com/fifa/imagem/nicaragua.webp`,
        {a:1.3,d:1.3,rat:1325},30],
    [`Porto Rico`,`http://oraculo.wederson.com/fifa/imagem/puertorico.webp`,
        {a:1.3,d:1.3,rat:1135},31],
    [`Suriname`,`http://oraculo.wederson.com/fifa/imagem/suriname.webp`,
        {a:1.3,d:1.3,rat:1388},32],
    [`Trinidad y Tobago`,`http://oraculo.wederson.com/fifa/imagem/trinidad.webp`,
        {a:1.3,d:1.3,rat:1407},33],
    [`S. Vicente`,`http://oraculo.wederson.com/fifa/imagem/vicente.webp`,
        {a:1.3,d:1.3,rat:1141},34],
    [`Barbados`,`http://oraculo.wederson.com/fifa/imagem/barbados.webp`,
        {a:1.3,d:1.3,rat:939},39],
    [`S. Cristóvão`,`http://oraculo.wederson.com/fifa/imagem/cristovao.webp`,
        {a:1.3,d:1.3,rat:1026},42],
    [`Antigua`,`http://oraculo.wederson.com/fifa/imagem/antigua.webp`,
        {a:1.3,d:1.3,rat:910},36],
    [`S. Lúcia`,`http://oraculo.wederson.com/fifa/imagem/lucia.webp`,
        {a:1.3,d:1.3,rat:1045},44],
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