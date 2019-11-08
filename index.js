// Define a variable to use when we need to set the characters image src
const ASSET_ROOT = './assets/green-character'

// Create an img element to represent the character
const character = document.createElement('img')

// Make the character a little bigger
character.style.width = '75px'

// Position the character absolutely in the lower left corner of the screen
character.style.position = 'absolute'
character.style.left = '0px'
character.style.bottom = '0px'

// Set the src of the img so the browser knows what to show
character.src = `${ASSET_ROOT}/static.gif`

// Add the character image to the page
document.body.append(character)

// Define a variable to represent the direction our character is moving
let direction = null

// Define a variable to reperesent the speed of our character
let speed = 0.25

// Do some research on  setInterval- what is it doing?
setInterval(function(){

    // character.style.left and character.style.bottom are both strings ("0px")
    // If we want to do some arithmatic, we'll need to parse them into integers:
    const left = parseInt(character.style.left)
    const top = parseInt(character.style.top)

    // If the character is moving right, the distance between him and the left side of the screen should increase
    if(direction == 'right'){
        character.style.left = `${left+speed}px`
    }

    // Account for other directions here:

}, 60 / 1000)


// When we want to start walking a given direction, let's change: 
//  1. The characters gif.
//  2. The value of the direction variable. How will this effect the setInterval loop above?
function walkRight(){
    character.src = `${ASSET_ROOT}/walkright.gif`
    direction = 'right'
}
