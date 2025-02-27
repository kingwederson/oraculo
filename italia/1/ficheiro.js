var equipe = [
    [`Serie A`,`https://oraculo.wederson.net.br/italia/imagem/ita1.png`,,0],
    [`Atalanta`,`https://oraculo.wederson.net.br/italia/imagem/atalanta.png`,{a:42/17,d:19/17},1],
    [`Bologna`,`https://oraculo.wederson.net.br/italia/imagem/bologna.png`,{a:23/16,d:18/16},2],
    [`Cagliari`,`https://oraculo.wederson.net.br/italia/imagem/cagliari.png`,{a:16/17,d:28/17},3],
    [`Como`,`https://oraculo.wederson.net.br/italia/imagem/como.png`,{a:18/16,d:28/16},4],
    [`Empoli`,`https://oraculo.wederson.net.br/italia/imagem/empoli.png`,{a:16/17,d:19/17},5],
    [`Fiorentina`,`https://oraculo.wederson.net.br/italia/imagem/fiorentina.png`,{a:28/15,d:11/15},6],
    [`Genoa`,`https://oraculo.wederson.net.br/italia/imagem/genoa.png`,{a:14/17,d:26/17},7],
    [`Hellas Verona`,`https://oraculo.wederson.net.br/italia/imagem/verona.png`,{a:21/15,d:40/15},8],
    [`Inter`,`https://oraculo.wederson.net.br/italia/imagem/inter.png`,{a:40/15,d:15/15},9],
    [`Juventus`,`https://oraculo.wederson.net.br/italia/imagem/juventus.png`,{a:28/17,d:13/17},10],
    [`Lazio`,`https://oraculo.wederson.net.br/italia/imagem/lazio.png`,{a:32/17,d:24/17},11],
    [`Lecce`,`https://oraculo.wederson.net.br/italia/imagem/lecce.png`,{a:11/15,d:29/15},12],
    [`Milan`,`https://oraculo.wederson.net.br/italia/imagem/milan.png`,{a:25/16,d:16/16},13],
    [`Monza`,`https://oraculo.wederson.net.br/italia/imagem/monza.png`,{a:15/17,d:23/17},14],
    [`Napoli`,`https://oraculo.wederson.net.br/italia/imagem/napoli.png`,{a:26/17,d:12/17},15],
    [`Parma`,`https://oraculo.wederson.net.br/italia/imagem/parma.png`,{a:23/17,d:33/17},16],
    [`Roma`,`https://oraculo.wederson.net.br/italia/imagem/roma.png`,{a:23/17,d:23/17},17],
    [`Torino`,`https://oraculo.wederson.net.br/italia/imagem/torino.png`,{a:17/17,d:22/17},18],
    [`Udinese`,`https://oraculo.wederson.net.br/italia/imagem/udinese.png`,{a:19/16,d:25/16},19],
    [`Venezia`,`https://oraculo.wederson.net.br/italia/imagem/venezia.png`,{a:17/17,d:30/17},20]
]

