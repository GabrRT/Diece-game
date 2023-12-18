document.addEventListener('DOMContentLoaded', function() {
    // Apply the 'btn' class to the roll button
    var rollButton = document.getElementById("rollButton");
    rollButton.classList.add("btn");

    // Add an event listener to the roll button
    rollButton.addEventListener('click', function() {
        // Retrieve player names from input fields or use default names
        var player1Name = document.getElementById("player1Name").value || "Player 1";
        var player2Name = document.getElementById("player2Name").value || "Player 2";

        // Update player names displayed on the page
        document.getElementById("name1").textContent = player1Name;
        document.getElementById("name2").textContent = player2Name;

        // Generate random numbers for each dice roll
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
        var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

        // Update the dice images based on the random numbers
        var img1 = document.querySelector(".img1");
        var img2 = document.querySelector(".img2");
        img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
        img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

        // Determine and display the winner
        var title = document.querySelector("h1");
        if (randomNumber1 > randomNumber2) {
            title.textContent = "🚩 " + player1Name + " Wins!";
        } else if (randomNumber2 > randomNumber1) {
            title.textContent = player2Name + " Wins! 🚩";
        } else {
            title.textContent = "It's a Draw!";
        }
    });
});
