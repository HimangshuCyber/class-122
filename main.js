//Declaration of variables
x = 0
y = 0
draw_circle = "";
draw_rectangle = "";

//Speech synthesis declarations
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function preload(){
    //There is nothing here.
}
function setup(){
    canvas = createCanvas(900, 600);
    canvas.center();
}
function start(){
    document.getElementById("status").innerHTML = "The program is listening. "
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event)
    spoken_content = event.results[0][0].transcript;
    document.getElementById('status').innerHTML = 'Speech has been recognized as ' + spoken_content;

    if(spoken_content == 'circle'){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);

        document.getElementById('status').innerHTML = 'The ai has drawn a ' + spoken_content;
        draw_circle = 'set'
    }  
    if(spoken_content == 'rectangle'){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);

        document.getElementById('status').innerHTML = 'The ai has drawn a ' + spoken_content;
        draw_rectangle = 'set'
    }
}
function draw(){
    if(draw_circle == 'set'){
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        draw_circle = "";
    }
    if(draw_rectangle == 'set'){
        rect(x, y, 70, 35)
        draw_rectangle = "";
    }
}