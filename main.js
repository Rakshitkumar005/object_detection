img="";
status1="";
object=[];

function setup(){
   Canvas=createCanvas(640,240);
   Canvas.center();
   video=createCapture(VIDEO);
   video.size(380,380);
   video.hide();
   
   object_detector=ml5.objectDetector('cocossd',modalLoaded);
   document.getElementById("status").innerHTML="Status: Object Detection";
}

function preload(){
    img=loadImage("download.png");
}

function modalLoaded(){
    console.log("Modal is Loaded");
    status1=true;
    
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
object=results;
}



function draw(){
    image(video,0,0,380,380);
   if(status1 !=""){
    r=random(255);
g=random(255);
b=random(255);

    object_detector.detect(video,gotResults);
for(i=0;object.length;i++){
    document.getElementById("status").innerHTML="Status: Object Detection";
document.getElementById("number_of_objects").innerHTML="Number of objects"+object.length;
    fill(r,g,b);
    percent=floor(object[i].confidence*100);
    text(object[i].label+""+percent+"%",object[i].x,object[i].y);
    noFill();
    stroke(r,g,b);
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
   }
}

