// Function to add click event listener to navigation items
function addNavItemClickListeners() {
  // Select the navigation element by its ID
  const navigation = document.querySelector('#navigation');

  // Select all the list items within the navigation element
  const navItems = navigation.querySelectorAll('li');

  // Iterate through each list item
  navItems.forEach((item) => {
    // Add a click event listener to each list item
    item.addEventListener('click', function() {
      // When a list item is clicked, remove the 'active' class from all list items
      navItems.forEach((activeItem) => {
        activeItem.classList.remove('active');
      });

      // Add the 'active' class to the clicked list item
      item.classList.add('active');
    });
  });
}

// Call the function to add click event listeners to navigation items
addNavItemClickListeners();

// This script is form project 5
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

// this is from excrise 30 this is to validate the phone and email

// Get the input fields
const emailInput = document.getElementById('email'); 
const phoneInput = document.getElementById('phone'); 

// Add event listeners to the input fields
emailInput.addEventListener('input', validateEmail); // Call the validateEmail function whenever the user types something in the phone and email input field
phoneInput.addEventListener('input', validatePhone); 

// Function to validate email
function validateEmail() {
  const emailValue = emailInput.value.trim(); // Get the value of the email input field and remove any whitespace
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression to match a valid email address

  if (!emailRegex.test(emailValue)) { // If the email value does not match the regular expression
    emailInput.setCustomValidity('Please enter a valid email address (e.g. example@example.com)'); // Set a custom error message
  } else if (emailValue.length < 5) { // If the email value is less than 5 characters long
    emailInput.setCustomValidity('Email address should be longer'); // Set a custom error message
  } else {
    emailInput.setCustomValidity(''); // If the email value is valid, clear the error message
  }
  emailInput.reportValidity(); // Trigger the validation and display the error message
}

// Function to validate phone number
function validatePhone() {
  const phoneValue = phoneInput.value.trim(); // Get the value of the phone input field and remove any whitespace
  const phoneRegex = /^\(?([0-9]{3}-[0-9]{2}-[0-9]{3})$/; // Regular expression to match a valid phone number in the format

  if (!phoneRegex.test(phoneValue)) { // If the phone value does not match the regular expression
    phoneInput.setCustomValidity('Please enter a valid phone number in the format 555-555-1234'); // Set a custom error message 555-555-1234
  } else {
    phoneInput.setCustomValidity(''); // If the phone value is valid, clear the error message
  }
  phoneInput.reportValidity(); // Trigger the validation and display the error message
}
