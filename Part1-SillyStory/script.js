/* 
Name: Hrigdev Thapa
File: script.js
Date: 27 November 2025
Description: Main JavaScript for the Silly Story Generator. This file picks random items, builds the story text, and later will update the story on the webpage.
*/

// Getting the important elements from the HTML page
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

// This function picks a random item from any array we give it
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

/*  
  Arrays for the different parts of the story.
  These come from the strings given in the assignment.
*/
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
  This function builds the basic random story.
  We will finish the rest of the logic in the next commits.
*/
function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  // The main story text with the random pieces added in
  let storyText = `It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`;

  return storyText;
}

// When the button is clicked, this function runs
generateBtn.addEventListener("click", generateStory);

/*
  For now, this just shows the random story on the page.
  We will add the custom name and UK options in Commit 4 and 5.
*/
function generateStory() {
  let newStory = returnRandomStoryString();

  story.textContent = newStory;
  story.style.visibility = "visible";
}
