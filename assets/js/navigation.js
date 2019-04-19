{
  document.addEventListener('DOMContentLoaded', () => {
  
    let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(burgerElement => {
        burgerElement.addEventListener('click', () => {

          let target = burgerElement.dataset.target;
          let $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          burgerElement.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }

  });
}