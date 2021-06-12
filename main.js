var canvas=document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var background_of_mars=["http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG","mars-planet-surface-with-dust-blowing-rtsmo0wm_F0000.pnj","http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"]
var random_picker= Math.floor(Math.random()*4);

var rover_x= 10;
var rover_y= 10;
var rover_width= 100;
var rover_height= 90;

var background_image=background_of_mars[random_picker];
var rover_image="rover.png";

function add(){

    background_imageTag= new Image();
    background_imageTag.onload= uploadbackground_image;
    background_imageTag.src= background_image;

    rover_imageTag= new Image();
    rover_imageTag.onload= uploadrover_image;
    rover_imageTag.src= rover_image;

}
function uploadbackground_image(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
    
}
function uploadrover_image(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    var keypress= e.keyCode;
    console.log(keypress);

    if (keypress=="38") {
        up();
        console.log("up arrow is pressed");
    }
        if (keypress=="40") {
            down();
            console.log("down key is pressed");

       
    }
if (keypress=="39") {
    right();
    console.log("right key is pressed");
}
        if (keypress=="37") {
            left();
            console.log('left key is pressed');
        }
}
 
function up(){
    if (rover_y >=0) {
        rover_y-=10;
        console.log("Up key is pressed"+rover_x,rover_y);
        uploadbackground_image();
        uploadrover_image();
    }
}
function down(){
    if (rover_y <=500) {
        rover_y+=10;
        console.log("Down key is pressed"+rover_x,rover_y);
        uploadbackground_image();
        uploadrover_image();
    }
}
function right(){
    if (rover_x <=700) {
        rover_x+=10;
        console.log("Right  key is pressed"+rover_x,rover_y);
        uploadbackground_image();
        uploadrover_image();
    }
}
function left(){
    if (rover_x >=0) {
        rover_x-=10;
        console.log("Left key is pressed"+rover_x,rover_y);
        uploadbackground_image();
        uploadrover_image();
    }
}

