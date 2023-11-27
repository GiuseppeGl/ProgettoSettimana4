 window.addEventListener('scroll', function() {
    var section = document.querySelector('section');
    var sectionBottom = section.offsetTop + section.offsetHeight + 5;

    var header = document.querySelector('header');
    var started = document.getElementById('started');

    if (window.scrollY >= sectionBottom) {
        header.style.backgroundColor = 'white';
        started.style.backgroundColor = 'green';
    } else {
        header.style.backgroundColor = '#ffc017';
        started.style.backgroundColor = 'green';
    }
}); 

 
 

