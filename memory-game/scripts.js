const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        // primera carta
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        // segunda carta
        hasFlippedCard = false;
        secondCard = this;
        // matchean?
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // matchearon
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            console.log('matchearon');
        }
        else {
            // no hay match
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1500);

        }

    }
}

cards.forEach(card => card.addEventListener('click', flipCard));