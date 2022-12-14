const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const imagePath = 'https://raw.githubusercontent.com/tkcthulhu/MDN-gallery-project/main/images/'


const images = [
    `${imagePath}pic1.jpg`, 
    `${imagePath}pic2.jpg`, 
    `${imagePath}pic3.jpg`, 
    `${imagePath}pic4.jpg`, 
    `${imagePath}pic5.jpg`
];

/* Declaring the alternative text for each image file */

const altTXT = {
  '../images/pic1.jpg' : 'Dis be an eyeball',
  '../images/pic2.jpg' : 'Melty rock thing',
  '../images/pic3.jpg' : 'So according to Dungeon and Daddies, the purple ones make you levitate and the white ones make you forget the last 5 minutes',
  '../images/pic4.jpg' : 'Stage of the 1999 cinematic masterpiece \"The Mummy\" starring Brendan fraser and Rachel Weisz.', 
  '../images/pic5.jpg' : 'Hail Mothra'
};

/* Looping through images */

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altTXT[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', images[i]);
        displayedImage.setAttribute('alt', images[i]);
});
};

//Wiring up the Darken/Lighten button

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
        if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        } 
        else  if (btnClass === 'light') {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        }
});

/* document.addEventListener('keyboardEvent', () => {
    if ('keyUp') {
        displayedImage.setAttribute('src', images[i++]);
    } else if ('keyDown') {
        displayedImage.setAttribute('src', images[i--]);
    }
  });
*/
  