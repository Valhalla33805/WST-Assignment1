function changeColor() {
    let colors = ["#ff7675", "#55efc4", "#74b9ff", "#ffeaa7", "#a29bfe", "#fd79a8"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change background
    document.body.style.backgroundColor = randomColor;
    
    // Update the text with a quick animation effect
    let display = document.getElementById("colorDisplay");
    display.style.opacity = 0; // Quick fade out
    
    setTimeout(() => {
        display.innerText = randomColor;
        display.style.opacity = 1; // Fade back in
    }, 200);
    document.body.classList.remove('animate-zoom');
    void document.body.offsetWidth; // Trigger reflow to restart animation
    document.body.classList.add('animate-zoom');
}