function fazerprobabilidades(){
    const standings = document.querySelector("#ligaprobabilidades"); // Substitua pelo seletor correto para sua tabela

    // Percorre o array e cria as linhas
    for (let q = 1; q < equipe.length; q++) { // Começa em 1 para ignorar o índice vazio
        // Cria uma nova linha <tr>
        const linhadetabela = document.createElement("tr");
        var posicionamento = function(){
            let posrep = `<td class="num">0<span class="precisao">.000</span>%</td>`
            for(let sz = 0; sz<equipe.legth; sz++){
                posrep = posrep+posrep
            }
        }
    
        // Preenche as células <td>
        let posrep = '';
        for (let sz = 1; sz < equipe.length; sz++) {
            posrep += `<td class="num">0<span class="precisao">.000</span>%</td>`;
        }

        linhadetabela.innerHTML = `
            <td class="quali"></td>
            <td class="pos"></td>
            <td class="escudo"><img></td>
            <td class="timenome">Nome</td>
            <td class="num pts">pts</td>
            <td class="num">cam%</td>
            <td class="num">ucl%</td>
            <td class="num">uel%</td>
            <td class="num">not%</td>
            <td class="num">rel%</td>${posrep}
        `;
    
        // Adiciona a linha à tabela
        standings.appendChild(linhadetabela);
    }
}