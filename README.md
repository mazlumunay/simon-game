# 🎮 Simon Memory Game

A browser-based implementation of the classic Simon electronic memory game where players must repeat increasingly longer sequences of colors and sounds.

## 🚀 How to Play

1. **Press any key** to start the game
2. **Watch & listen** carefully to the sequence of button flashes
3. **Repeat** the sequence by clicking the colored buttons
4. **Advance** to next level after each correct sequence
5. **Game ends** if you make a mistake - press any key to restart

## 💻 Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **Libraries**: jQuery
- **Audio**: Web Audio API with custom sound files
- **Animations**: CSS transitions + jQuery effects

## 📂 Project Structure
```bash
simon-game/
├── index.html # Main game interface
├── game.js # Core game logic
├── styles.css # Styling and animations
├── sounds/ # Sound effects directory
│ ├── blue.mp3 # Blue button sound
│ ├── green.mp3 # Green button sound
│ ├── red.mp3 # Red button sound
│ ├── yellow.mp3 # Yellow button sound
│ └── wrong.mp3 # Error sound effect
└── README.md # Documentation
```
## 🔧 Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/simon-game.git
   ```
2. Open index.html in any modern web browser

3. No server required - works directly from local files

##  🎨 Key Features
- **Progressive Difficulty**: Sequence length increases each level

- **Multi-sensory Feedback**:

    - Visual button flashes

    - Distinctive color sounds

    - Red screen flash on game over

- **Score Tracking**: Current level displayed

- **Responsive Design**: Works on desktop and mobile devices

- **Restart Functionality**: Quick game reset after failure

## 🎮 Player Interaction

- **Button Handling**: Uses jQuery's `.click()` handlers for button presses  
- **Pattern Tracking**: Compares user's pattern against game pattern  
- **Instant Feedback**: Provides immediate visual/audio feedback for each press  
- **Game Flow**: Implements 1-second delay between successful sequences  

## 🚨 Game Over Handling

- **Sound Effect**: Plays distinctive "wrong.mp3" sound on error  
- **Visual Indicator**: Applies red flash animation (CSS class toggle)  
- **UI Update**: Changes title to show restart instructions  
- **State Reset**: Clears all game variables for fresh start  

## 📱 Compatibility

Tested on:  
- Chrome (latest version)  
- Firefox (latest version)  
- Microsoft Edge (latest version)  
- Mobile Safari (iOS)  
- Chrome for Android  

## 📜 License

**MIT License** - Free for personal and educational use  

