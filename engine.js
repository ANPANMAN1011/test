let button = document.querySelector('.btn');
let messageBox = document.querySelector('.msg-box');

button.addEventListener('click', async function(){

    let baseText = "Harshillji is meditating a advice";
    let dots = " ";
    // show a loading message
    messageBox.innerText = baseText;
    // creating the advice loading animation
    let lodingAnim = setInterval(function(){
        if (dots.length <= 3){
            dots += ".";
        } else {
            // upon hitting less than or equal to 3 dots
            dots = " ";
        }
        messageBox.innerHTML = baseText + dots;
    }, 400); // delay of 400 ms between each dot
    try {
        // fetch advice from api
        let responce = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`)
        // convert raw interet resoponse into readbl ejason file
        let data = await responce.json();
        // stop the animation when the advice is fetched
        clearInterval(lodingAnim);
        // grab that advice from json and display it inside test box
        messageBox.innerHTML = `${data.slip.advice}`;
    } catch (error)
    {
        clearInterval(lodingAnim);
        // display error if fetch fail
        messageBox.innerHTML = "Harshill baba not in the mood today(error: failed to fetch advice from api)";
        console.error(error);
    }
});
