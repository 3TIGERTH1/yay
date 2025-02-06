// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            document.getElementById('options').style.display = 'none'; // Hide the options
            document.getElementById('message').style.display = 'block'; // Show the message
            displayCatHeart(); // Display the cat-heart.gif
            createFallingHearts(); // Add falling hearts
            triggerConfetti(); // Trigger confetti
            typeMessage(); // Type out the message
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?';
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by 2x
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    catImage.alt = 'Cat';
    catImage.onload = function () {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function () {
        imageContainer.appendChild(catHeartImage);
    };
}

// Function to create floating emojis
function createFloatingEmojis() {
    const emojis = ['🐯', '🐧', '🍟']; // Tiger, penguin, and fries emojis
    const emojiContainer = document.getElementById('emoji-container');

    for (let i = 0; i < 20; i++) { // Create 20 emojis
        const emoji = document.createElement('div');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        emoji.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        emoji.style.fontSize = Math.random() * 30 + 20 + 'px'; // Random size
        emoji.style.animation = `float ${Math.random() * 6 + 3}s linear infinite`; // Random animation duration
        emojiContainer.appendChild(emoji);
    }
}

// Function to create falling hearts
function createFallingHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 50; i++) { // Create 50 hearts
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.top = -Math.random() * 100 + 'vh'; // Start above the screen
        heart.style.fontSize = Math.random() * 30 + 20 + 'px'; // Random size
        heart.style.animation = `fall ${Math.random() * 6 + 3}s linear infinite`; // Random animation duration
        heartsContainer.appendChild(heart);
    }
}

// Function to trigger confetti
function triggerConfetti() {
    confetti({
        particleCount: 100, // Number of confetti particles
        spread: 70, // Spread of confetti
        origin: { y: 0.6 } // Origin of confetti
    });
}

// Function to type out the message
function typeMessage() {
    const message = document.getElementById('message');
    const text = "YAYY! THANKS, BUT I AM OUT OF TOWN AT THAT TIME 🍟\n(Made this because I didn't want anyone to rizz you up easily 😉)";
    let index = 0;

    message.innerText = ''; // Clear the message
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            message.innerText += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 50); // Typing speed (50ms per character)
}

// Display the cat.gif initially
displayCat();

// Create floating emojis
createFloatingEmojis();