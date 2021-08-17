const cards = document.querySelectorAll ('.memory-card');

function flipCard () {
    console.log('me clikeastes');

}

cards.forEach(card => card.addEventListener ('click', flipCard));