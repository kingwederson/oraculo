# Oráculo

**Oráculo** é um portal web interativo para consulta de probabilidades, simulações e análises de campeonatos de futebol nacionais e internacionais. O projeto oferece uma navegação intuitiva por diferentes países e divisões, permitindo ao usuário acessar rapidamente relatórios detalhados sobre cada liga.

A página principal apresenta um menu em árvore, organizado por país e divisão, com ícones temáticos para facilitar a identificação visual. Ao selecionar uma liga, o usuário é direcionado ao diretório correspondente, onde encontra o arquivo `relatorio.html` com informações específicas daquela competição, como tabelas, estatísticas, probabilidades de resultados e simulações de cenários.

O projeto utiliza apenas HTML, CSS e JavaScript puro, sem dependências externas, garantindo leveza e facilidade de manutenção. Os dados e relatórios são organizados em subdiretórios por país e divisão, tornando o acesso e a atualização das informações simples e estruturados.

## Principais funcionalidades

- **Navegação por países e divisões:** Interface baseada em `<details>` e `<summary>`, com ícones para cada país e divisão.
- **Relatórios detalhados:** Cada liga possui um `relatorio.html` com análises, probabilidades e simulações de resultados.
- **Design responsivo:** Compatível com dispositivos móveis e desktops.
- **Fácil expansão:** Estrutura de diretórios permite adicionar novas ligas e países facilmente.
- **Sem dependências externas:** Todo o código é em HTML, CSS e JavaScript puro.

## Ligas disponíveis

- Brasileirão Série A
- Premier League (Inglaterra)
- EFL Championship (Inglaterra)
- EFL League One (Inglaterra)
- EFL League Two (Inglaterra)
- (Outras ligas europeias podem ser facilmente adicionadas)

## Estrutura do projeto

```
oraculo.wederson.com/
├── index.html
├── geral.css
├── simulador.js
├── brasil/
│   └── a/
│       └── relatorio.html
├── inglaterra/
│   ├── a/
│   │   └── relatorio.html
│   ├── b/
│   │   └── relatorio.html
│   ├── c/
│   │   └── relatorio.html
│   └── d/
│       └── relatorio.html
└── ... (outros países e divisões)
```

## Como usar

1. Abra o arquivo `index.html` em seu navegador.
2. Escolha o país e a divisão desejada no menu.
3. Clique na liga para acessar o relatório detalhado (`relatorio.html`) com probabilidades, simulações e estatísticas.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para sugerir melhorias, adicionar novas ligas ou corrigir eventuais problemas.

---

**Oráculo** é uma ferramenta para fãs de futebol e analistas esportivos que desejam consultar rapidamente probabilidades e simulações de campeonatos, com navegação simples e relatórios
