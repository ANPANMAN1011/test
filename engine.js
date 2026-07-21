let button = document.getElementById('btn')
let messageBox = document.getElementById('msg-box')

button.addEventListener('click', function(){
    messageBox.innerText = "The button was clicked!!";
})
