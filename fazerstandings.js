function fazerstandings(){
    const standings = document.querySelector("#ligastandings"); // Substitua pelo seletor correto para sua tabela

    // Percorre o array e cria as linhas
    for (let q = 1; q < equipe.length; q++) { // Começa em 1 para ignorar o índice vazio
        // Cria uma nova linha <tr>
        const tr = document.createElement("tr");
    
        // Preenche as células <td>
        tr.innerHTML = `
            <td class="quali"></td>
            <td class="pos">${q}</td>
            <td class="escudo"><img class="crest" src="${equipe[q][1]}"></td>
            <td class="timenome">${equipe[q][0]}</td>
            <td class="pts">0</td>
            <td class="vit">0</td>
            <td class="emp">0</td>
            <td class="der">0</td>
            <td class="golb">0</td>
            <td class="golp">0</td>
            <td class="golc">0</td>
            <td class="jogos">0</td>
        `;
    
        // Adiciona a linha à tabela
        standings.appendChild(tr);
    }
}