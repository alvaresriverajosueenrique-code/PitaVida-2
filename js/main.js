// Cambiar modo claro y oscuro
const btnTema = document.getElementById('btnTema');
const iconoTema = btnTema.querySelector('i');

btnTema.addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
    
    if (document.body.classList.contains('modo-oscuro')) {
        iconoTema.classList.remove('bi-moon');
        iconoTema.classList.add('bi-sun');
    } else {
        iconoTema.classList.remove('bi-sun');
        iconoTema.classList.add('bi-moon');
    }
});

// Animación simple para los botones de comprar
const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        let textoOriginal = this.innerText;
        
        this.innerText = '¡Agregado!';
        this.classList.remove('btn-primary');
        this.classList.add('btn-success');
        
        setTimeout(function() {
            boton.innerText = textoOriginal;
            boton.classList.remove('btn-success');
            boton.classList.add('btn-primary');
        }, 1500);
    });
});

// Cerrar el menú móvil al hacer clic en un enlace
const enlacesNav = document.querySelectorAll('.nav-link');
const menuColapsable = document.getElementById('menu');

enlacesNav.forEach(function(enlace) {
    enlace.addEventListener('click', function() {
        if (menuColapsable.classList.contains('show')) {
            let menuBootstrap = bootstrap.Collapse.getInstance(menuColapsable);
            menuBootstrap.hide();
        }
    });
});