
async function quantidadeVoto() {
    const url = 'https://raw.githubusercontent.com/luizhenrique0512/trabalho_json_grafico/refs/heads/main/grafico.json'
    const res = await fetch(url)
    const dados = await res.json()
    const disciplina = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: Região, 
            y: População, 
            type: 'bar'
        }
    ]

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)
}

quantidadeVoto()
