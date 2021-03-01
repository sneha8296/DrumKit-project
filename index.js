var numberOfDrumButtons = document.querySelectorAll(".drum").length;
//for screen button press
for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonHTML = this.innerHTML;
    devsion(buttonHTML);
    buttonAnimation(buttonHTML);

  });
    
  document.addEventListener("keypress", function (event) {

    devsion(event.key);
    buttonAnimation(event.key);

    });
//for key press on keyboard
  function devsion(key) {

      switch (key) {
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;

        case "a":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;

        case "s":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;

        case "d":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;

        case "j":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;

        case "k":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;

        case "l":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;

         default:console.log(innerHTML);
      }
    
  }
}
function buttonAnimation(currentKey){

// document.querySelector("."+currentKey);
document.querySelector("."+currentKey).classList.add("pressed");
setTimeout(function(){
  document.querySelector("."+currentKey).classList.remove("pressed");
},100);

}