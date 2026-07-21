let button = document.querySelector('.btn');
let messageBox = document.querySelector('.msg-box');

button.addEventListener('click', async function(){

    // show a loading message
    messageBox.innerText = "harshillji is meditating some advice so bacha please wait!";
    try {
        // fetch advice from api
        let responce = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`)
        // convert raw interet resoponse into readbl ejason file
        let data = await responce.json();

        // grab that advice from json and display it inside test box
        messageBox.innerHTML = `${data.slip.advice}`;
    } catch (error)
    {
        // display error if fetch fail
        messageBox.innerHTML = "Harshill baba not in the mood today(error: failed to fetch advice from api)";
        console.error(error);
    }
});
