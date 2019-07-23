const URL = "http://localhost:3000/pokemon"

const fetchPokemon = () => {
  return fetch(URL)
    .then(res => res.json())
}

const postPokemon = pokemon => {
  return fetch(URL, {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: pokemon.name,
      stats: [{ name: 'hp', value: 900}],
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl,
      }
    })
  })
  .then(res => res.json())
}

export default {
  fetchPokemon,
  postPokemon
}
