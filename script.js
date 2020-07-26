let accelerationButton = document.createElement("button");
accelerationButton.innerHTML = "2x"

accelerationButton.classList.add("button-acceleration");

//Setting the button into a div, after the div loads on the page
let interval = setInterval(()=>{
    let buttonLocation = document.querySelector("._3All_._3NrAe");
    if(buttonLocation){
        buttonLocation.appendChild(accelerationButton);
        clearInterval(interval);
    }
},1000);

//When the button is clicked, all the audios on whatsapp is accelerated twice
accelerationButton.addEventListener("click", function(){
    console.log("clicked")
    let audios = document.querySelectorAll("audio");
    if(audios){
        audios.forEach((audio)=>{
            audio.playbackRate = "2";
        })
    }
});
