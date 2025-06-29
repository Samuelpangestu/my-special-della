var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240, 300]; // Added purple/pink colors
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.5;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

// Button and Photo Elements
const button = document.getElementById("valentinesButton");
const photoContainer = document.getElementById("photoContainer");
let musicPlaying = false;

// Button Click Event
button.addEventListener("click", () => {
    if (button.textContent === "Klik untuk Kejutan! ❤️") {
        button.textContent = "💕 Terima kasih sudah mengklik! 🥰";
        
        // Show sweet message
        setTimeout(() => {
            alert("💕 Della, kamu adalah yang terspesial di hatiku! Terima kasih sudah menjadi bagian terpenting dalam hidupku. Aku sangat mencintaimu! ❤️");
        }, 500);
    }
});

// Music Toggle Function
function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const musicControl = document.getElementById('musicControl');
    
    if (musicPlaying) {
        music.pause();
        musicControl.textContent = '🎵';
        musicPlaying = false;
    } else {
        music.play().catch(e => {
            console.log("Audio autoplay prevented by browser");
        });
        musicControl.textContent = '⏸️';
        musicPlaying = true;
    }
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    // Glow effect - Pink/Purple theme
    context.shadowColor = "rgba(255, 105, 180, 1)";
    context.shadowBlur = 15;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    // First Message
    if(frameNumber < 300){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("Setiap hari aku tidak percaya betapa beruntungnya aku", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.008;
    }
    
    // Fade out first message
    if(frameNumber >= 300 && frameNumber < 600){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("Setiap hari aku tidak percaya betapa beruntungnya aku", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.008;
    }

    // Reset opacity
    if(frameNumber == 600){
        opacity = 0;
    }
    
    // Second Message
    if(frameNumber > 600 && frameNumber < 900){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Di antara triliunan bintang,", "selama miliaran tahun"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Di antara triliunan bintang, selama miliaran tahun", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.008;
    }
    
    // Fade out second message
    if(frameNumber >= 900 && frameNumber < 1200){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Di antara triliunan bintang,", "selama miliaran tahun"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Di antara triliunan bintang, selama miliaran tahun", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.008;
    }

    // Reset opacity
    if(frameNumber == 1200){
        opacity = 0;
    }
    
    // Third Message
    if(frameNumber > 1200 && frameNumber < 1500){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("untuk hidup dan menghabiskan hidup ini bersamamu", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.008;
    }
    
    // Fade out third message
    if(frameNumber >= 1500 && frameNumber < 1800){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("untuk hidup dan menghabiskan hidup ini bersamamu", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.008;
    }

    // Reset opacity
    if(frameNumber == 1800){
        opacity = 0;
    }
    
    // Fourth Message
    if(frameNumber > 1800 && frameNumber < 2100){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("adalah sesuatu yang sangat, sangat tidak mungkin", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.008;
    }
    
    // Fade out fourth message
    if(frameNumber >= 2100 && frameNumber < 2400){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        context.fillText("adalah sesuatu yang sangat, sangat tidak mungkin", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.008;
    }

    // Reset opacity
    if(frameNumber == 2400){
        opacity = 0;
    }
    
    // Fifth Message
    if(frameNumber > 2400 && frameNumber < 2700){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["namun di sinilah aku mendapat kesempatan", "yang mustahil untuk mengenalmu"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("namun di sinilah aku mendapat kesempatan yang mustahil untuk mengenalmu", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.008;
    }
    
    // Fade out fifth message
    if(frameNumber >= 2700 && frameNumber < 3000){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["namun di sinilah aku mendapat kesempatan", "yang mustahil untuk mengenalmu"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("namun di sinilah aku mendapat kesempatan yang mustahil untuk mengenalmu", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.008;
    }

    // Reset opacity and Show Photo
    if(frameNumber == 3000){
        opacity = 0;
        // Show photo container
        if (photoContainer) {
            photoContainer.classList.add('show');
        }
    }
    
    // Sixth Message (with photo visible)
    if(frameNumber > 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 105, 180, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Aku mencintaimu Della, lebih dari", "seluruh waktu dan ruang di alam semesta"], canvas.width / 2, canvas.height / 2 - 120, fontSize, lineHeight);
        } else {
            context.fillText("Aku mencintaimu Della, lebih dari seluruh waktu dan ruang di alam semesta", canvas.width/2, canvas.height/2 - 120);
        }
        opacity = opacity + 0.005;
    }
    
    // Seventh Message
    if(frameNumber >= 3300 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 105, 180, ${secondOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["dan aku tidak sabar untuk menghabiskan", "semua waktu di dunia untuk berbagi cinta itu denganmu!"], canvas.width / 2, (canvas.height/2 + 140), fontSize, lineHeight);
        } else {
            context.fillText("dan aku tidak sabar untuk menghabiskan semua waktu di dunia untuk berbagi cinta itu denganmu!", canvas.width/2, (canvas.height/2 + 140));
        }
        secondOpacity = secondOpacity + 0.005;
    }

    // Final Message and Show Button
    if(frameNumber >= 3600 && frameNumber < 99999){
        context.fillStyle = `rgba(255, 105, 180, ${thirdOpacity})`;
        context.fillText("Kamu Spesial di Hatiku ❤️", canvas.width/2, (canvas.height/2 + 200));
        thirdOpacity = thirdOpacity + 0.005;
        
        // Show button
        button.style.display = "block";
    }   

    // Reset shadow effect
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);
    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

// Auto-start music after first user interaction
document.addEventListener('click', function() {
    if (!musicPlaying && document.getElementById('backgroundMusic')) {
        toggleMusic();
    }
}, { once: true });

// Start the animation
window.requestAnimationFrame(draw);
