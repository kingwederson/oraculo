var equipe = [
    [`LaLiga`,`https://oraculo.wederson.net.br/espanha/imagem/spa1.png`,,0],// 0
    [`Alavés`,`https://oraculo.wederson.net.br/espanha/imagem/alaves.png`,{a:29/16,d:15/16},1], // 1
    [`Athletic Bilbao`,`https://oraculo.wederson.net.br/espanha/imagem/athletic.png`,{a:20/16,d:28/16},2],// 2
    [`Atlético Madrid`,`https://oraculo.wederson.net.br/espanha/imagem/atletico.png`,{a:28/16,d:10/16},3],// 3
    [`Barcelona`,`https://oraculo.wederson.net.br/espanha/imagem/barcelona.png`,{a:42/16,d:19/16},4],// 4
    [`Celta Vigo`,`https://oraculo.wederson.net.br/espanha/imagem/celta.png`,{a:22/16,d:26/16},5],// 5
    [`Espanyol`,`https://oraculo.wederson.net.br/espanha/imagem/espanyol.png`,{a:16/16,d:28/16},6],// 6
    [`Getafe`,`https://oraculo.wederson.net.br/espanha/imagem/getafe.png`,{a:10/16,d:14/16},7],// 7
    [`Girona`,`https://oraculo.wederson.net.br/espanha/imagem/girona.png`,{a:25/16,d:21/16},8],// 8
    [`Las Palmas`,`https://oraculo.wederson.net.br/espanha/imagem/laspalmas.png`,{a:20/16,d:23/16},9],// 9
    [`Leganés`,`https://oraculo.wederson.net.br/espanha/imagem/leganes.png`,{a:14/16,d:22/16},10],// 10
    [`Mallorca`,`https://oraculo.wederson.net.br/espanha/imagem/mallorca.png`,{a:17/16,d:14/16},11],// 11
    [`Osasuna`,`https://oraculo.wederson.net.br/espanha/imagem/osasuna.png`,{a:21/16,d:26/16},12],// 12
    [`Rayo Vallecano`,`https://oraculo.wederson.net.br/espanha/imagem/rayo.png`,{a:18/16,d:20/16},13],// 13
    [`Real Betis`,`https://oraculo.wederson.net.br/espanha/imagem/betis.png`,{a:20/16,d:21/16},14],// 14
    [`Real Madrid`,`https://oraculo.wederson.net.br/espanha/imagem/madrid.png`,{a:36/15,d:15/15},15],// 15
    [`Real Sociedad`,`https://oraculo.wederson.net.br/espanha/imagem/sociedad.png`,{a:14/16,d:11/16},16],// 16
    [`Sevilla`,`https://oraculo.wederson.net.br/espanha/imagem/sevilla.png`,{a:17/16,d:23/16},17],// 17
    [`Valencia`,`https://oraculo.wederson.net.br/espanha/imagem/valencia.png`,{a:14/16,d:21/16},18],// 18
    [`Valladolid`,`https://oraculo.wederson.net.br/espanha/imagem/valladolid.png`,{a:11/16,d:34/16},19],// 19
    [`Villarreal`,`https://oraculo.wederson.net.br/espanha/imagem/villarreal.png`,{a:30/16,d:27/16},20]// 20
]

