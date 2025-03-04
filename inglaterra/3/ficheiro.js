var equipe = [
    [`EFL League One`,`https://oraculo.wederson.net.br/inglaterra/imagem/eng3.png`,,0],// 0

    [`Barnsley`,`https://oraculo.wederson.net.br/inglaterra/imagem/barnsley.png`,
        {a:9/10,d:13/10},1], // 1
    [`Birmingham`,`https://oraculo.wederson.net.br/inglaterra/imagem/birmingham.png`,
        {a:13/10,d:10/10},2],// 2
    [`Blackpool`,`https://oraculo.wederson.net.br/inglaterra/imagem/blackpool.png`,
        {a:13/10,d:0/10},3],// 3
    [`Bolton`,`https://oraculo.wederson.net.br/inglaterra/imagem/bolton.png`,
        {a:13/10,d:16/10},4],// 4
    [`Bristol Rovers`,`https://oraculo.wederson.net.br/inglaterra/imagem/bristolrovers.png`,
        {a:14/10,d:8/10},5],// 5
    [`Burton`,`https://oraculo.wederson.net.br/inglaterra/imagem/burton.png`,
        {a:4/10,d:17/10},6],// 6
    [`Cambrigde`,`https://oraculo.wederson.net.br/inglaterra/imagem/cambrigde.png`,
        {a:11/10,d:12/10},7],// 7
    [`Charlton`,`https://oraculo.wederson.net.br/inglaterra/imagem/charlton.png`,
        {a:27/10,d:6/10},8],// 8
    [`Crawley`,`https://oraculo.wederson.net.br/inglaterra/imagem/crawley.png`,
        {a:5/10,d:14/10},9],// 9
    [`Exeter`,`https://oraculo.wederson.net.br/inglaterra/imagem/exeter.png`,
        {a:13/10,d:15/10},10],// 10
    [`Huddersfield`,`https://oraculo.wederson.net.br/inglaterra/imagem/huddersfield.png`,
        {a:11/10,d:14/10},11],// 11
    [`Leyton Orient`,`https://oraculo.wederson.net.br/inglaterra/imagem/leyton.png`,
        {a:15/10,d:11/10},12],// 12
    [`Lincoln`,`https://oraculo.wederson.net.br/inglaterra/imagem/lincoln.png`,
        {a:7/10,d:9/10},13],// 13
    [`Mansfield Town`,`https://oraculo.wederson.net.br/inglaterra/imagem/mansfield.png`,
        {a:13/10,d:16/10},14],// 14
    [`Northampton Town`,`https://oraculo.wederson.net.br/inglaterra/imagem/northampton.png`,
        {a:10/10,d:11/10},15],// 15
    [`Peterborough United`,`https://oraculo.wederson.net.br/inglaterra/imagem/peterborough.png`,
        {a:17/10,d:12/10},16],// 16
    [`Reading`,`https://oraculo.wederson.net.br/inglaterra/imagem/reading.png`,
        {a:16/10,d:11/10},17],// 17
    [`Rotherham United`,`https://oraculo.wederson.net.br/inglaterra/imagem/rotherham.png`,
        {a:15/10,d:12/10},18],// 18
    [`Shrewsbury Town`,`https://oraculo.wederson.net.br/inglaterra/imagem/shrewsbury.png`,
        {a:14/10,d:18/10},19],// 19
    [`Stevenage`,`https://oraculo.wederson.net.br/inglaterra/imagem/stevenage.png`,
        {a:10/10,d:15/10},20],// 20
    [`Stockport County`,`https://oraculo.wederson.net.br/inglaterra/imagem/stockport.png`,
        {a:14/10,d:8/10},20],// 21
    [`Wigan Athletic`,`https://oraculo.wederson.net.br/inglaterra/imagem/wigan.png`,
        {a:8/10,d:21/10},20],// 22
    [`Wrexham`,`https://oraculo.wederson.net.br/inglaterra/imagem/wrexham.png`,
        {a:11/10,d:16/10},20],// 23
    [`Wycombe`,`https://oraculo.wederson.net.br/inglaterra/imagem/wycombe.png`,
        {a:16/10,d:12/10},20],// 24
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],
    [equipe[1][0],[,]/*BAR */,[1,2]/*BIR */,[,]/*BLA */,[,]/*BOL */,[2,1]/*BRI */,[0,0]/*BRT */,[,]/*CAM */,[2,2]/*CHA */,[3,0]/*CRA */,[,]/*EXE */,[1,2]/*HUD */,[0,4]/*LEY */,[,]/*LIN */,[1,2]/*MAN */,[2,2]/*NOR */,[,]/*PET */,[2,2]/*REA */,[2,0]/*ROT */,[,]/*SHR */,[0,1]/*STE */,[1,1]/*STK */,[0,1]/*WIG */,[2,1]/*WRX */,[2,2]/*WYC */],
    [equipe[2][0],[,]/*BAR */,[,]/*BIR */,[0,0]/*BLA */,[2,0]/*BOL */,[2,0]/*BRI */,[2,0]/*BRT */,[4,0]/*CAM */,[1,0]/*CHA */,[,]/*CRA */,[1,0]/*EXE */,[1,0]/*HUD */,[2,0]/*LEY */,[,]/*LIN */,[,]/*MAN */,[1,1]/*NOR */,[3,2]/*PET */,[1,1]/*REA */,[2,1]/*ROT */,[,]/*SHR */,[,]/*STE */,[2,0]/*STK */,[2,1]/*WIG */,[3,1]/*WRX */,[,]/*WYC */],
    [equipe[3][0],[1,2]/*BAR */,[,]/*BIR */,[,]/*BLA */,[,]/*BOL */,[,]/*BRI */,[3,0]/*BRT */,[,]/*CAM */,[2,2]/*CHA */,[3,1]/*CRA */,[2,1]/*EXE */,[2,2]/*HUD */,[,]/*LEY */,[1,1]/*LIN */,[3,3]/*MAN */,[0,0]/*NOR */,[,]/*PET */,[,]/*REA */,[0,0]/*ROT */,[1,1]/*SHR */,[0,0]/*STE */,[0,3]/*STK */,[2,2]/*WIG */,[,]/*WRX */,[2,2]/*WYC */],
    [equipe[4][0],[1,2]/*BAR */,[,]/*BIR */,[2,1]/*BLA */,[,]/*BOL */,[,]/*BRI */,[2,1]/*BRT */,[2,2]/*CAM */,[1,2]/*CHA */,[4,3]/*CRA */,[0,2]/*EXE */,[0,4]/*HUD */,[2,1]/*LEY */,[3,0]/*LIN */,[3,1]/*MAN */,[3,1]/*NOR */,[1,0]/*PET */,[5,2]/*REA */,[,]/*ROT */,[2,2]/*SHR */,[,]/*STE */,[,]/*STK */,[0,2]/*WIG */,[0,0]/*WRX */,[,]/*WYC */],
    [equipe[5][0],[3,1]/*BAR */,[,]/*BIR */,[0,2]/*BLA */,[,]/*BOL */,[,]/*BRI */,[3,1]/*BRT */,[2,0]/*CAM */,[3,2]/*CHA */,[0,0]/*CRA */,[,]/*EXE */,[,]/*HUD */,[,]/*LEY */,[1,1]/*LIN */,[,]/*MAN */,[1,0]/*NOR */,[3,1]/*PET */,[,]/*REA */,[,]/*ROT */,[1,0]/*SHR */,[,]/*STE */,[1,1]/*STK */,[0,4]/*WIG */,[1,1]/*WRX */,[1,2]/*WYC */],
    [equipe[6][0],[1,2]/*BAR */,[,]/*BIR */,[1,1]/*BLA */,[,]/*BOL */,[1,3]/*BRI */,[,]/*BRT */,[,]/*CAM */,[0,1]/*CHA */,[0,0]/*CRA */,[1,2]/*EXE */,[,]/*HUD */,[,]/*LEY */,[2,3]/*LIN */,[,]/*MAN */,[0,1]/*NOR */,[2,2]/*PET */,[3,2]/*REA */,[4,2]/*ROT */,[2,0]/*SHR */,[0,0]/*STE */,[0,3]/*STK */,[,]/*WIG */,[0,1]/*WRX */,[2,3]/*WYC */],
    [equipe[7][0],[1,1]/*BAR */,[,]/*BIR */,[4,4]/*BLA */,[1,1]/*BOL */,[0,1]/*BRI */,[1,0]/*BRT */,[,]/*CAM */,[,]/*CHA */,[0,1]/*CRA */,[0,1]/*EXE */,[0,4]/*HUD */,[,]/*LEY */,[0,2]/*LIN */,[3,2]/*MAN */,[,]/*NOR */,[,]/*PET */,[1,3]/*REA */,[0,1]/*ROT */,[4,1]/*SHR */,[,]/*STE */,[2,0]/*STK */,[2,0]/*WIG */,[,]/*WRX */,[1,1]/*WYC */],
    [equipe[8][0],[,]/*BAR */,[1,0]/*BIR */,[1,2]/*BLA */,[2,0]/*BOL */,[2,0]/*BRI */,[,]/*BRT */,[2,1]/*CAM */,[,]/*CHA */,[1,2]/*CRA */,[3,0]/*EXE */,[,]/*HUD */,[1,0]/*LEY */,[,]/*LIN */,[0,0]/*MAN */,[,]/*NOR */,[2,1]/*PET */,[0,0]/*REA */,[1,1]/*ROT */,[1,0]/*SHR */,[2,0]/*STE */,[1,1]/*STK */,[,]/*WIG */,[2,2]/*WRX */,[2,1]/*WYC */],
    [equipe[9][0],[0,3]/*BAR */,[0,1]/*BIR */,[2,1]/*BLA */,[0,2]/*BOL */,[,]/*BRI */,[1,1]/*BRT */,[,]/*CAM */,[,]/*CHA */,[,]/*CRA */,[,]/*EXE */,[2,2]/*HUD */,[,]/*LEY */,[3,0]/*LIN */,[0,2]/*MAN */,[,]/*NOR */,[,]/*PET */,[,]/*REA */,[1,0]/*ROT */,[3,5]/*SHR */,[3,1]/*STE */,[1,1]/*STK */,[1,1]/*WIG */,[1,2]/*WRX */,[1,1]/*WYC */],
    [equipe[10][0],[1,2]/*BAR */,[0,2]/*BIR */,[1,3]/*BLA */,[1,2]/*BOL */,[3,1]/*BRI */,[,]/*BRT */,[1,0]/*CAM */,[1,0]/*CHA */,[4,4]/*CRA */,[,]/*EXE */,[,]/*HUD */,[2,6]/*LEY */,[0,0]/*LIN */,[,]/*MAN */,[,]/*NOR */,[1,2]/*PET */,[1,2]/*REA */,[1,0]/*ROT */,[,]/*SHR */,[2,0]/*STE */,[,]/*STK */,[,]/*WIG */,[,]/*WRX */,[2,2]/*WYC */],
    [equipe[11][0],[2,0]/*BAR */,[0,1]/*BIR */,[0,2]/*BLA */,[0,1]/*BOL */,[3,1]/*BRI */,[1,1]/*BRT */,[,]/*CAM */,[2,1]/*CHA */,[,]/*CRA */,[2,0]/*EXE */,[,]/*HUD */,[,]/*LEY */,[2,2]/*LIN */,[,]/*MAN */,[1,3]/*NOR */,[0,1]/*PET */,[0,0]/*REA */,[0,0]/*ROT */,[1,0]/*SHR */,[2,1]/*STE */,[1,0]/*STK */,[1,0]/*WIG */,[,]/*WRX */,[,]/*WYC */],
    [equipe[12][0],[,]/*BAR */,[1,2]/*BIR */,[3,0]/*BLA */,[1,2]/*BOL */,[3,0]/*BRI */,[0,0]/*BRT */,[2,0]/*CAM */,[,]/*CHA */,[3,0]/*CRA */,[0,1]/*EXE */,[0,2]/*HUD */,[,]/*LEY */,[3,2]/*LIN */,[3,0]/*MAN */,[,]/*NOR */,[2,2]/*PET */,[2,0]/*REA */,[1,0]/*ROT */,[1,0]/*SHR */,[,]/*STE */,[0,1]/*STK */,[,]/*WIG */,[0,0]/*WRX */,[,]/*WYC */],
    [equipe[13][0],[1,2]/*BAR */,[1,3]/*BIR */,[0,2]/*BLA */,[,]/*BOL */,[,]/*BRI */,[0,1]/*BRT */,[1,1]/*CAM */,[0,0]/*CHA */,[,]/*CRA */,[,]/*EXE */,[,]/*HUD */,[2,1]/*LEY */,[,]/*LIN */,[4,1]/*MAN */,[2,1]/*NOR */,[5,1]/*PET */,[2,0]/*REA */,[0,1]/*ROT */,[,]/*SHR */,[0,0]/*STE */,[2,1]/*STK */,[0,0]/*WIG */,[,]/*WRX */,[2,3]/*WYC */],
    [equipe[14][0],[,]/*BAR */,[1,1]/*BIR */,[2,0]/*BLA */,[2,1]/*BOL */,[0,1]/*BRI */,[3,3]/*BRT */,[2,1]/*CAM */,[,]/*CHA */,[0,1]/*CRA */,[,]/*EXE */,[1,2]/*HUD */,[,]/*LEY */,[0,3]/*LIN */,[,]/*MAN */,[0,1]/*NOR */,[,]/*PET */,[,]/*REA */,[1,0]/*ROT */,[2,1]/*SHR */,[0,1]/*STE */,[1,1]/*STK */,[,]/*WIG */,[1,2]/*WRX */,[1,2]/*WYC */],
    [equipe[15][0],[1,2]/*BAR */,[,]/*BIR */,[,]/*BLA */,[2,4]/*BOL */,[2,1]/*BRI */,[0,0]/*BRT */,[0,0]/*CAM */,[0,5]/*CHA */,[3,0]/*CRA */,[2,1]/*EXE */,[3,2]/*HUD */,[1,0]/*LEY */,[0,1]/*LIN */,[0,2]/*MAN */,[,]/*NOR */,[2,1]/*PET */,[,]/*REA */,[,]/*ROT */,[,]/*SHR */,[0,0]/*STE */,[,]/*STK */,[,]/*WIG */,[0,2]/*WRX */,[1,2]/*WYC */],
    [equipe[16][0],[1,3]/*BAR */,[,]/*BIR */,[5,1]/*BLA */,[,]/*BOL */,[3,2]/*BRI */,[0,1]/*BRT */,[6,1]/*CAM */,[,]/*CHA */,[4,3]/*CRA */,[1,1]/*EXE */,[0,2]/*HUD */,[0,0]/*LEY */,[1,1]/*LIN */,[0,3]/*MAN */,[,]/*NOR */,[,]/*PET */,[1,2]/*REA */,[3,3]/*ROT */,[,]/*SHR */,[2,1]/*STE */,[,]/*STK */,[1,0]/*WIG */,[0,2]/*WRX */,[,]/*WYC */],
    [equipe[17][0],[,]/*BAR */,[0,0]/*BIR */,[0,3]/*BLA */,[1,0]/*BOL */,[1,0]/*BRI */,[3,1]/*BRT */,[3,0]/*CAM */,[2,0]/*CHA */,[4,1]/*CRA */,[,]/*EXE */,[2,1]/*HUD */,[0,1]/*LEY */,[,]/*LIN */,[2,1]/*MAN */,[4,1]/*NOR */,[,]/*PET */,[,]/*REA */,[2,1]/*ROT */,[1,1]/*SHR */,[,]/*STE */,[1,3]/*STK */,[2,0]/*WIG */,[,]/*WRX */,[,]/*WYC */],
    [equipe[18][0],[0,1]/*BAR */,[0,2]/*BIR */,[,]/*BLA */,[3,1]/*BOL */,[0,0]/*BRI */,[2,2]/*BRT */,[2,1]/*CAM */,[4,2]/*CHA */,[,]/*CRA */,[,]/*EXE */,[2,1]/*HUD */,[,]/*LEY */,[2,1]/*LIN */,[,]/*MAN */,[3,0]/*NOR */,[,]/*PET */,[2,1]/*REA */,[,]/*ROT */,[1,2]/*SHR */,[2,0]/*STE */,[1,1]/*STK */,[0,1]/*WIG */,[0,1]/*WRX */,[,]/*WYC */],
    [equipe[19][0],[0,2]/*BAR */,[3,2]/*BIR */,[1,2]/*BLA */,[2,3]/*BOL */,[,]/*BRI */,[,]/*BRT */,[,]/*CAM */,[0,1]/*CHA */,[,]/*CRA */,[0,2]/*EXE */,[0,1]/*HUD */,[3,0]/*LEY */,[1,0]/*LIN */,[2,1]/*MAN */,[1,1]/*NOR */,[1,4]/*PET */,[,]/*REA */,[1,1]/*ROT */,[,]/*SHR */,[0,1]/*STE */,[0,2]/*STK */,[,]/*WIG */,[2,1]/*WRX */,[1,4]/*WYC */],
    [equipe[20][0],[3,0]/*BAR */,[,]/*BIR */,[,]/*BLA */,[1,4]/*BOL */,[3,0]/*BRI */,[0,1]/*BRT */,[0,2]/*CAM */,[1,0]/*CHA */,[,]/*CRA */,[4,1]/*EXE */,[,]/*HUD */,[0,0]/*LEY */,[0,1]/*LIN */,[,]/*MAN */,[2,0]/*NOR */,[1,1]/*PET */,[1,1]/*REA */,[,]/*ROT */,[1,0]/*SHR */,[,]/*STE */,[2,1]/*STK */,[1,2]/*WIG */,[1,0]/*WRX */,[0,3]/*WYC */],
    [equipe[21][0],[2,1]/*BAR */,[1,1]/*BIR */,[,]/*BLA */,[5,0]/*BOL */,[2,0]/*BRI */,[,]/*BRT */,[2,0]/*CAM */,[,]/*CHA */,[2,0]/*CRA */,[2,0]/*EXE */,[,]/*HUD */,[1,4]/*LEY */,[,]/*LIN */,[1,2]/*MAN */,[1,1]/*NOR */,[2,1]/*PET */,[4,1]/*REA */,[,]/*ROT */,[1,0]/*SHR */,[,]/*STE */,[,]/*STK */,[0,0]/*WIG */,[1,0]/*WRX */,[0,5]/*WYC */],
    [equipe[22][0],[,]/*BAR */,[0,3]/*BIR */,[,]/*BLA */,[,]/*BOL */,[2,0]/*BRI */,[1,2]/*BRT */,[,]/*CAM */,[0,1]/*CHA */,[1,0]/*CRA */,[0,0]/*EXE */,[2,1]/*HUD */,[0,2]/*LEY */,[1,1]/*LIN */,[1,2]/*MAN */,[2,1]/*NOR */,[3,0]/*PET */,[,]/*REA */,[,]/*ROT */,[2,2]/*SHR */,[0,0]/*STE */,[0,2]/*STK */,[,]/*WIG */,[,]/*WRX */,[0,1]/*WYC */],
    [equipe[23][0],[1,0]/*BAR */,[1,1]/*BIR */,[2,1]/*BLA */,[,]/*BOL */,[,]/*BRI */,[,]/*BRT */,[2,2]/*CAM */,[,]/*CHA */,[2,1]/*CRA */,[3,0]/*EXE */,[0,0]/*HUD */,[1,2]/*LEY */,[1,0]/*LIN */,[1,0]/*MAN */,[4,1]/*NOR */,[1,0]/*PET */,[3,0]/*REA */,[,]/*ROT */,[3,0]/*SHR */,[2,3]/*STE */,[,]/*STK */,[2,1]/*WIG */,[,]/*WRX */,[3,2]/*WYC */],
    [equipe[24][0],[2,1]/*BAR */,[2,3]/*BIR */,[1,1]/*BLA */,[0,0]/*BOL */,[2,0]/*BRI */,[,]/*BRT */,[2,1]/*CAM */,[,]/*CHA */,[1,0]/*CRA */,[2,1]/*EXE */,[0,1]/*HUD */,[3,0]/*LEY */,[,]/*LIN */,[1,0]/*MAN */,[0,0]/*NOR */,[3,1]/*PET */,[1,1]/*REA */,[2,0]/*ROT */,[,]/*SHR */,[,]/*STE */,[,]/*STK */,[0,0]/*WIG */,[,]/*WRX */,[,]/*WYC */]
]