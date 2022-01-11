noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550 ,500);

    canvas = createCanvas(550 ,500);
    canvas.position(560 ,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);

}
function modelLoaded(){
    console.log('Model Loaded');
}
function gotResult(results){
    if(results.length > 0)
    {
       console.log(results);
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
       console.log("noseX = "+noseX+"noseY = "+noseY);

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - rightWristX);

       console.log("leftWristX ="+leftWristX + "rightWrist ="+rightWristX + "Difference ="+difference);
       
    }
}
function draw() {
    document.getElementById("square_side").innerHTML ="The size of the text is " +difference+"px";

    background('cornflowerblue');
    fill('purple');
    stroke('purple');
    text("Hi" ,noseX ,noseY)
    textSize(difference);

}