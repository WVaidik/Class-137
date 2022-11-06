img = "";
function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();
}

function preload() {
img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 800, 600);
    fill("##32a852");
    stroke("#32a852");
    noFill();
    text("Dog", 45, 75);
    rect(30, 60, 450, 350);

    fill("##32a852");
    stroke("#32a852");
    noFill();
    text("Cat", 320, 120);
    rect(300, 90, 270, 320);
}