var equipe = [
    [`EFL League Two`,`https://oraculo.wederson.net.br/inglaterra/imagem/eng3.png`,,0],// 0

    [`Accrington Stanley`,`https://oraculo.wederson.net.br/inglaterra/imagem/accrington.png`,
        {a:8/9,d:11/9},1], // 1
    [`Wimbledon`,`https://oraculo.wederson.net.br/inglaterra/imagem/wimbledon.png`,
        {a:8/9,d:3/9},2],// 2
    [`Barrow`,`https://oraculo.wederson.net.br/inglaterra/imagem/xxx.svg`,
        {a:11/9,d:16/9},3],// 3
    [`Bradford`,`https://oraculo.wederson.net.br/inglaterra/imagem/bradfordcity.png`,
        {a:14/10,d:4/10},4],// 4
    [`Bromley`,`https://oraculo.wederson.net.br/inglaterra/imagem/bromley.png`,
        {a:9/10,d:12/10},5],// 5
    [`Carlisle United`,`https://oraculo.wederson.net.br/inglaterra/imagem/carlisle.png`,
        {a:9/9,d:14/9},6],// 6
    [`Cheltenham`,`https://oraculo.wederson.net.br/inglaterra/imagem/cheltenham.png`,
        {a:11/10,d:12/10},7],// 7
    [`Chesterfield`,`https://oraculo.wederson.net.br/inglaterra/imagem/chesterfield.png`,
        {a:12/8,d:11/8},8],// 8
    [`Colchester United`,`https://oraculo.wederson.net.br/inglaterra/imagem/colchesteru.png`,
        {a:10/9,d:8/9},9],// 9
    [`Crewe`,`https://oraculo.wederson.net.br/inglaterra/imagem/crewe.png`,
        {a:13/10,d:9/10},10],// 10
    [`Doncaster`,`https://oraculo.wederson.net.br/inglaterra/imagem/doncasterrovers.png`,
        {a:16/10,d:13/10},11],// 11
    [`Fleetwood`,`https://oraculo.wederson.net.br/inglaterra/imagem/fleetwood.png`,
        {a:13/10,d:12/10},12],// 12
    [`Gillingham`,`https://oraculo.wederson.net.br/inglaterra/imagem/gillingham.png`,
        {a:4/9,d:13/9},13],// 13
    [`Grimsby`,`https://oraculo.wederson.net.br/inglaterra/imagem/grimsby.png`,
        {a:13/9,d:14/9},14],// 14
    [`Harrogate`,`https://oraculo.wederson.net.br/inglaterra/imagem/xxx.svg`,
        {a:7/10,d:9/10},15],// 15
    [`MK Dons`,`https://oraculo.wederson.net.br/inglaterra/imagem/mkdons.png`,
        {a:8/10,d:13/10},16],// 16
    [`Morecambe`,`https://oraculo.wederson.net.br/inglaterra/imagem/morecambe.png`,
        {a:9/10,d:12/10},17],// 17
    [`Newport`,`https://oraculo.wederson.net.br/inglaterra/imagem/newport.png`,
        {a:11/9,d:12/9},18],// 18
    [`Notts`,`https://oraculo.wederson.net.br/inglaterra/imagem/notts.png`,
        {a:14/9,d:6/9},19],// 19
    [`Port Vale`,`https://oraculo.wederson.net.br/inglaterra/imagem/portvale.png`,
        {a:14/8,d:9/8},20],// 20
    [`Salford`,`https://oraculo.wederson.net.br/inglaterra/imagem/salford.png`,
        {a:10/9,d:10/9},20],// 21
    [`Swindon`,`https://oraculo.wederson.net.br/inglaterra/imagem/swindon.png`,
        {a:19/10,d:11/10},20],// 22
    [`Tranmere Rovers`,`https://oraculo.wederson.net.br/inglaterra/imagem/tranmere.png`,
        {a:7/10,d:21/10},20],// 23
    [`Walsall`,`https://oraculo.wederson.net.br/inglaterra/imagem/walsall.png`,
        {a:21/10,d:16/10},20],// 24
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],[equipe[1][0],[,]/*ACC */,[0,0]/*WIM */,[1,0]/*BAR */,[,]/*BRA */,[1,2]/*BRM */,[,]/*CAR */,[0,0]/*CHT */,[,]/*CHF */,[1,1]/*COL */,[0,1]/*CRE */,[1,2]/*DON */,[,]/*FLE */,[,]/*GIL */,[3,2]/*GRI */,[3,3]/*HAR */,[,]/*MIL */,[2,1]/*MOR */,[,]/*NEW */,[0,3]/*NCO */,[2,2]/*POV */,[0,2]/*SAL */,[2,2]/*SWI */,[,]/*TRA */,[0,0]/*WAL */],
    [equipe[2][0],[2,2]/*ACC */,[,]/*WIM */,[,]/*BAR */,[1,0]/*BRA */,[,]/*BRM */,[4,0]/*CAR */,[,]/*CHT */,[,]/*CHF */,[4,2]/*COL */,[3,0]/*CRE */,[1,0]/*DON */,[1,0]/*FLE */,[1,0]/*GIL */,[0,1]/*GRI */,[,]/*HAR */,[3,0]/*MIL */,[3,0]/*MOR */,[2,2]/*NEW */,[,]/*NCO */,[,]/*POV */,[1,0]/*SAL */,[1,1]/*SWI */,[2,0]/*TRA */,[0,1]/*WAL */],
    [equipe[3][0],[,]/*ACC */,[1,3]/*WIM */,[,]/*BAR */,[2,2]/*BRA */,[,]/*BRM */,[,]/*CAR */,[2,1]/*CHT */,[,]/*CHF */,[1,1]/*COL */,[1,0]/*CRE */,[1,3]/*DON */,[2,0]/*FLE */,[3,0]/*GIL */,[3,0]/*GRI */,[0,2]/*HAR */,[2,1]/*MIL */,[0,1]/*MOR */,[2,0]/*NEW */,[1,1]/*NCO */,[4,0]/*POV */,[,]/*SAL */,[1,1]/*SWI */,[,]/*TRA */,[,]/*WAL */],
    [equipe[4][0],[1,0]/*ACC */,[0,0]/*WIM */,[1,1]/*BAR */,[,]/*BRA */,[3,1]/*BRM */,[2,1]/*CAR */,[,]/*CHT */,[2,1]/*CHF */,[,]/*COL */,[,]/*CRE */,[1,2]/*DON */,[,]/*FLE */,[2,1]/*GIL */,[3,1]/*GRI */,[1,0]/*HAR */,[2,0]/*MIL */,[1,0]/*MOR */,[3,1]/*NEW */,[,]/*NCO */,[2,1]/*POV */,[0,0]/*SAL */,[1,0]/*SWI */,[,]/*TRA */,[3,0]/*WAL */],
    [equipe[5][0],[,]/*ACC */,[2,0]/*WIM */,[1,1]/*BAR */,[0,1]/*BRA */,[,]/*BRM */,[1,1]/*CAR */,[,]/*CHT */,[2,2]/*CHF */,[0,1]/*COL */,[1,2]/*CRE */,[,]/*DON */,[1,0]/*FLE */,[2,1]/*GIL */,[0,2]/*GRI */,[2,0]/*HAR */,[1,1]/*MIL */,[,]/*MOR */,[5,2]/*NEW */,[2,4]/*NCO */,[0,0]/*POV */,[,]/*SAL */,[1,1]/*SWI */,[1,2]/*TRA */,[,]/*WAL */],
    [equipe[6][0],[2,1]/*ACC */,[,]/*WIM */,[1,0]/*BAR */,[0,1]/*BRA */,[,]/*BRM */,[,]/*CAR */,[0,1]/*CHT */,[0,2]/*CHF */,[0,0]/*COL */,[1,1]/*CRE */,[0,0]/*DON */,[2,3]/*FLE */,[0,0]/*GIL */,[2,3]/*GRI */,[1,1]/*HAR */,[,]/*MIL */,[0,1]/*MOR */,[,]/*NEW */,[0,2]/*NCO */,[,]/*POV */,[,]/*SAL */,[1,5]/*SWI */,[1,2]/*TRA */,[,]/*WAL */],
    [equipe[7][0],[2,1]/*ACC */,[0,1]/*WIM */,[3,2]/*BAR */,[1,1]/*BRA */,[1,1]/*BRM */,[,]/*CAR */,[,]/*CHT */,[1,0]/*CHF */,[,]/*COL */,[2,1]/*CRE */,[,]/*DON */,[0,2]/*FLE */,[,]/*GIL */,[,]/*GRI */,[1,0]/*HAR */,[,]/*MIL */,[2,0]/*MOR */,[3,2]/*NEW */,[3,5]/*NCO */,[1,1]/*POV */,[2,1]/*SAL */,[2,3]/*SWI */,[1,0]/*TRA */,[2,2]/*WAL */],
    [equipe[8][0],[0,3]/*ACC */,[1,0]/*WIM */,[1,0]/*BAR */,[,]/*BRA */,[3,0]/*BRM */,[,]/*CAR */,[1,1]/*CHT */,[,]/*CHF */,[1,1]/*COL */,[,]/*CRE */,[5,2]/*DON */,[,]/*FLE */,[,]/*GIL */,[2,1]/*GRI */,[,]/*HAR */,[1,2]/*MIL */,[,]/*MOR */,[,]/*NEW */,[2,2]/*NCO */,[1,1]/*POV */,[1,1]/*SAL */,[1,1]/*SWI */,[3,0]/*TRA */,[2,2]/*WAL */],
    [equipe[9][0],[0,2]/*ACC */,[1,1]/*WIM */,[,]/*BAR */,[1,1]/*BRA */,[1,1]/*BRM */,[0,0]/*CAR */,[1,2]/*CHT */,[,]/*CHF */,[,]/*COL */,[,]/*CRE */,[1,1]/*DON */,[,]/*FLE */,[2,0]/*GIL */,[,]/*GRI */,[0,1]/*HAR */,[2,0]/*MIL */,[1,0]/*MOR */,[0,0]/*NEW */,[,]/*NCO */,[,]/*POV */,[1,2]/*SAL */,[4,0]/*SWI */,[3,0]/*TRA */,[2,1]/*WAL */],
    [equipe[10][0],[0,1]/*ACC */,[1,1]/*WIM */,[3,0]/*BAR */,[1,1]/*BRA */,[4,1]/*BRM */,[3,2]/*CAR */,[,]/*CHT */,[0,5]/*CHF */,[0,0]/*COL */,[,]/*CRE */,[,]/*DON */,[,]/*FLE */,[2,0]/*GIL */,[,]/*GRI */,[3,0]/*HAR */,[,]/*MIL */,[1,0]/*MOR */,[0,3]/*NEW */,[2,0]/*NCO */,[,]/*POV */,[1,1]/*SAL */,[0,0]/*SWI */,[3,1]/*TRA */,[,]/*WAL */],
    [equipe[11][0],[4,1]/*ACC */,[,]/*WIM */,[1,0]/*BAR */,[,]/*BRA */,[0,1]/*BRM */,[,]/*CAR */,[2,2]/*CHT */,[0,3]/*CHF */,[,]/*COL */,[1,1]/*CRE */,[,]/*DON */,[2,1]/*FLE */,[1,0]/*GIL */,[1,2]/*GRI */,[1,0]/*HAR */,[2,1]/*MIL */,[1,0]/*MOR */,[,]/*NEW */,[1,1]/*NCO */,[1,2]/*POV */,[1,1]/*SAL */,[,]/*SWI */,[3,1]/*TRA */,[,]/*WAL */],
    [equipe[12][0],[1,1]/*ACC */,[0,0]/*WIM */,[,]/*BAR */,[1,0]/*BRA */,[0,0]/*BRM */,[1,2]/*CAR */,[2,0]/*CHT */,[2,0]/*CHF */,[0,0]/*COL */,[0,1]/*CRE */,[2,4]/*DON */,[,]/*FLE */,[0,0]/*GIL */,[1,0]/*GRI */,[1,1]/*HAR */,[2,1]/*MIL */,[2,2]/*MOR */,[,]/*NEW */,[,]/*NCO */,[,]/*POV */,[2,2]/*SAL */,[,]/*SWI */,[,]/*TRA */,[2,0]/*WAL */],
    [equipe[13][0],[1,2]/*ACC */,[,]/*WIM */,[2,0]/*BAR */,[,]/*BRA */,[0,3]/*BRM */,[4,1]/*CAR */,[2,2]/*CHT */,[1,0]/*CHF */,[,]/*COL */,[0,0]/*CRE */,[0,1]/*DON */,[1,2]/*FLE */,[,]/*GIL */,[0,1]/*GRI */,[1,2]/*HAR */,[,]/*MIL */,[,]/*MOR */,[0,2]/*NEW */,[1,2]/*NCO */,[1,0]/*POV */,[1,0]/*SAL */,[,]/*SWI */,[3,0]/*TRA */,[,]/*WAL */],
    [equipe[14][0],[5,2]/*ACC */,[,]/*WIM */,[1,2]/*BAR */,[2,1]/*BRA */,[1,0]/*BRM */,[2,1]/*CAR */,[3,2]/*CHT */,[1,1]/*CHF */,[0,1]/*COL */,[0,2]/*CRE */,[0,3]/*DON */,[2,1]/*FLE */,[1,1]/*GIL */,[,]/*GRI */,[2,1]/*HAR */,[1,3]/*MIL */,[,]/*MOR */,[,]/*NEW */,[,]/*NCO */,[3,0]/*POV */,[,]/*SAL */,[,]/*SWI */,[,]/*TRA */,[1,4]/*WAL */],
    [equipe[15][0],[,]/*ACC */,[0,3]/*WIM */,[0,1]/*BAR */,[2,1]/*BRA */,[0,2]/*BRM */,[,]/*CAR */,[2,0]/*CHT */,[2,1]/*CHF */,[0,0]/*COL */,[1,1]/*CRE */,[2,0]/*DON */,[,]/*FLE */,[,]/*GIL */,[,]/*GRI */,[,]/*HAR */,[1,5]/*MIL */,[1,2]/*MOR */,[1,0]/*NEW */,[,]/*NCO */,[0,1]/*POV */,[0,2]/*SAL */,[1,0]/*SWI */,[,]/*TRA */,[0,2]/*WAL */],
    [equipe[16][0],[2,1]/*ACC */,[0,0]/*WIM */,[,]/*BAR */,[1,2]/*BRA */,[0,1]/*BRM */,[3,0]/*CAR */,[3,2]/*CHT */,[3,0]/*CHF */,[,]/*COL */,[1,1]/*CRE */,[1,1]/*DON */,[,]/*FLE */,[0,1]/*GIL */,[,]/*GRI */,[2,1]/*HAR */,[,]/*MIL */,[,]/*MOR */,[,]/*NEW */,[0,2]/*NCO */,[0,1]/*POV */,[0,1]/*SAL */,[3,1]/*SWI */,[1,1]/*TRA */,[1,0]/*WAL */],
    [equipe[17][0],[2,0]/*ACC */,[,]/*WIM */,[,]/*BAR */,[1,1]/*BRA */,[0,2]/*BRM */,[,]/*CAR */,[,]/*CHT */,[2,5]/*CHF */,[3,3]/*COL */,[0,1]/*CRE */,[0,1]/*DON */,[,]/*FLE */,[0,1]/*GIL */,[0,3]/*GRI */,[,]/*HAR */,[1,3]/*MIL */,[,]/*MOR */,[0,1]/*NEW */,[1,1]/*NCO */,[0,1]/*POV */,[,]/*SAL */,[,]/*SWI */,[2,0]/*TRA */,[0,2]/*WAL */],
    [equipe[18][0],[3,1]/*ACC */,[1,2]/*WIM */,[1,0]/*BAR */,[0,0]/*BRA */,[,]/*BRM */,[1,0]/*CAR */,[0,3]/*CHT */,[0,3]/*CHF */,[,]/*COL */,[2,1]/*CRE */,[3,1]/*DON */,[0,0]/*FLE */,[,]/*GIL */,[0,0]/*GRI */,[,]/*HAR */,[6,3]/*MIL */,[2,1]/*MOR */,[,]/*NEW */,[,]/*NCO */,[1,4]/*POV */,[3,1]/*SAL */,[1,2]/*SWI */,[,]/*TRA */,[,]/*WAL */],
    [equipe[19][0],[2,0]/*ACC */,[1,0]/*WIM */,[,]/*BAR */,[3,0]/*BRA */,[1,1]/*BRM */,[1,0]/*CAR */,[,]/*CHT */,[,]/*CHF */,[1,1]/*COL */,[,]/*CRE */,[,]/*DON */,[2,2]/*FLE */,[0,1]/*GIL */,[4,1]/*GRI */,[1,0]/*HAR */,[,]/*MIL */,[2,0]/*MOR */,[0,0]/*NEW */,[,]/*NCO */,[0,1]/*POV */,[,]/*SAL */,[2,0]/*SWI */,[2,1]/*TRA */,[1,2]/*WAL */],
    [equipe[20][0],[2,1]/*ACC */,[3,2]/*WIM */,[,]/*BAR */,[,]/*BRA */,[,]/*BRM */,[0,0]/*CAR */,[0,0]/*CHT */,[1,0]/*CHF */,[1,1]/*COL */,[1,1]/*CRE */,[2,3]/*DON */,[3,1]/*FLE */,[,]/*GIL */,[,]/*GRI */,[,]/*HAR */,[,]/*MIL */,[,]/*MOR */,[3,2]/*NEW */,[1,0]/*NCO */,[,]/*POV */,[2,1]/*SAL */,[2,1]/*SWI */,[0,0]/*TRA */,[0,1]/*WAL */],
    [equipe[21][0],[,]/*ACC */,[1,0]/*WIM */,[3,0]/*BAR */,[,]/*BRA */,[3,3]/*BRM */,[0,1]/*CAR */,[2,1]/*CHT */,[,]/*CHF */,[,]/*COL */,[,]/*CRE */,[,]/*DON */,[0,2]/*FLE */,[,]/*GIL */,[1,2]/*GRI */,[2,0]/*HAR */,[1,0]/*MIL */,[1,0]/*MOR */,[1,1]/*NEW */,[3,0]/*NCO */,[0,2]/*POV */,[,]/*SAL */,[2,1]/*SWI */,[2,0]/*TRA */,[0,2]/*WAL */],
    [equipe[22][0],[,]/*ACC */,[,]/*WIM */,[2,0]/*BAR */,[,]/*BRA */,[,]/*BRM */,[0,2]/*CAR */,[,]/*CHT */,[1,0]/*CHF */,[3,2]/*COL */,[0,0]/*CRE */,[1,2]/*DON */,[3,1]/*FLE */,[1,1]/*GIL */,[3,1]/*GRI */,[0,0]/*HAR */,[,]/*MIL */,[2,3]/*MOR */,[4,0]/*NEW */,[1,2]/*NCO */,[3,3]/*POV */,[,]/*SAL */,[,]/*SWI */,[3,1]/*TRA */,[0,4]/*WAL */],
    [equipe[23][0],[0,1]/*ACC */,[0,2]/*WIM */,[1,1]/*BAR */,[0,2]/*BRA */,[,]/*BRM */,[1,0]/*CAR */,[,]/*CHT */,[,]/*CHF */,[1,3]/*COL */,[,]/*CRE */,[,]/*DON */,[0,0]/*FLE */,[1,1]/*GIL */,[0,1]/*GRI */,[2,1]/*HAR */,[1,1]/*MIL */,[2,2]/*MOR */,[2,1]/*NEW */,[0,0]/*NCO */,[,]/*POV */,[0,0]/*SAL */,[1,1]/*SWI */,[,]/*TRA */,[1,0]/*WAL */],
    [equipe[24][0],[,]/*ACC */,[,]/*WIM */,[1,0]/*BAR */,[2,1]/*BRA */,[2,2]/*BRM */,[3,1]/*CAR */,[2,1]/*CHT */,[3,1]/*CHF */,[4,0]/*COL */,[1,1]/*CRE */,[2,0]/*DON */,[2,6]/*FLE */,[1,1]/*GIL */,[,]/*GRI */,[,]/*HAR */,[4,2]/*MIL */,[1,0]/*MOR */,[2,0]/*NEW */,[3,2]/*NCO */,[,]/*POV */,[2,2]/*SAL */,[,]/*SWI */,[5,1]/*TRA */,[,]/*WAL */],    
]