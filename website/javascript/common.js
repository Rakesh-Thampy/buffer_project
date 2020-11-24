var burger = document.querySelector('.burger')
var nav = document.querySelector('.nav_links')
var products = document.querySelector('.prd')
var cross = document.querySelector('.cross')

products.addEventListener('click',function(event){
    var product_list = document.querySelector('.product_items')
    product_list.style.display = 'block';
    event.preventDefault();
})

cross.addEventListener('click',function(){
    var product_list = document.querySelector('.product_items')
    product_list.style.display = 'none';
})

burger.addEventListener('click',function(){
    console.log('working')
    nav.classList.toggle('nav_active')
})