const url = 'https://raw.githubusercontent.com/luizhenrique0512/trabalho_json_grafico/refs/heads/main/estatistica.json'

async function vizualizarInformacoes() {
    const res = await fetch(url)
    const dados = await res.json()
    const Brasil = (dados.Brasil)/1000000
    const norte = (dados.norte)/1000000
    const nordeste = (dados.nordeste)/1000000
    const centrooeste = (dados.centrooeste)/1000000
    const sul = (dados.sul)/1000000
    const suldeste = (dados.suldeste)/1000000
    const Brasil2010 = (dados.Brasil2010)/1000000

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Sabia que no Brasil temos <span>${Brasil} milhões</span> de habitantes e deles temos <span> ${norte} mi</span> no norte,nordeste <span> ${nordeste} mi </span>, suldeste <span> ${suldeste} Mi</span>, no sul ${sul} e <span>  ${centrooeste} mi </span> no centro-oeste. Em 2010 o Brasil tinha <span>  ${Brasil2010} </span> milhões, o que quer dizer que o Brasil cresceu <span> 11,5% </span> populacionamente`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoes() 
