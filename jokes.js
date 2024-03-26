const joke = document.querySelector('#joke');
const button = document.querySelector('button');
const url = 'https://icanhazdadjoke.com/slack';

async function jokes(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);

    joke.innerHTML = data.attachments[0].text;
}

button.addEventListener('click', () => {
    jokes(url);
})