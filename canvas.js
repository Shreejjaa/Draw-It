// Get the canvas and context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Set initial drawing settings
let drawing = false;
let currentColor = 'black';
let currentSize = 5;
let erasing = false;

// Function to start drawing
function startDrawing(event) {
    drawing = true;
    draw(event);
}

// Function to stop drawing
function stopDrawing() {
    drawing = false;
    ctx.beginPath(); // Resets the current path
}

// Function to draw on the canvas
function draw(event) {
    if (!drawing) return;

    ctx.lineWidth = currentSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = erasing ? 'white' : currentColor;

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

// Event listeners for color selection
const colors = document.querySelectorAll('.color');
colors.forEach(color => {
    color.addEventListener('click', () => {
        currentColor = color.style.backgroundColor;
        erasing = false;
    });
});

// Event listener for brush size selection
const brushSize = document.getElementById('brushSize');
brushSize.addEventListener('change', () => {
    currentSize = brushSize.value;
});

// Event listener for eraser
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', () => {
    erasing = true;
});

// Event listener for clear canvas
const clearCanvas = document.getElementById('clearCanvas');
clearCanvas.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Function to download the canvas drawing as an image file
function downloadImage() {
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'drawing.png';
    link.click();
}

// Event listener for downloading the image
const scanDrawingButton = document.getElementById('scanDrawing');
scanDrawingButton.addEventListener('click', downloadImage);
