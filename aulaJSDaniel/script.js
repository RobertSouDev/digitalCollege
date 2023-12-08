const countButton = document.getElementById('countButton')
const resetButton = document.getElementById('resetButton')
 
// countButton.addEventListener('click', () => {}); // fuction anony
// resetButton.addEventListener('click', () => {});


// função acincrona
async function contar() {
    let display = document.getElementById('display');
    display.innerHTML = '';
 
    for (let i = 1; i <= 10; i++) {
        display.innerHTML += i + ' ';
        await new Promise(resolve => setTimeout(resolve, 1000));
        // retorno é um resultado esperado
        // se nao usa o rej tambem para trata erros
    }
}
 
function reset() {
    let display = document.getElementById('display');
    display.innerHTML = '...';
}

countButton.addEventListener('click', contar);
resetButton.addEventListener('click', reset);
