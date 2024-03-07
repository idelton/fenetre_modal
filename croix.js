
const modal = document.querySelector('.modal-container');
const btn = document.querySelector('.btn-success');
const icone = document.querySelector('.icone');
const code = document.querySelector('.code');

window.addEventListener('scroll', displayModal);

function displayModal() {
    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, 'hauteur');
    if (hauteur > 400) {
        modal.style.display = "flex";
    }
}

btn.addEventListener("click", function() {
    console.log('bouton cliqué');
});

icone.addEventListener("click", function() {
    console.log('icone cliqué');
    modal.style.display = "none";
    window.removeEventListener('scroll', displayModal);
});
