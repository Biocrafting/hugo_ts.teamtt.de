var can;
var snowflakes = [];

var windFactor = 1.5;
var windDir = 1; // 1 =left, -1 =right
var snowflakeSize = 10;
var maxFlakes = 200;

function setup() {
    let h = document.getElementById('snowflake').offsetHeight;
    let w = document.getElementById('snowflake').offsetWidth;
    can = createCanvas(w, h);
    can.parent('snowflake');
    can.id('sketch');
    frameRate(30);
}

function draw() {
    clear();
    for (var i = 0; i < snowflakes.length; i++) {
        snowflakes[i].show();
        snowflakes[i].angle += random(2);
    }

    for (var i = snowflakes.length-1; i >= 0; i--) {
        if (( snowflakes[i].pos.y > height+snowflakeSize) || ( snowflakes[i].pos.x > width+snowflakeSize)) 
            snowflakes.splice(i, 1);
    }

    if ( (snowflakes.length < maxFlakes ) || ( frameCount % 5 == 0 )) {
        snowflakes.push(new Snowflake(random(-width/2, width), -snowflakeSize));
    }
}

function windowResized() {
    let h = document.getElementById('snowflake').offsetHeight;
    let w = document.getElementById('snowflake').offsetWidth;    
    resizeCanvas(w, h);
}

function mousePressed() {
    snowflakes.push(new Snowflake(mouseX, mouseY));
}


