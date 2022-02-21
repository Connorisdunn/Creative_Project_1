const jokey = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click',generateJokes);

async function generateJokes(){

const jokes= await fetch('https://icanhazdadjoke.com/',{
    headers: {
        'Accept':'application/json'
    }
});
    const joke = await jokes.json();

    jokey.innerHTML = joke.joke;

}
