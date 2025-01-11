# 🎲 Dice Game

## Overview
The Dice Game is a simple JavaScript-based project that simulates the roll of two dice and determines the winner. Every time you refresh the page, two random dice numbers are generated, one for each player, and the winner is displayed based on the higher dice value. If both dice have the same value, it’s a draw.

---

## Features
- Generates random numbers between 1 and 6 for two players.
- Displays the result of the dice roll with images.
- Announces the winner based on the dice values.
- Handles ties by displaying "Draw."

---

## Technologies Used
- **HTML**: For the structure of the webpage.
- **CSS**: For styling the elements (linked through `styles.css`).
- **JavaScript**: For game logic and dynamic content updates.
- **Google Fonts**: Indie Flower and Lobster for custom fonts.

---

## Folder Structure
```
dice-challenge/
├── dicee.html       # Main HTML file
├── styles.css       # CSS for styling
├── index.js         # JavaScript for game logic
├── images/          # Folder containing dice images (dice1.png to dice6.png)
│   ├── dice1.png
│   ├── dice2.png
│   ├── dice3.png
│   ├── dice4.png
│   ├── dice5.png
│   └── dice6.png
```

---

## How It Works
1. **Random Number Generation**:
   - A random number between 1 and 6 is generated for each player using `Math.random()`.
   - The corresponding dice image is selected and displayed.

2. **Comparison**:
   - If Player 1's dice value is greater than Player 2's, Player 1 wins.
   - If both dice values are equal, it's a draw.
   - Otherwise, Player 2 wins.

3. **Dynamic Updates**:
   - The `<h1>` element dynamically updates to display the winner or "Draw" based on the results.

---

## How to Run
1. Clone this repository or download the files.
2. Ensure the folder structure matches the one described above.
3. Open `dicee.html` in any modern web browser.
4. Refresh the page to roll the dice and see the results.

---

## Sample Output
- **Player 1 Wins**:  
  Dice 1 shows a higher value than Dice 2.
  
- **Player 2 Wins**:  
  Dice 2 shows a higher value than Dice 1.

- **Draw**:  
  Both dice show the same value.

---

## Screenshot
![image](https://github.com/user-attachments/assets/66d456d2-3737-45ce-a2d7-749476638203)
![image](https://github.com/user-attachments/assets/2a0566fd-7855-4b77-8261-fa363a50e5a8)
![image](https://github.com/user-attachments/assets/28bab060-0aa0-42f3-b6e6-47a2eee71b2a)
![image](https://github.com/user-attachments/assets/a4e70c69-93e9-4f26-96aa-3eab634f8e28)

---

## Future Enhancements
- Add a "Roll Dice" button instead of relying on page refresh.
- Improve styling for a more engaging UI.
- Implement animations for dice rolling.
- Keep track of player scores across multiple rounds.
