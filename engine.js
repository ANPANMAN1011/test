let button = document.getElementsByClassName('btn')
let messageBox = document.getElementsByClassName('msg-box')

button.addEventListener('click', function(){
    messageBox.innerText = "The button was clicked!!";
})
