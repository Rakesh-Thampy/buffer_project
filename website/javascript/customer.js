
var link_one = document.querySelector('.carou_1')
var link_two = document.querySelector('.carou_2')
var link_three = document.querySelector('.carou_3')

link_one.addEventListener('click',function(){
    var box_one = document.getElementById('one')
    var box_two = document.getElementById('two')
    var box_three = document.getElementById('three')
    box_one.style.display = "flex"
    box_two.style.display = "none"
    box_three.style.display = "none"
    console.log("working")
})

link_two.addEventListener('click',function(){
    var box_one = document.getElementById('one')
    var box_two = document.getElementById('two')
    var box_three = document.getElementById('three')
    box_one.style.display = "none"
    box_two.style.display = "flex"
    box_three.style.display = "none"
})

link_three.addEventListener('click',function(){
    var box_one = document.getElementById('one')
    var box_two = document.getElementById('two')
    var box_three = document.getElementById('three')
    box_one.style.display = "none"
    box_two.style.display = "none"
    box_three.style.display = "flex"
})