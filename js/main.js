let images = ['img/gen1.png', 'img/gen2.png', 'img/gen3.png'];

let index = 0;
const imgElement = document.querySelector('#accueil_img');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 3000);
};