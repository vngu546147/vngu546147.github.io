const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFile = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`]; //Declaring a const array listing the filenames of each image

/* Declaring the alternative text for each image file */
const imageAltText = {   //Declaring a const object listing the alternative text for each image.
  'pic1.jpg' : 'Huge rock in the middle of water thst shape like horseshoe',
  'pic2.jpg' : 'Nightfall waterfall with person looking',
  'pic3.jpg' : 'Sun is setting on the catus',
  'pic4.jpg' : 'Textures on rocks',
  'pic5.jpg' : 'Beatiful waterfall with clear blue water surrounded by mountain'
}

/* Looping through images */
for (const i of imageFile) {    //Iterate over each item in the 'imageFile' array
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${i}`);  //This will set the 'src' attribute of the new image to the file in the 'images' directory
  newImage.setAttribute('alt', imageAltText[i]);  //This will set an 'alt' attribute of the new image to the text in the 'imageAltText' array
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function(e) { //Add an click event listener to the new image
    displayedImage.src = e.target.src; //When the image is clicked, update the 'src' and 'alt' attributes of the 'displayedImage' element to match the clicked image
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {  // add an event listener to the button
  const darkLight = btn.getAttribute('class');  //this to get the attribute of the button class 
  if (darkLight === 'dark') { // this will change to class light and update the text 
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0 0 0 / 50%)';
  } else { // if not it will change the class to dark
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0 0 0 / 0%)';
  }
});