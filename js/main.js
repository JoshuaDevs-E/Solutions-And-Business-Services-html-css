window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var navbar1 = document.querySelector('.navbar-brand');
    
    if (window.scrollY > 0) {
        navbar.classList.remove('transparent', 'text-light');
        navbar1.classList.remove('transparent', 'text-light');
        navbar.classList.add('white', 'text-dark');
        navbar1.classList.add('white', 'text-dark');
    } else {
        navbar.classList.remove('white', 'text-dark');
        navbar1.classList.remove('white', 'text-dark');
        navbar.classList.add('transparent', 'text-light');
        navbar1.classList.add('transparent', 'text-light');
    }
});