var tabelaRRinicial = [
    [equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],[equipe[1][0],[,]/*ATA */,[,]/*BOL */,[0,0]/*CAG */,[2,3]/*COM */,[3,2]/*EMP */,[3,2]/*FIO */,[5,1]/*GEN */,[6,1]/*VER */,[,]/*INT */,[1,1]/*JUV */,[,]/*LAZ */,[,]/*LEC */,[2,1]/*MIL */,[2,0]/*MON */,[2,3]/*NAP */,[,]/*PAR */,[,]/*ROM */,[1,1]/*TOR */,[2,1]/*UDI */,[,]/*VEN */],
    [equipe[2][0],[1,1]/*ATA */,[,]/*BOL */,[,]/*CAG */,[2,0]/*COM */,[1,1]/*EMP */,[1,0]/*FIO */,[,]/*GEN */,[2,3]/*VER */,[,]/*INT */,[,]/*JUV */,[,]/*LAZ */,[1,0]/*LEC */,[,]/*MIL */,[3,1]/*MON */,[,]/*NAP */,[0,0]/*PAR */,[2,2]/*ROM */,[3,2]/*TOR */,[1,1]/*UDI */,[3,0]/*VEN */],
    [equipe[3][0],[0,1]/*ATA */,[0,2]/*BOL */,[,]/*CAG */,[1,1]/*COM */,[0,2]/*EMP */,[,]/*FIO */,[,]/*GEN */,[1,0]/*VER */,[0,3]/*INT */,[0,1]/*JUV */,[1,2]/*LAZ */,[4,1]/*LEC */,[3,3]/*MIL */,[,]/*MON */,[0,4]/*NAP */,[2,1]/*PAR */,[0,0]/*ROM */,[3,2]/*TOR */,[,]/*UDI */,[,]/*VEN */],
    [equipe[4][0],[1,2]/*ATA */,[2,2]/*BOL */,[,]/*CAG */,[,]/*COM */,[,]/*EMP */,[0,2]/*FIO */,[,]/*GEN */,[3,2]/*VER */,[,]/*INT */,[1,2]/*JUV */,[1,5]/*LAZ */,[2,0]/*LEC */,[1,2]/*MIL */,[1,1]/*MON */,[2,1]/*NAP */,[1,1]/*PAR */,[2,0]/*ROM */,[,]/*TOR */,[4,1]/*UDI */,[,]/*VEN */],
    [equipe[5][0],[0,5]/*ATA */,[1,1]/*BOL */,[,]/*CAG */,[1,0]/*COM */,[,]/*EMP */,[0,0]/*FIO */,[1,2]/*GEN */,[,]/*VER */,[0,3]/*INT */,[0,0]/*JUV */,[,]/*LAZ */,[1,3]/*LEC */,[0,2]/*MIL */,[0,0]/*MON */,[0,1]/*NAP */,[,]/*PAR */,[,]/*ROM */,[0,1]/*TOR */,[1,1]/*UDI */,[,]/*VEN */],
    [equipe[6][0],[,]/*ATA */,[,]/*BOL */,[1,0]/*CAG */,[0,2]/*COM */,[,]/*EMP */,[,]/*FIO */,[2,1]/*GEN */,[3,1]/*VER */,[3,0]/*INT */,[a,a]/*JUV */,[2,1]/*LAZ */,[,]/*LEC */,[2,1]/*MIL */,[2,2]/*MON */,[0,3]/*NAP */,[,]/*PAR */,[5,1]/*ROM */,[1,1]/*TOR */,[1,2]/*UDI */,[0,0]/*VEN */],
    [equipe[7][0],[,]/*ATA */,[2,2]/*BOL */,[2,2]/*CAG */,[1,1]/*COM */,[,]/*EMP */,[0,1]/*FIO */,[,]/*GEN */,[0,2]/*VER */,[2,2]/*INT */,[0,3]/*JUV */,[,]/*LAZ */,[,]/*LEC */,[,]/*MIL */,[2,0]/*MON */,[1,2]/*NAP */,[1,0]/*PAR */,[1,1]/*ROM */,[0,0]/*TOR */,[,]/*UDI */,[2,0]/*VEN */],
    [equipe[8][0],[0,5]/*ATA */,[,]/*BOL */,[,]/*CAG */,[,]/*COM */,[1,4]/*EMP */,[1,0]/*FIO */,[,]/*GEN */,[,]/*VER */,[0,5]/*INT */,[0,3]/*JUV */,[0,3]/*LAZ */,[,]/*LEC */,[0,1]/*MIL */,[0,3]/*MON */,[3,0]/*NAP */,[,]/*PAR */,[3,2]/*ROM */,[2,3]/*TOR */,[0,0]/*UDI */,[2,1]/*VEN */],
    [equipe[9][0],[4,0]/*ATA */,[2,2]/*BOL */,[,]/*CAG */,[2,0]/*COM */,[3,1]/*EMP */,[2,1]/*FIO */,[1,0]/*GEN */,[,]/*VER */,[,]/*INT */,[4,4]/*JUV */,[,]/*LAZ */,[2,0]/*LEC */,[1,2]/*MIL */,[,]/*MON */,[1,1]/*NAP */,[3,1]/*PAR */,[,]/*ROM */,[3,2]/*TOR */,[,]/*UDI */,[1,0]/*VEN */],
    [equipe[10][0],[,]/*ATA */,[2,2]/*BOL */,[1,1]/*CAG */,[3,0]/*COM */,[4,1]/*EMP */,[2,2]/*FIO */,[,]/*GEN */,[,]/*VER */,[1,0]/*INT */,[,]/*JUV */,[1,0]/*LAZ */,[,]/*LEC */,[2,0]/*MIL */,[,]/*MON */,[0,0]/*NAP */,[2,2]/*PAR */,[0,0]/*ROM */,[2,0]/*TOR */,[,]/*UDI */,[2,2]/*VEN */],
    [equipe[11][0],[1,1]/*ATA */,[3,0]/*BOL */,[2,1]/*CAG */,[1,1]/*COM */,[2,1]/*EMP */,[1,2]/*FIO */,[3,0]/*GEN */,[2,1]/*VER */,[0,6]/*INT */,[,]/*JUV */,[,]/*LAZ */,[,]/*LEC */,[2,2]/*MIL */,[5,1]/*MON */,[2,2]/*NAP */,[,]/*PAR */,[,]/*ROM */,[,]/*TOR */,[,]/*UDI */,[3,1]/*VEN */],
    [equipe[12][0],[0,4]/*ATA */,[0,0]/*BOL */,[1,0]/*CAG */,[,]/*COM */,[1,1]/*EMP */,[0,6]/*FIO */,[0,0]/*GEN */,[1,0]/*VER */,[0,4]/*INT */,[1,1]/*JUV */,[1,2]/*LAZ */,[,]/*LEC */,[,]/*MIL */,[2,1]/*MON */,[,]/*NAP */,[2,2]/*PAR */,[,]/*ROM */,[,]/*TOR */,[0,1]/*UDI */,[,]/*VEN */],
    [equipe[13][0],[,]/*ATA */,[,]/*BOL */,[1,1]/*CAG */,[,]/*COM */,[3,0]/*EMP */,[,]/*FIO */,[0,0]/*GEN */,[1,0]/*VER */,[1,1]/*INT */,[0,0]/*JUV */,[,]/*LAZ */,[3,0]/*LEC */,[,]/*MIL */,[,]/*MON */,[0,2]/*NAP */,[3,2]/*PAR */,[1,1]/*ROM */,[2,2]/*TOR */,[1,0]/*UDI */,[4,0]/*VEN */],
    [equipe[14][0],[,]/*ATA */,[1,2]/*BOL */,[1,2]/*CAG */,[,]/*COM */,[,]/*EMP */,[2,1]/*FIO */,[0,1]/*GEN */,[0,1]/*VER */,[1,1]/*INT */,[1,2]/*JUV */,[0,1]/*LAZ */,[0,0]/*LEC */,[0,1]/*MIL */,[,]/*MON */,[,]/*NAP */,[,]/*PAR */,[1,1]/*ROM */,[,]/*TOR */,[1,2]/*UDI */,[2,2]/*VEN */],
    [equipe[15][0],[0,3]/*ATA */,[3,0]/*BOL */,[,]/*CAG */,[3,1]/*COM */,[,]/*EMP */,[,]/*FIO */,[,]/*GEN */,[2,0]/*VER */,[,]/*INT */,[2,1]/*JUV */,[0,1]/*LAZ */,[1,0]/*LEC */,[,]/*MIL */,[2,0]/*MON */,[,]/*NAP */,[2,1]/*PAR */,[1,0]/*ROM */,[,]/*TOR */,[1,1]/*UDI */,[1,0]/*VEN */],
    [equipe[16][0],[1,3]/*ATA */,[2,0]/*BOL */,[2,3]/*CAG */,[,]/*COM */,[1,1]/*EMP */,[1,1]/*FIO */,[0,1]/*GEN */,[2,3]/*VER */,[,]/*INT */,[,]/*JUV */,[3,1]/*LAZ */,[1,3]/*LEC */,[2,1]/*MIL */,[2,1]/*MON */,[,]/*NAP */,[,]/*PAR */,[0,1]/*ROM */,[,]/*TOR */,[2,3]/*UDI */,[1,1]/*VEN */],
    [equipe[17][0],[0,2]/*ATA */,[2,3]/*BOL */,[,]/*CAG */,[,]/*COM */,[1,2]/*EMP */,[,]/*FIO */,[3,1]/*GEN */,[,]/*VER */,[0,1]/*INT */,[,]/*JUV */,[2,0]/*LAZ */,[4,1]/*LEC */,[,]/*MIL */,[4,0]/*MON */,[1,1]/*NAP */,[5,0]/*PAR */,[,]/*ROM */,[1,0]/*TOR */,[3,0]/*UDI */,[2,1]/*VEN */],
    [equipe[18][0],[2,1]/*ATA */,[0,2]/*BOL */,[2,0]/*CAG */,[1,0]/*COM */,[,]/*EMP */,[0,1]/*FIO */,[1,1]/*GEN */,[,]/*VER */,[,]/*INT */,[1,1]/*JUV */,[2,3]/*LAZ */,[0,0]/*LEC */,[2,1]/*MIL */,[1,1]/*MON */,[0,1]/*NAP */,[0,0]/*PAR */,[,]/*ROM */,[,]/*TOR */,[,]/*UDI */,[,]/*VEN */],
    [equipe[19][0],[0,0]/*ATA */,[,]/*BOL */,[2,0]/*CAG */,[1,0]/*COM */,[3,0]/*EMP */,[,]/*FIO */,[0,2]/*GEN */,[,]/*VER */,[2,3]/*INT */,[0,2]/*JUV */,[2,1]/*LAZ */,[1,0]/*LEC */,[,]/*MIL */,[,]/*MON */,[1,3]/*NAP */,[,]/*PAR */,[1,2]/*ROM */,[2,2]/*TOR */,[,]/*UDI */,[3,2]/*VEN */],
    [equipe[20][0],[0,2]/*ATA */,[,]/*BOL */,[2,1]/*CAG */,[2,2]/*COM */,[1,1]/*EMP */,[,]/*FIO */,[2,0]/*GEN */,[1,1]/*VER */,[0,1]/*INT */,[,]/*JUV */,[0,0]/*LAZ */,[0,1]/*LEC */,[,]/*MIL */,[,]/*MON */,[,]/*NAP */,[1,2]/*PAR */,[0,1]/*ROM */,[0,1]/*TOR */,[3,2]/*UDI */,[,]/*VEN */]    
]