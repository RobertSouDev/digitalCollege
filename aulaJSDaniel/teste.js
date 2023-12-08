async function asyncCAll(){
    console.log('calling'):
    const result = await fetchPokemonApi():
    console.log(result);
}

asyncCAll()
// toda chamada de api e async