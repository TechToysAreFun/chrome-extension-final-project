document.addEventListener('DOMContentLoaded', async () => {

    let rawFetch;

    await fetch("https://api.themotivate365.com/stoic-quote")
        .then((res) => res.json())
        .then((data) => {
            rawFetch = data;
        });
    const myQuote = await rawFetch;
    const body = document.querySelector('body');
    const newDiv = document.createElement('div');
    newDiv.innerText = myQuote.quote;
    const author = document.createElement('p');
    author.innerText = myQuote.author;
    body.appendChild(newDiv);
    body.appendChild(author);
});