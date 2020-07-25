let accelerationButton = document.createElement("button");
accelerationButton.innerHTML = "2x"

accelerationButton.classList.add("button-acceleration");

//Div to put the button
let interval = setInterval(()=>{
    let buttonLocation = document.querySelector("._3All_._3NrAe");
    if(buttonLocation){
        buttonLocation.appendChild(accelerationButton);
        clearInterval(interval);
    }
},1000);

accelerationButton.addEventListener("click", function(){
    console.log("clicked")
    let audios = document.querySelectorAll("audio");
    if(audios){
        audios.forEach((audio)=>{
            audio.playbackRate = "2";
        })
    }
});
