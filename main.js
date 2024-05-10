const navigation = document.querySelector('#navigation');
const navItems = navigation.querySelectorAll('li');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((activeItem) => {
      activeItem.classList.remove('active');
    });
    item.classList.add('active');
  });
});



