var equipe = [
    [`Premier League`,`https://oraculo.wederson.net.br/inglaterra/imagem/eng1.png`,,0],// 0
    [`Blackburn`,`https://oraculo.wederson.net.br/inglaterra/imagem/blackburn.png`,
        {a:9/10,d:13/10},1], // 1
    [`Bristol`,`https://oraculo.wederson.net.br/inglaterra/imagem/bristol.png`,
        {a:13/10,d:10/10},2],// 2
    [`Burnley`,`https://oraculo.wederson.net.br/inglaterra/imagem/burnley.png`,
        {a:13/10,d:0/10},3],// 3
    [`Cardiff`,`https://oraculo.wederson.net.br/inglaterra/imagem/cardiff.png`,
        {a:13/10,d:16/10},4],// 4
    [`Coventry`,`https://oraculo.wederson.net.br/inglaterra/imagem/coventry.png`,
        {a:14/10,d:8/10},5],// 5
    [`Derby County`,`https://oraculo.wederson.net.br/inglaterra/imagem/derby.png`,
        {a:4/10,d:17/10},6],// 6
    [`Hull City`,`https://oraculo.wederson.net.br/inglaterra/imagem/hull.png`,
        {a:11/10,d:12/10},7],// 7
    [`Leeds United`,`https://oraculo.wederson.net.br/inglaterra/imagem/leeds.png`,
        {a:27/10,d:6/10},8],// 8
    [`Luton Town`,`https://oraculo.wederson.net.br/inglaterra/imagem/luton.png`,
        {a:5/10,d:14/10},9],// 9
    [`Middlesbrough`,`https://oraculo.wederson.net.br/inglaterra/imagem/middlesbrough.png`,
        {a:13/10,d:15/10},10],// 10
    [`Millwall`,`https://oraculo.wederson.net.br/inglaterra/imagem/millwall.png`,
        {a:11/10,d:14/10},11],// 11
    [`Norwich`,`https://oraculo.wederson.net.br/inglaterra/imagem/norwich.png`,
        {a:15/10,d:11/10},12],// 12
    [`Oxford United`,`https://oraculo.wederson.net.br/inglaterra/imagem/oxford.png`,
        {a:7/10,d:9/10},13],// 13
    [`Plymouth Argyle`,`https://oraculo.wederson.net.br/inglaterra/imagem/plymouth.png`,
        {a:13/10,d:16/10},14],// 14
    [`Preston North End`,`https://oraculo.wederson.net.br/inglaterra/imagem/preston.png`,
        {a:10/10,d:11/10},15],// 15
    [`Portsmouth`,`https://oraculo.wederson.net.br/inglaterra/imagem/portsmouth.png`,
        {a:17/10,d:12/10},16],// 16
    [`Queens Park Rangers`,`https://oraculo.wederson.net.br/inglaterra/imagem/qpr.png`,
        {a:16/10,d:11/10},17],// 17
    [`Sheffield United`,`https://oraculo.wederson.net.br/inglaterra/imagem/sheffieldu.png`,
        {a:15/10,d:12/10},18],// 18
    [`Sheffield Wednesday`,`https://oraculo.wederson.net.br/inglaterra/imagem/sheffieldw.png`,
        {a:14/10,d:18/10},19],// 19
    [`Stoke City`,`https://oraculo.wederson.net.br/inglaterra/imagem/stoke.png`,
        {a:10/10,d:15/10},20],// 20
    [`Sunderland`,`https://oraculo.wederson.net.br/inglaterra/imagem/sunderland.png`,
        {a:14/10,d:10/10},20],// 21
    [`Swansea City`,`https://oraculo.wederson.net.br/inglaterra/imagem/swansea.png`,
        {a:8/10,d:21/10},20],// 22
    [`Watford`,`https://oraculo.wederson.net.br/inglaterra/imagem/watford.png`,
        {a:11/10,d:16/10},20],// 23
    [`West Bromwich Albion`,`https://oraculo.wederson.net.br/inglaterra/imagem/wba.png`,
        {a:16/10,d:12/10},20],// 24
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],
    [equipe[1][0],[,]/*BLA */,[3,0]/*BRI */,[0,1]/*BUR */,[,]/*CAR */,[0,2]/*COV */,[4,2]/*DER */,[0,1]/*HUL */,[1,0]/*LEE */,[2,0]/*LUT */,[,]/*MID */,[,]/*MIL */,[,]/*NOR */,[2,1]/*OXF */,[2,0]/*PLY */,[2,1]/*PNE */,[3,0]/*POR */,[2,0]/*QPR */,[0,2]/*SHU */,[,]/*SHW */,[0,2]/*STO */,[2,2]/*SUN */,[1,0]/*SWA */,[,]/*WAT */,[0,0]/*WBA */],
    [equipe[2][0],[2,1]/*BLA */,[,]/*BRI */,[0,1]/*BUR */,[1,1]/*CAR */,[1,1]/*COV */,[1,0]/*DER */,[,]/*HUL */,[0,0]/*LEE */,[1,0]/*LUT */,[2,1]/*MID */,[4,3]/*MIL */,[,]/*NOR */,[2,1]/*OXF */,[4,0]/*PLY */,[,]/*PNE */,[3,0]/*POR */,[1,1]/*QPR */,[1,2]/*SHU */,[0,0]/*SHW */,[2,0]/*STO */,[,]/*SUN */,[0,1]/*SWA */,[,]/*WAT */,[,]/*WBA */],
    [equipe[3][0],[1,1]/*BLA */,[,]/*BRI */,[,]/*BUR */,[5,0]/*CAR */,[2,0]/*COV */,[0,0]/*DER */,[2,0]/*HUL */,[0,0]/*LEE */,[,]/*LUT */,[1,1]/*MID */,[,]/*MIL */,[,]/*NOR */,[1,0]/*OXF */,[1,0]/*PLY */,[0,0]/*PNE */,[2,1]/*POR */,[0,0]/*QPR */,[,]/*SHU */,[4,0]/*SHW */,[0,0]/*STO */,[0,0]/*SUN */,[1,0]/*SWA */,[2,1]/*WAT */,[,]/*WBA */],
    [equipe[4][0],[1,3]/*BLA */,[1,1]/*BRI */,[,]/*BUR */,[,]/*CAR */,[1,1]/*COV */,[2,1]/*DER */,[1,0]/*HUL */,[0,2]/*LEE */,[,]/*LUT */,[0,2]/*MID */,[1,0]/*MIL */,[2,1]/*NOR */,[,]/*OXF */,[5,0]/*PLY */,[0,2]/*PNE */,[2,0]/*POR */,[0,2]/*QPR */,[0,2]/*SHU */,[,]/*SHW */,[,]/*STO */,[0,2]/*SUN */,[3,0]/*SWA */,[1,1]/*WAT */,[,]/*WBA */],
    [equipe[5][0],[3,0]/*BLA */,[1,0]/*BRI */,[,]/*BUR */,[2,2]/*CAR */,[,]/*COV */,[1,2]/*DER */,[2,1]/*HUL */,[0,2]/*LEE */,[3,2]/*LUT */,[,]/*MID */,[0,0]/*MIL */,[0,1]/*NOR */,[3,2]/*OXF */,[4,0]/*PLY */,[2,1]/*PNE */,[,]/*POR */,[1,0]/*QPR */,[2,2]/*SHU */,[1,2]/*SHW */,[,]/*STO */,[,]/*SUN */,[1,2]/*SWA */,[2,1]/*WAT */,[,]/*WBA */],
    [equipe[6][0],[,]/*BLA */,[3,0]/*BRI */,[,]/*BUR */,[1,0]/*CAR */,[,]/*COV */,[,]/*DER */,[1,1]/*HUL */,[0,1]/*LEE */,[,]/*LUT */,[1,0]/*MID */,[0,1]/*MIL */,[2,3]/*NOR */,[0,0]/*OXF */,[1,1]/*PLY */,[,]/*PNE */,[4,0]/*POR */,[2,0]/*QPR */,[0,1]/*SHU */,[1,2]/*SHW */,[,]/*STO */,[0,1]/*SUN */,[1,2]/*SWA */,[0,2]/*WAT */,[2,1]/*WBA */],
    [equipe[7][0],[0,1]/*BLA */,[1,1]/*BRI */,[1,1]/*BUR */,[4,1]/*CAR */,[,]/*COV */,[,]/*DER */,[,]/*HUL */,[3,3]/*LEE */,[,]/*LUT */,[0,1]/*MID */,[0,0]/*MIL */,[1,1]/*NOR */,[,]/*OXF */,[,]/*PLY */,[,]/*PNE */,[1,1]/*POR */,[1,2]/*QPR */,[0,2]/*SHU */,[0,2]/*SHW */,[1,2]/*STO */,[0,1]/*SUN */,[2,1]/*SWA */,[1,1]/*WAT */,[1,2]/*WBA */],
    [equipe[8][0],[1,1]/*BLA */,[,]/*BRI */,[0,1]/*BUR */,[7,0]/*CAR */,[3,0]/*COV */,[2,0]/*DER */,[2,0]/*HUL */,[,]/*LEE */,[3,0]/*LUT */,[3,1]/*MID */,[,]/*MIL */,[2,0]/*NOR */,[4,0]/*OXF */,[3,0]/*PLY */,[,]/*PNE */,[3,3]/*POR */,[2,0]/*QPR */,[2,0]/*SHU */,[3,0]/*SHW */,[,]/*STO */,[2,1]/*SUN */,[,]/*SWA */,[2,1]/*WAT */,[,]/*WBA */],
    [equipe[9][0],[,]/*BLA */,[,]/*BRI */,[1,4]/*BUR */,[1,0]/*CAR */,[,]/*COV */,[2,1]/*DER */,[1,0]/*HUL */,[,]/*LEE */,[,]/*LUT */,[,]/*MID */,[0,1]/*MIL */,[0,1]/*NOR */,[2,2]/*OXF */,[1,1]/*PLY */,[0,0]/*PNE */,[,]/*POR */,[1,2]/*QPR */,[0,1]/*SHU */,[2,1]/*SHW */,[2,1]/*STO */,[1,2]/*SUN */,[1,1]/*SWA */,[3,0]/*WAT */,[1,1]/*WBA */],
    [equipe[10][0],[0,1]/*BLA */,[0,2]/*BRI */,[0,0]/*BUR */,[1,1]/*CAR */,[0,3]/*COV */,[,]/*DER */,[3,1]/*HUL */,[,]/*LEE */,[5,1]/*LUT */,[,]/*MID */,[1,0]/*MIL */,[,]/*NOR */,[,]/*OXF */,[,]/*PLY */,[1,1]/*PNE */,[2,2]/*POR */,[,]/*QPR */,[1,0]/*SHU */,[3,3]/*SHW */,[2,0]/*STO */,[2,3]/*SUN */,[1,0]/*SWA */,[0,1]/*WAT */,[2,0]/*WBA */],
    [equipe[11][0],[1,0]/*BLA */,[,]/*BRI */,[1,0]/*BUR */,[2,2]/*CAR */,[0,1]/*COV */,[1,1]/*DER */,[0,1]/*HUL */,[1,0]/*LEE */,[0,1]/*LUT */,[,]/*MID */,[,]/*MIL */,[,]/*NOR */,[0,1]/*OXF */,[1,0]/*PLY */,[3,1]/*PNE */,[,]/*POR */,[2,1]/*QPR */,[0,1]/*SHU */,[3,0]/*SHW */,[,]/*STO */,[1,1]/*SUN */,[,]/*SWA */,[2,3]/*WAT */,[1,1]/*WBA */],
    [equipe[12][0],[2,2]/*BLA */,[0,2]/*BRI */,[1,2]/*BUR */,[,]/*CAR */,[2,1]/*COV */,[1,1]/*DER */,[4,0]/*HUL */,[1,1]/*LEE */,[4,2]/*LUT */,[3,3]/*MID */,[2,1]/*MIL */,[,]/*NOR */,[,]/*OXF */,[6,1]/*PLY */,[0,1]/*PNE */,[,]/*POR */,[1,1]/*QPR */,[1,1]/*SHU */,[,]/*SHW */,[4,2]/*STO */,[,]/*SUN */,[5,1]/*SWA */,[4,1]/*WAT */,[,]/*WBA */],
    [equipe[13][0],[1,0]/*BLA */,[1,1]/*BRI */,[0,0]/*BUR */,[3,2]/*CAR */,[,]/*COV */,[1,1]/*DER */,[1,0]/*HUL */,[,]/*LEE */,[3,2]/*LUT */,[2,6]/*MID */,[1,1]/*MIL */,[2,0]/*NOR */,[,]/*OXF */,[2,0]/*PLY */,[3,1]/*PNE */,[0,2]/*POR */,[,]/*QPR */,[,]/*SHU */,[1,3]/*SHW */,[1,0]/*STO */,[,]/*SUN */,[1,2]/*SWA */,[,]/*WAT */,[1,1]/*WBA */],
    [equipe[14][0],[2,1]/*BLA */,[2,2]/*BRI */,[0,5]/*BUR */,[1,1]/*CAR */,[,]/*COV */,[,]/*DER */,[1,1]/*HUL */,[,]/*LEE */,[3,1]/*LUT */,[3,3]/*MID */,[5,1]/*MIL */,[,]/*NOR */,[1,1]/*OXF */,[,]/*PLY */,[3,3]/*PNE */,[1,0]/*POR */,[0,1]/*QPR */,[,]/*SHU */,[,]/*SHW */,[0,1]/*STO */,[3,2]/*SUN */,[1,2]/*SWA */,[2,2]/*WAT */,[2,1]/*WBA */],
    [equipe[15][0],[0,0]/*BLA */,[1,3]/*BRI */,[0,0]/*BUR */,[,]/*CAR */,[1,0]/*COV */,[1,1]/*DER */,[1,0]/*HUL */,[1,1]/*LEE */,[1,0]/*LUT */,[2,1]/*MID */,[1,1]/*MIL */,[2,2]/*NOR */,[1,1]/*OXF */,[,]/*PLY */,[,]/*PNE */,[,]/*POR */,[,]/*QPR */,[0,2]/*SHU */,[3,1]/*SHW */,[,]/*STO */,[0,0]/*SUN */,[,]/*SWA */,[3,0]/*WAT */,[1,1]/*WBA */],
    [equipe[16][0],[,]/*BLA */,[3,0]/*BRI */,[0,0]/*BUR */,[2,1]/*CAR */,[4,1]/*COV */,[,]/*DER */,[,]/*HUL */,[,]/*LEE */,[0,0]/*LUT */,[2,1]/*MID */,[0,1]/*MIL */,[0,0]/*NOR */,[1,1]/*OXF */,[,]/*PLY */,[3,1]/*PNE */,[,]/*POR */,[2,1]/*QPR */,[0,0]/*SHU */,[1,2]/*SHW */,[3,1]/*STO */,[1,3]/*SUN */,[4,0]/*SWA */,[,]/*WAT */,[0,3]/*WBA */],
    [equipe[17][0],[2,1]/*BLA */,[,]/*BRI */,[,]/*BUR */,[,]/*CAR */,[1,1]/*COV */,[4,0]/*DER */,[1,3]/*HUL */,[,]/*LEE */,[2,1]/*LUT */,[1,4]/*MID */,[1,1]/*MIL */,[3,0]/*NOR */,[2,0]/*OXF */,[1,1]/*PLY */,[2,1]/*PNE */,[1,2]/*POR */,[,]/*QPR */,[,]/*SHU */,[0,2]/*SHW */,[1,1]/*STO */,[0,0]/*SUN */,[,]/*SWA */,[3,1]/*WAT */,[1,3]/*WBA */],
    [equipe[18][0],[,]/*BLA */,[,]/*BRI */,[0,2]/*BUR */,[,]/*CAR */,[,]/*COV */,[1,0]/*DER */,[0,3]/*HUL */,[1,3]/*LEE */,[2,0]/*LUT */,[3,1]/*MID */,[,]/*MIL */,[2,0]/*NOR */,[3,0]/*OXF */,[2,0]/*PLY */,[,]/*PNE */,[2,1]/*POR */,[2,2]/*QPR */,[,]/*SHU */,[1,0]/*SHW */,[2,0]/*STO */,[1,0]/*SUN */,[1,0]/*SWA */,[1,0]/*WAT */,[1,1]/*WBA */],
    [equipe[19][0],[0,1]/*BLA */,[2,2]/*BRI */,[0,2]/*BUR */,[1,1]/*CAR */,[1,2]/*COV */,[4,2]/*DER */,[,]/*HUL */,[0,2]/*LEE */,[1,1]/*LUT */,[,]/*MID */,[2,2]/*MIL */,[2,0]/*NOR */,[,]/*OXF */,[4,0]/*PLY */,[1,1]/*PNE */,[,]/*POR */,[1,1]/*QPR */,[,]/*SHU */,[,]/*SHW */,[2,0]/*STO */,[,]/*SUN */,[0,0]/*SWA */,[2,6]/*WAT */,[3,2]/*WBA */],
    [equipe[20][0],[,]/*BLA */,[2,2]/*BRI */,[0,2]/*BUR */,[2,2]/*CAR */,[1,0]/*COV */,[2,1]/*DER */,[1,3]/*HUL */,[0,2]/*LEE */,[,]/*LUT */,[1,3]/*MID */,[1,1]/*MIL */,[1,1]/*NOR */,[0,0]/*OXF */,[0,0]/*PLY */,[0,0]/*PNE */,[6,1]/*POR */,[,]/*QPR */,[,]/*SHU */,[,]/*SHW */,[,]/*STO */,[1,0]/*SUN */,[3,1]/*SWA */,[,]/*WAT */,[1,2]/*WBA */],
    [equipe[21][0],[,]/*BLA */,[1,1]/*BRI */,[1,0]/*BUR */,[,]/*CAR */,[2,2]/*COV */,[2,0]/*DER */,[0,1]/*HUL */,[2,2]/*LEE */,[2,0]/*LUT */,[1,0]/*MID */,[,]/*MIL */,[2,1]/*NOR */,[2,0]/*OXF */,[2,2]/*PLY */,[,]/*PNE */,[1,0]/*POR */,[,]/*QPR */,[2,1]/*SHU */,[4,0]/*SHW */,[2,1]/*STO */,[,]/*SUN */,[,]/*SWA */,[2,2]/*WAT */,[0,0]/*WBA */],
    [equipe[22][0],[3,0]/*BLA */,[1,1]/*BRI */,[,]/*BUR */,[1,1]/*CAR */,[0,2]/*COV */,[,]/*DER */,[,]/*HUL */,[3,4]/*LEE */,[2,1]/*LUT */,[,]/*MID */,[0,1]/*MIL */,[1,0]/*NOR */,[,]/*OXF */,[,]/*PLY */,[3,0]/*PNE */,[2,2]/*POR */,[3,0]/*QPR */,[1,2]/*SHU */,[0,1]/*SHW */,[0,0]/*STO */,[2,3]/*SUN */,[,]/*SWA */,[1,0]/*WAT */,[1,1]/*WBA */],
    [equipe[23][0],[1,0]/*BLA */,[1,0]/*BRI */,[,]/*BUR */,[1,2]/*CAR */,[1,1]/*COV */,[2,1]/*DER */,[,]/*HUL */,[0,4]/*LEE */,[2,0]/*LUT */,[2,1]/*MID */,[,]/*MIL */,[0,1]/*NOR */,[1,0]/*OXF */,[,]/*PLY */,[1,2]/*PNE */,[2,1]/*POR */,[0,0]/*QPR */,[1,2]/*SHU */,[,]/*SHW */,[3,0]/*STO */,[2,1]/*SUN */,[,]/*SWA */,[,]/*WAT */,[2,1]/*WBA */],
    [equipe[24][0],[0,2]/*BLA */,[2,0]/*BRI */,[0,0]/*BUR */,[0,0]/*CAR */,[2,0]/*COV */,[,]/*DER */,[,]/*HUL */,[0,0]/*LEE */,[,]/*LUT */,[0,1]/*MID */,[0,0]/*MIL */,[2,2]/*NOR */,[2,0]/*OXF */,[1,0]/*PLY */,[3,1]/*PNE */,[5,1]/*POR */,[,]/*QPR */,[2,2]/*SHU */,[2,1]/*SHW */,[1,1]/*STO */,[,]/*SUN */,[1,0]/*SWA */,[,]/*WAT */,[,]/*WBA */]    
]