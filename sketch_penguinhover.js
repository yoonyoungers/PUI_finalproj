//Yoon Young Kim
//Section E
//yoonyouk@andrew.cmu.edu
//Project-03

function setup() {
    createCanvas(640, 480);
    background(256);

}

function draw() {

    angleMode(DEGREES);

    var a = mouseX
    var b = mouseY

    //underwater background change
    //This will change the color values as the mouse moves down
    //Water will change into a darker blue
    var Rx = map(mouseY,0,height,116,20);
    var Gx = map(mouseY,0,height,188,21);
    var Bx = map(mouseY,0,height,252,138);

    noStroke();
    fill(Rx, Gx, Bx);
    rect(0, 0, 640, 480);

    
    //SCUBA DIVER
    // The tiny figure will follow the mouse
    
    //head
    noStroke();
    fill(13, 0, 69);
    ellipseMode(CENTER);
    ellipse(a, b+10, 40, 40);
   
   //eyes
    stroke(247, 209, 9);
    strokeWeight(3);
    fill(224, 162, 115);
    rect(a-15, b+5, 30, 15);

    //eyeballs
    noStroke();
    fill(0);
    ellipse(a-5, b+15, 5, 5);
    ellipse(a+5, b+15, 5, 5);


    //body
    noStroke();
    fill(13, 0 , 69);  
    rect(a-20, b+25, 40, 60);


    //SCUBA DIVER ARMS/LEGS

    //left hand
    //left hands moves from 80 below the mouse to 5 above the mouse
    var lefthand = map(b, 0, height, b+80, b-5);

    stroke(13, 0, 69);
    strokeWeight(10);
    line(a-15, b+40, a-50, lefthand);

    //moving the right hand
    //right hands moves from 80 below the mouse to 5 above the mous
    var righthand = map(b, 0, height, b+80, b-5);

    stroke(13, 0, 69);
    strokeWeight(10);
    line(a+15, b+40, a+50, righthand);



    //left leg

    //moving left foot in a rotating manner using mapping
    var leftfootX = map(b, 0, height, a-15, a-70);
    var leftfootY = map(b, 0, height, b+140, b+60);
    stroke(13, 0, 69);
    strokeWeight(12);
    line(a-10, b+80, leftfootX, leftfootY);


    //right leg
    //moving right foot in a rotating manner using mapping
    var rightfootX = map(b, 0, height, a+15, a+70);
    var rightfootY = map(b, 0, height, b+140, b+60);
    stroke(13, 0, 69);
    strokeWeight(12);
    line(a+10, b+80, rightfootX, rightfootY);

    //SMILE
    noFill();
    if (b < 100){
    stroke(247, 72, 79);
    strokeWeight(2);
    arc(a, b+20, 5, 5, 0, 180);
    }

    if (b >= 100 && b < 300){
    stroke(247, 72, 79);
    strokeWeight(2);
    ellipse(a, b+20, 5, 5);
    }
    
    if (b >= 300 && b <= 480){
    stroke(247, 72, 79);
    strokeWeight(2);
    arc(a, b+20, 5, 5, 180, 360);
    }

    //BUBBLES
    //bubble1

    //bubble location
    var bubbleX = a+40;
    var bubbleY = b-20;

    //expanding the bubble sizes as the mouse moves up and down
    var bubbleSize = map(b, 0, height, 2,25);
    noStroke();
    fill(160, 222, 255);
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);

    //bubble2
    var bubbleX = a+60;
    var bubbleY = b-50;
    var bubbleSize = map(mouseY,0,height,4, 40);
    noStroke();
    fill(160, 222, 255);
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
   

}
