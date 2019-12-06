"use strict";

const sliderDiv = document.querySelector("#slider");
const thumb = document.querySelector(".thumb");

thumb.addEventListener("mousedown", event => {
  event.preventDefault();

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);

  const thumbCoords = thumb.getBoundingClientRect();
  const sliderDivCoords = sliderDiv.getBoundingClientRect();
  const shiftX = event.clientX - thumbCoords.left;

  function mouseMove(event) {
    let left = event.clientX - shiftX - sliderDivCoords.left;
    const rightEdge = sliderDiv.offsetWidth - thumb.offsetWidth;
    if (left < 0) {
      left = 0;
    } else if (left > rightEdge) {
      left = rightEdge;
    }

    thumb.style.left = `${left}px`;
  }

  function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

  document.addEventListener("dragstart", event => {
    event.preventDefault();
  });
});