var tabelaRRinicial = [
    [0,equipe[0][0],equipe[1][0],equipe[2][0],equipe[3][0],equipe[4][0],equipe[5][0],equipe[6][0],equipe[7][0],equipe[8][0],equipe[9][0],equipe[10][0],equipe[11][0],equipe[12][0],equipe[13][0],equipe[14][0],equipe[15][0],equipe[16][0],equipe[17][0],equipe[18][0],equipe[19][0],equipe[20][0]],[equipe[1][0],[,]/*ALA */,[1,1]/*ATH */,[,]/*ATM */,[0,3]/*BAR */,[1,1]/*CEL */,[0,1]/*ESP */,[0,1]/*GET */,[0,1]/*GIR */,[2,0]/*LPA */,[1,1]/*LEG */,[1,0]/*MLL */,[,]/*OSA */,[,]/*RAY */,[0,0]/*BET */,[,]/*RMA */,[,]/*RSO */,[2,1]/*SEV */,[,]/*VAL */,[2,3]/*VLL */,[,]/*VIL */],
    [equipe[2][0],[,]/*ALA */,[,]/*ATH */,[0,1]/*ATM */,[,]/*BAR */,[3,1]/*CEL */,[4,1]/*ESP */,[1,1]/*GET */,[3,0]/*GIR */,[,]/*LPA */,[0,0]/*LEG */,[,]/*MLL */,[,]/*OSA */,[,]/*RAY */,[1,1]/*BET */,[2,1]/*RMA */,[1,0]/*RSO */,[1,1]/*SEV */,[1,0]/*VAL */,[7,1]/*VLL */,[2,0]/*VIL */],
    [equipe[3][0],[2,1]/*ALA */,[,]/*ATH */,[,]/*ATM */,[,]/*BAR */,[1,1]/*CEL */,[0,0]/*ESP */,[1,0]/*GET */,[3,0]/*GIR */,[2,0]/*LPA */,[3,1]/*LEG */,[2,0]/*MLL */,[1,0]/*OSA */,[,]/*RAY */,[,]/*BET */,[1,1]/*RMA */,[,]/*RSO */,[4,3]/*SEV */,[3,0]/*VAL */,[,]/*VLL */,[1,1]/*VIL */],
    [equipe[4][0],[1,0]/*ALA */,[2,1]/*ATH */,[1,2]/*ATM */,[,]/*BAR */,[,]/*CEL */,[3,1]/*ESP */,[1,0]/*GET */,[,]/*GIR */,[1,2]/*LPA */,[0,1]/*LEG */,[,]/*MLL */,[,]/*OSA */,[1,0]/*RAY */,[,]/*BET */,[,]/*RMA */,[,]/*RSO */,[5,1]/*SEV */,[7,1]/*VAL */,[7,0]/*VLL */,[,]/*VIL */],
    [equipe[5][0],[2,1]/*ALA */,[1,2]/*ATH */,[0,1]/*ATM */,[2,2]/*BAR */,[,]/*CEL */,[,]/*ESP */,[1,0]/*GET */,[1,1]/*GIR */,[,]/*LPA */,[,]/*LEG */,[2,0]/*MLL */,[1,0]/*OSA */,[,]/*RAY */,[3,2]/*BET */,[1,2]/*RMA */,[2,0]/*RSO */,[,]/*SEV */,[3,1]/*VAL */,[3,1]/*VLL */,[,]/*VIL */],
    [equipe[6][0],[3,2]/*ALA */,[1,1]/*ATH */,[,]/*ATM */,[,]/*BAR */,[3,1]/*CEL */,[,]/*ESP */,[,]/*GET */,[,]/*GIR */,[,]/*LPA */,[1,1]/*LEG */,[2,1]/*MLL */,[0,0]/*OSA */,[2,1]/*RAY */,[,]/*BET */,[1,0]/*RMA */,[0,1]/*RSO */,[0,2]/*SEV */,[1,1]/*VAL */,[2,1]/*VLL */,[1,2]/*VIL */],
    [equipe[7][0],[2,0]/*ALA */,[,]/*ATH */,[,]/*ATM */,[1,1]/*BAR */,[,]/*CEL */,[1,0]/*ESP */,[,]/*GET */,[0,1]/*GIR */,[,]/*LPA */,[1,1]/*LEG */,[0,1]/*MLL */,[1,1]/*OSA */,[0,0]/*RAY */,[1,2]/*BET */,[,]/*RMA */,[0,0]/*RSO */,[0,0]/*SEV */,[1,1]/*VAL */,[2,0]/*VLL */,[,]/*VIL */],
    [equipe[8][0],[,]/*ALA */,[2,1]/*ATH */,[,]/*ATM */,[1,4]/*BAR */,[,]/*CEL */,[4,1]/*ESP */,[1,2]/*GET */,[,]/*GIR */,[2,1]/*LPA */,[4,3]/*LEG */,[,]/*MLL */,[4,0]/*OSA */,[0,0]/*RAY */,[,]/*BET */,[0,3]/*RMA */,[0,1]/*RSO */,[1,2]/*SEV */,[,]/*VAL */,[3,0]/*VLL */,[,]/*VIL */],
    [equipe[9][0],[,]/*ALA */,[2,3]/*ATH */,[,]/*ATM */,[0,2]/*BAR */,[0,1]/*CEL */,[1,0]/*ESP */,[1,2]/*GET */,[1,0]/*GIR */,[,]/*LPA */,[,]/*LEG */,[2,3]/*MLL */,[1,1]/*OSA */,[,]/*RAY */,[1,1]/*BET */,[1,1]/*RMA */,[,]/*RSO */,[2,2]/*SEV */,[,]/*VAL */,[2,1]/*VLL */,[1,2]/*VIL */],
    [equipe[10][0],[3,3]/*ALA */,[0,2]/*ATH */,[1,0]/*ATM */,[,]/*BAR */,[3,0]/*CEL */,[,]/*ESP */,[,]/*GET */,[,]/*GIR */,[2,1]/*LPA */,[,]/*LEG */,[0,1]/*MLL */,[,]/*OSA */,[0,1]/*RAY */,[,]/*BET */,[0,3]/*RMA */,[0,3]/*RSO */,[1,0]/*SEV */,[0,0]/*VAL */,[,]/*VLL */,[2,5]/*VIL */],
    [equipe[11][0],[,]/*ALA */,[0,0]/*ATH */,[0,1]/*ATM */,[1,5]/*BAR */,[,]/*CEL */,[,]/*ESP */,[,]/*GET */,[2,1]/*GIR */,[3,1]/*LPA */,[,]/*LEG */,[,]/*MLL */,[1,1]/*OSA */,[1,0]/*RAY */,[0,1]/*BET */,[1,1]/*RMA */,[1,0]/*RSO */,[0,0]/*SEV */,[2,1]/*VAL */,[,]/*VLL */,[1,2]/*VIL */],
    [equipe[12][0],[2,2]/*ALA */,[1,2]/*ATH */,[,]/*ATM */,[4,2]/*BAR */,[3,2]/*CEL */,[,]/*ESP */,[,]/*GET */,[,]/*GIR */,[2,1]/*LPA */,[1,1]/*LEG */,[1,0]/*MLL */,[,]/*OSA */,[1,1]/*RAY */,[1,2]/*BET */,[1,1]/*RMA */,[2,1]/*RSO */,[,]/*SEV */,[,]/*VAL */,[1,0]/*VLL */,[2,2]/*VIL */],
    [equipe[13][0],[1,0]/*ALA */,[1,2]/*ATH */,[1,1]/*ATM */,[1,2]/*BAR */,[2,1]/*CEL */,[,]/*ESP */,[,]/*GET */,[2,1]/*GIR */,[1,3]/*LPA */,[1,1]/*LEG */,[,]/*MLL */,[3,1]/*OSA */,[,]/*RAY */,[,]/*BET */,[3,3]/*RMA */,[,]/*RSO */,[,]/*SEV */,[,]/*VAL */,[1,0]/*VLL */,[0,1]/*VIL */],
    [equipe[14][0],[1,3]/*ALA */,[2,2]/*ATH */,[1,0]/*ATM */,[2,2]/*BAR */,[2,2]/*CEL */,[1,0]/*ESP */,[2,1]/*GET */,[1,1]/*GIR */,[,]/*LPA */,[2,0]/*LEG */,[1,2]/*MLL */,[,]/*OSA */,[1,1]/*RAY */,[,]/*BET */,[,]/*RMA */,[3,0]/*RSO */,[,]/*SEV */,[,]/*VAL */,[,]/*VLL */,[,]/*VIL */],
    [equipe[15][0],[3,2]/*ALA */,[,]/*ATH */,[1,1]/*ATM */,[0,4]/*BAR */,[,]/*CEL */,[4,1]/*ESP */,[2,0]/*GET */,[2,0]/*GIR */,[4,1]/*LPA */,[,]/*LEG */,[,]/*MLL */,[4,0]/*OSA */,[,]/*RAY */,[2,0]/*BET */,[,]/*RMA */,[,]/*RSO */,[4,2]/*SEV */,[,]/*VAL */,[3,0]/*VLL */,[2,0]/*VIL */],
    [equipe[16][0],[1,2]/*ALA */,[,]/*ATH */,[1,1]/*ATM */,[1,0]/*BAR */,[,]/*CEL */,[2,1]/*ESP */,[0,3]/*GET */,[,]/*GIR */,[0,0]/*LPA */,[3,0]/*LEG */,[,]/*MLL */,[0,2]/*OSA */,[1,2]/*RAY */,[2,0]/*BET */,[0,2]/*RMA */,[,]/*RSO */,[,]/*SEV */,[3,0]/*VAL */,[,]/*VLL */,[1,0]/*VIL */],
    [equipe[17][0],[,]/*ALA */,[,]/*ATH */,[,]/*ATM */,[1,4]/*BAR */,[1,0]/*CEL */,[1,1]/*ESP */,[1,0]/*GET */,[0,2]/*GIR */,[,]/*LPA */,[,]/*LEG */,[1,1]/*MLL */,[1,1]/*OSA */,[1,0]/*RAY */,[1,0]/*BET */,[,]/*RMA */,[0,2]/*RSO */,[,]/*SEV */,[1,1]/*VAL */,[2,1]/*VLL */,[1,2]/*VIL */],
    [equipe[18][0],[2,2]/*ALA */,[,]/*ATH */,[0,3]/*ATM */,[1,2]/*BAR */,[2,1]/*CEL */,[,]/*ESP */,[,]/*GET */,[2,0]/*GIR */,[2,3]/*LPA */,[2,0]/*LEG */,[,]/*MLL */,[0,0]/*OSA */,[0,1]/*RAY */,[4,2]/*BET */,[1,2]/*RMA */,[1,0]/*RSO */,[,]/*SEV */,[,]/*VAL */,[,]/*VLL */,[1,1]/*VIL */],
    [equipe[19][0],[,]/*ALA */,[1,1]/*ATH */,[0,5]/*ATM */,[,]/*BAR */,[,]/*CEL */,[1,0]/*ESP */,[,]/*GET */,[,]/*GIR */,[,]/*LPA */,[0,0]/*LEG */,[1,2]/*MLL */,[,]/*OSA */,[1,2]/*RAY */,[1,0]/*BET */,[0,3]/*RMA */,[0,0]/*RSO */,[0,4]/*SEV */,[1,0]/*VAL */,[,]/*VLL */,[1,2]/*VIL */],
    [equipe[20][0],[3,0]/*ALA */,[,]/*ATH */,[2,2]/*ATM */,[1,5]/*BAR */,[4,3]/*CEL */,[,]/*ESP */,[1,1]/*GET */,[2,2]/*GIR */,[3,1]/*LPA */,[,]/*LEG */,[4,0]/*MLL */,[,]/*OSA */,[1,1]/*RAY */,[1,2]/*BET */,[,]/*RMA */,[,]/*RSO */,[,]/*SEV */,[1,1]/*VAL */,[5,1]/*VLL */,[,]/*VIL */]    
]