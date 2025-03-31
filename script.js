document.addEventListener('DOMContentLoaded', function() {
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
   
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkPage = link.getAttribute('href');
        
        if (currentPage === linkPage) {
            link.classList.add('active');
        }
    });
});