const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let images = ['../images/pic1.jpg', '../images/pic2.jpg', '../images/pic3.jpg', '../images/pic4.jpg', '../images/pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTXT = {
  '../images/pic1.jpg' : 'Dis be an eyeball',
  '../images/pic2.jpg' : 'Melty rock thing',
  '../images/pic3.jpg' : 'So according to Dungeon and Daddies, the purple ones make you levitate and the white ones make you forget the last 5 minutes',
  '../images/pic4.jpg' : 'Stage of the 1999 cinematic masterpiece \"The Mummy\" starring Brendan fraser and Rachel Weisz.', 
  '../images/pic5.jpg' : 'Hail Mothra'
}
/* Looping through images */
for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', images[image]);
newImage.setAttribute('alt', altTXT[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', images[image]);
    displayedImage.setAttribute('alt', images[image]);
});
};

//Wiring up the Darken/Lighten button