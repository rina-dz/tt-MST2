const video = document.querySelector('.video');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');
const frstCanvas = document.createElement('canvas');
const scndCanvas = document.createElement('canvas');
const thrdCanvas = document.createElement('canvas');
const frthCanvas = document.createElement('canvas');
const frstContext = frstCanvas.getContext('2d');
const scndContext = scndCanvas.getContext('2d');
const thrdContext = thrdCanvas.getContext('2d');
const frthContext = frthCanvas.getContext('2d');

function setupCanvas() {
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    [frstCanvas, scndCanvas, thrdCanvas, frthCanvas].forEach(canvas => {
        canvas.width = videoWidth;
        canvas.height = videoHeight / 4;
    });

    block1.appendChild(frstCanvas);
    block2.appendChild(scndCanvas);
    block3.appendChild(thrdCanvas);
    block4.appendChild(frthCanvas);
}

function draw() {
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;

    frstContext.drawImage(video, 0, 0, videoWidth, videoHeight / 4, 0, 0, frstCanvas.width, frstCanvas.height);
    scndContext.drawImage(video, 0, videoHeight / 4, videoWidth, videoHeight / 4, 0, 0, scndCanvas.width, scndCanvas.height);
    thrdContext.drawImage(video, 0, videoHeight / 2, videoWidth, videoHeight / 4, 0, 0, thrdCanvas.width, thrdCanvas.height);
    frthContext.drawImage(video, 0, (videoHeight * 3) / 4, videoWidth, videoHeight / 4, 0, 0, frthCanvas.width, frthCanvas.height);

    requestAnimationFrame(draw);
}

video.addEventListener('loadeddata', () => {
    setupCanvas();
    draw();
});