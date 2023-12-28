const elbox = document.querySelector('.links');
const elbutmenu = document.querySelector('.menu');
const elbutclose = document.querySelector('.close');

elbutmenu.addEventListener('click', () => {
    elbox.classList.add('visible');
});
elbutclose.addEventListener('click', () => {
    elbox.classList.remove('visible');
});
// elbutprog.addEventListener('click', () => {
//     elfunsites.forEach(funsite => {
//         funsite.classList.add('hidden');
//     });
//     elprogsites.forEach(progsite => {
//         progsite.classList.remove('hidden');
//     });
// });
// document.addEventListener('keydown', function (event) {
//     if (event.key === 'Q' || event.key === 'q' || event.key === 'Й' || event.key === 'й') {
//         elbox.classList.toggle('visible');
//         elbright.classList.toggle('bright');
//     }
// });