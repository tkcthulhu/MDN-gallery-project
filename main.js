const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];



/* Declaring the alternative text for each image file */
const altTXT = {
  'pic1.jpg' : 'Dis an eyeball',
  'pic2.jpg' : 'Melty rock thing',
  'pic3.jpg' : 'So according to Dungeon and Daddies, the purple ones make you levitate and the white ones make you forget the last 5 minutes',
  'pic4.jpg' : 'Stage of the 1999 cinematic masterpiece \"The Mummy\" starring Brendan fraser and Rachel Weisz.', 
  'pic5.jpg' : 'Hail Mothra'
}
/* Looping through images */
for (const image of images) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `image/${image}`);
newImage.setAttribute('alt', altTXT[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', images[i]);
    displayedImage.setAttribute('alt', images[i])
}
/* Wiring up the Darken/Lighten button */
