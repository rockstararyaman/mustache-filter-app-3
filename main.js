noseX = 0;
noseY = 0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(500, 440);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 440);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is now Initialised');
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 68;
        noseY = results[0].pose.nose.y - 5;
        console.log('nose_x =' + noseX);
        console.log('nose_y =' + noseY);
    }
}

function draw() {
    image(video, 0, 0, 500, 440);
    image(mustache, noseX, noseY, 130, 80);
}

function take_snapshot() {
    save('filter_mustache_image');
}