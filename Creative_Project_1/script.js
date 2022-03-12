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


function get_random_dog_image(){

  url = "https://dog.ceo/api/breeds/image/random";

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    display_image(data.message);
  })
  .catch(function(error){
    console.log("Error: " + error);
  });


}

function display_image(image_url){
  document.getElementById("image").src = image_url;
}
