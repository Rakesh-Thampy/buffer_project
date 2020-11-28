var analyze = document.getElementById("analyze_switch")
var publish = document.getElementById("publish_switch")
var publish_tab = document.querySelector('.main_container_publish')
var analyze_tab = document.querySelector('.main_container_analyze')

analyze.addEventListener('click', function(event) {
    console.log("working")
    publish_tab.style.display = 'none';
    analyze_tab.style.display = 'inline';


    event.preventDefault()
})

publish.addEventListener('click', function(event) {
    console.log("working")
    publish_tab.style.display = 'inline';
    analyze_tab.style.display = 'none';


    event.preventDefault()
})


var working = document.getElementsByClassName('switch_button')
working.addEventListener('toggle',function(){
    console.log('working')
})

// function display_publish() {
//     if (a == 1) {
//         return 1


//     }
// }
// console.log(a)

// function display_publish() {
//     if (a == 1) {
//         document.getElementsByClassName('container_for_toggle').style.display = "inline";
//         return a = 0
//     } else {
//         document.getElementsByClassName('container_for_toggle').style.display = "none";
//         return a = 1
//     }
// }