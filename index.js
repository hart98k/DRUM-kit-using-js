

var len= document.querySelectorAll("button").length;

//for click detection
for( var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function   (){
        this.style.color="white";
        playSound(this.innerHTML);
        playAni(this.innerHTML)
        
    });}

//for key press detection
document.addEventListener("keydown",function (event){
    playSound(event.key);
    playAni(event.key);
});


    function playSound(key){
        switch(key){
            case "w":
                var  audio= new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var  audio= new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var  audio= new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var  audio= new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                var  audio= new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                var  audio= new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                var  audio= new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            default:
    
           }

    }
    function playAni (key){
        document.querySelector("."+key).classList.add("pressed");
        setTimeout(function (){
            document.querySelector("."+key).classList.remove("pressed");
        },200);
    }




