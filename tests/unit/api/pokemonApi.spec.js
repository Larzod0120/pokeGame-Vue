import pokemonApi from "@/api/pokemonApi"

describe('pokemonApi', () => {



    test('axios debe estar configurado con el API de Pokemon', () => {

        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })


})