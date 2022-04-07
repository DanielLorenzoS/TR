let menu = document.querySelector('.imgmenu');
let change = document.getElementById('btnMenu');
let btn = document.querySelectorAll('.b');
let pivot = false;

menu.addEventListener('click', e => {
    if (pivot == false) {
        pivot = true;
        change.style.opacity = '1';
    }else {
        pivot = false;
        change.style.opacity = '0';
    }
});

btn.forEach(e => {
    e.addEventListener('click', eject => {
        change.style.opacity = '0';
    });    
});

let titleCoffe = document.getElementById('titleCoffe');
let titleCoffeResponsive = document.getElementById('titleCoffe-responsive');
let largo = document.getElementById('largo');
let largoResponsive = document.getElementById('largo-responsive');
let ancho = document.getElementById('ancho');
let anchoResponsive = document.getElementById('ancho-responsive');
let alto = document.getElementById('alto');
let altoResponsive = document.getElementById('alto-responsive');
let product = document.querySelector('.product');
let producto = document.querySelector('.producto');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

let counter = 0;
let coffes = ['images/torres.jpg',
            'images/doble.jpg', 
            'images/princesas.jpg', 
            'images/resbaladilla.jpg', 
            'images/cuadrado.jpg',
            'images/arcos.jpg'
            ];

let title = ['Torres',
            'Doble Torre',
            'Princesas', 
            'Resbaladilla',
            'Cuadrado',
            'Arcos'
            ];

let largoA = ['20mts',
            '10mts',
            '15mts',
            '14mts',
            '8mts',
            '11mts'
            ];

let anchoA = ['20mts',
            '10mts',
            '15mts',
            '14mts',
            '8mts',
            '11mts'
            ];

let altoA = ['20mts',
            '10mts',
            '15mts',
            '14mts',
            '8mts',
            '11mts'
            ];

let coffeArray = ()=> {
    left.addEventListener("click", ()=> {
        counter--;
        counter == -1 ? counter = coffes.length-1 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
        largo.innerHTML = `Largo: ${largoA[counter]}`
        ancho.innerHTML = `Ancho: ${anchoA[counter]}`
        alto.innerHTML = `Alto: ${altoA[counter]}`
    });
    product.addEventListener("click", ()=> {
        counter++;
        counter == -1 ? counter = coffes.length-1 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
        largo.innerHTML = `Largo: ${largoA[counter]}`
        ancho.innerHTML = `Ancho: ${anchoA[counter]}`
        alto.innerHTML = `Alto: ${altoA[counter]}`
    });
    producto.addEventListener("click", ()=> {
        counter++;
        counter == coffes.length ? counter = 0 : counter;
        titleCoffeResponsive.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'cofff');
        largoResponsive.innerHTML = `Largo: ${largoA[counter]}`
        anchoResponsive.innerHTML = `Ancho: ${anchoA[counter]}`
        altoResponsive.innerHTML = `Alto: ${altoA[counter]}`
    }); 
    right.addEventListener("click", ()=> {
        counter++;
        counter == coffes.length ? counter = 0 : counter;
        titleCoffe.innerHTML = `${title[counter]}`
        changeImage(`${coffes[counter]}`, 'coff');
        largo.innerHTML = `Largo: ${largoA[counter]}`
        ancho.innerHTML = `Ancho: ${anchoA[counter]}`
        alto.innerHTML = `Alto: ${altoA[counter]}`
    }); 
}

function changeImage(a, imgid) {
    document.getElementById(imgid).src=a;
}

coffeArray()

const inicio = document.querySelector('.intro');
const before = document.querySelector('.history');
const second = document.querySelector('.package');
const third = document.querySelector('.info');
const nav1 = document.getElementById('pestaña1');
const nav2 = document.getElementById('pestaña2');
const nav3 = document.getElementById('pestaña3');
const nav4 = document.getElementById('pestaña4');

const options = {
    threshold: .5
}

let nav = (panel, nav) => {
    const verifyVisibility = (entries) => {
        const entry = entries[0];
        entry.isIntersecting ? nav.style.color  = '#000350' : nav.style.color = '#fff';
    }
    
    const observer = new IntersectionObserver(verifyVisibility, options);
    
    observer.observe(panel);
}

nav(inicio, nav1)
nav(second, nav3)
nav(third, nav4)

let touch = document.querySelector('.touch');

let verify = (entries) => {
    let entri = entries[0];
    entri.isIntersecting ? touch.style.opacity = '0' : touch.style.opacity = '1';
}
    
let observador = new IntersectionObserver(verify, options);
    
observador.observe(touch);