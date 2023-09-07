function dooooorrr(){
    document.getElementById("imgStatus").src = "images/dooooorrr.jpg";
    document.getElementById("doorStatus").innerHTML = "I am so afraid!";
    document.getElementById('mp3File').play();
}
function horror(){
    document.getElementById("imgStatus").src = "Images/horror.jpg";
    document.getElementById("doorStatus").innerHTML = "I'm in trouble!";
    document.getElementById('mp3File').pause();
    document.getElementById('mp3File').currentTime = 0;
}