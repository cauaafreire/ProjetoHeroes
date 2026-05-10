import { useState } from "react"

// um vetor de objetos
const heroesList = [
    { id: 70, nome: "Batman" },
    { id: 620, nome: "Spider-Man" },
    { id: 644, nome: "Superman" },
    { id: 346, nome: "Iron Man" },
    { id: 332, nome: "Hulk" },
    { id: 149, nome: "Captain America" },
    { id: 659, nome: "Thor" },
    { id: 213, nome: "Flash" },
    { id: 717, nome: "Wolverine" },
    { id: 107, nome: "Black Widow" }
]

function Heroes() {
    const [heroesGlobal, setHeroesGlobal] = useState(null)

    const getHeroesData = (idHeroes) => {

        // conexão com a api
        const uri = `https://akabab.github.io/superhero-api/api/id/${idHeroes}.json`

        fetch(uri)
            .then(res => res.json())
            .then(json => {
                const heroesFetch = {
                    nome: json.name,
                    nomeCompleto: json.biography.fullName,
                    inteligencia: json.powerstats.intelligence,
                    forca: json.powerstats.strength,
                    velocidade: json.powerstats.speed,
                    poder: json.powerstats.power,
                    altura: json.appearance.height[1],
                    peso: json.appearance.weight[1],
                    editora: json.biography.publisher,
                    alinhamento: json.biography.alignment,
                    imagem: json.images.lg
                }
                setHeroesGlobal(heroesFetch)
                console.log(heroesFetch)
            })
            .catch(() => alert('Não foi possivel acessar os dados do heroi'))
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Lista de herois</h1>
            </div>

            {heroesGlobal && (
                <div className="Heroes-info">
                    <h2>Nome: {heroesGlobal.nome}</h2>
                    <h2>Nome completo: {heroesGlobal.nomeCompleto}</h2>
                    <h2>Inteligência: {heroesGlobal.inteligencia}</h2>
                    <h2>Força: {heroesGlobal.forca}</h2>
                    <h2>Velocidade: {heroesGlobal.velocidade}</h2>
                    <h2>Poder: {heroesGlobal.poder}</h2>
                    <h2>Altura: {heroesGlobal.altura}</h2>
                    <h2>Peso: {heroesGlobal.peso}</h2>
                    <h2>Editora: {heroesGlobal.editora}</h2>
                    <h2>Alinhamento: {heroesGlobal.alinhamento}</h2>
                    <img src={heroesGlobal.imagem} alt={heroesGlobal.nome}/>
                </div>
            )}

            {heroesList.map((item) => (
                    <div className="card" key={item.id}>
                        <p>{item.nome}</p>
                        <button onClick={() => (getHeroesData(item.id))}>Saiba mais</button>
                    </div>
                ))}
        </div>
    )
}

export default Heroes