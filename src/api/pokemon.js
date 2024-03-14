import {API_HOST} from '../utils/constanst'

export async function getPokemons(limit = 20, offset = 0){
  try {
    const url = `${API_HOST}/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
     throw new Error('Error fetching pokemons')
  }
}

export async function getPokemonDetails(url){
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Error fetching pokemon')
    }
 }