const elbox = document.querySelector('.Necessary-sites-box');
const elbright = document.querySelector('.brightness');
const elbut = document.querySelector('.button-menu');
const elbutclose = document.querySelector('.close');
const elbutall = document.querySelector('.all');
const elbutprog = document.querySelector('.programmers');
const elbutfun = document.querySelector('.fun');
const elbutall2 = document.querySelector('.all-2');
const elbutrock = document.querySelector('.rock');
const elbutquiet = document.querySelector('.quiet');
const elsites = document.querySelectorAll('.site');
const elfunsites = document.querySelectorAll('.fun-site');
const elprogsites = document.querySelectorAll('.programmers-site');
const elrockmusic = document.querySelectorAll('.rock-music');
const elquietmusic = document.querySelectorAll('.quiet-music');
const ellinebox = document.querySelector('.line-box');

elbut.addEventListener('click', () => {
    elbox.classList.add('visible');
    elbright.classList.add('bright');
});

elbutclose.addEventListener('click', () => {
    elbox.classList.remove('visible');
    elbright.classList.remove('bright');
});

elbutprog.addEventListener('click', () => {
    elfunsites.forEach(funsite => {
        funsite.classList.add('hidden');
    });
    elprogsites.forEach(progsite => {
        progsite.classList.remove('hidden');
    });
});
elbutfun.addEventListener('click', () => {
    elprogsites.forEach(prog => {
        prog.classList.add('hidden');
    });
    elfunsites.forEach(funsite => {
        funsite.classList.remove('hidden');
    });
});
elbutall.addEventListener('click', () => {
    elfunsites.forEach(funsite => {
        funsite.classList.remove('hidden');
    });
    elprogsites.forEach(progsite => {
        progsite.classList.remove('hidden');
    });
});
elbutall2.addEventListener('click', () => {
    elrockmusic.forEach(hide => {
        hide.classList.remove('hidden');
    });
    elquietmusic.forEach(visible => {
        visible.classList.remove('hidden');
    });
});
elbutrock.addEventListener('click', () => {
    elrockmusic.forEach(hide => {
        hide.classList.remove('hidden');
    });
    elquietmusic.forEach(visible => {
        visible.classList.add('hidden');
    });
});
elbutquiet.addEventListener('click', () => {
    elrockmusic.forEach(hide => {
        hide.classList.add('hidden');
    });
    elquietmusic.forEach(visible => {
        visible.classList.remove('hidden');
    });
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Q' || event.key === 'q' || event.key === 'Й' || event.key === 'й') {
        elbox.classList.toggle('visible');
        elbright.classList.toggle('bright');
    }
});