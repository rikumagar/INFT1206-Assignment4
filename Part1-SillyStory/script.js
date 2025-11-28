/* 
Name: Hrigdev Thapa
File: script.js
Date: 27 November 2025
Description: Main JavaScript for the Silly Story Generator. This file creates the random story by choosing random items, handling the custom name and UK options, and updating the story on the page.
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
  Commit 4: no UK conversion yet, only name replacement happens here.
*/
function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// Runs when button is clicked
generateBtn.addEventListener("click", generateStory);

/*
  Commit 4:
  - Create newStory
  - Replace Bob with custom name (if provided)
  - Show the story
*/
function generateStory() {
  let newStory = returnRandomStoryString();

  // Replace Bob with custom name if the field is not empty
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  // UK conversion will be added in Commit 5

  story.textContent = newStory;
  story.style.visibility = "visible";
}
