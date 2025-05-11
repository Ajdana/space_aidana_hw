const features=document.querySelector('.features')
const company=document.querySelector('.company')
const dropDown1=document.querySelector('.dropDown_1')
const dropDown2=document.querySelector('.dropDown_2')
const navbar=document.querySelector('.navbar')
const menu=document.querySelector('.menu')
menu.addEventListener('click', function (){
    navbar.classList.toggle('act')
    menu.classList.toggle('open')
})
features.addEventListener('mouseover', () => {
    if (!dropDown2.classList.contains('active')) dropDown1.classList.add('active');
});
features.addEventListener('mouseout', () => dropDown1.classList.remove('active'));

company.addEventListener('mouseover', () => {
    if (!dropDown1.classList.contains('active')) dropDown2.classList.add('active');
});
company.addEventListener('mouseout', () => dropDown2.classList.remove('active'));
