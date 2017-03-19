// global variables

var customName = document.getElementById('customname'), // enter custom name text field
    randomize = document.querySelector('.randomize'), // "generate random story" button
    story = document.querySelector('.story');   // p element where the random story will be displayed


//function takes an array and returns one of the items stored inside an array at random
function randomValueFromArray(array){
    return array[Math.floor(Math.random() * array.length)];
}

// global variables containing raw text strings

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crwaled away"];

// event listener
randomize.addEventListener('click', result);

// partial function definition
function result(){

    var newStory = storyText; // new random story is created each time button is pressed
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":insertx:", xItem);
    
    if(customName.value != ""){
        var name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if(document.getElementById("uk").checked){
        var weight = Math.round(300 * 0.071429 + " stone");
        var temperature = Math.round((94-32) * 5 / 9) + " centigrade";
        newStory = newStory.replace("300 pounds", weight);
        newStory = newStory.replace("94 farenheit", temperature);
    }

    story.textContent = ;
    story.style.visibility = "visible";
}