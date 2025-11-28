/* 
Name: Hrigdev Magar
File: script.js
Date: 27 November 2025
Description: Main JavaScript for the Silly Story Generator. This file creates the random story by choosing random items, handling the custom name and UK options, converting units, and updating the story on the page.
*/

// Getting elements from the HTML page
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

// Picks a random item from an array
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

/* Arrays for the different random story parts */
const characters = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const places = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const events = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and slithered away"
];

/*
  Builds the base random story.
*/
function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  // Template story with original values (94°F and 300 pounds)
  let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Runs when the button is clicked
generateBtn.addEventListener("click", generateStory);

/*
  Commit 5:
  - Replace Bob with custom name
  - Convert pounds to stones
  - Convert Fahrenheit to Celsius
  - Replace updated values in the final story
*/
function generateStory() {
  let newStory = returnRandomStoryString();

  // 1. Replace Bob with custom name
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  // 2. UK conversion: pounds to stones AND Fahrenheit to Celsius
  if (document.getElementById("uk").checked) {
    // Convert 300 pounds → stones
    const weight = Math.round(300 * 0.0714286) + " stone";

    // Convert 94°F → Celsius
    const temperature = Math.round((94 - 32) * (5 / 9)) + " Celsius";

    // Replace old values with new ones
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  // Display the final updated story
  story.textContent = newStory;
  story.style.visibility = "visible";
}
