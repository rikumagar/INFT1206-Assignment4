/*
  Name: Hrigdev Magar
  File: main.js
  Date: 27 November 2025
  Description: Image Gallery (Commit 3) — Added images array and thumbnail creation loop.
*/

// Select main elements from the page
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// ------------------------------
// Images data (filename + alt)
// ------------------------------
const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" }
];

// Base URL for local images
const baseURL = "./";

// ------------------------------
// Create thumbnails dynamically
// ------------------------------
for (const img of images) {
  const newImage = document.createElement("img");
  newImage.src = baseURL + img.filename;
  newImage.alt = img.alt;

  // Make image focusable from keyboard
  newImage.setAttribute("tabindex", "0");

  // Add to thumbnail bar
  thumbBar.appendChild(newImage);

  // Clicking a thumbnail shows it large
  newImage.addEventListener("click", function () {
    updateDisplayedImage(newImage);
  });

  // Pressing Enter while focused also updates the big image
  newImage.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      updateDisplayedImage(newImage);
    }
  });
}

// ------------------------------
// Update the large displayed image
// ------------------------------
function updateDisplayedImage(image) {
  displayedImage.src = image.src;
  displayedImage.alt = image.alt;
}
