// src/project.js
import React from "react";
import ImageSlider from "./ImageSlider";

const images = [
  { src: "image1.jpg", alt: "Image 1" },
  { src: "image2.jpg", alt: "Image 2" },
  { src: "image3.jpg", alt: "Image 3" },
];

function Project() {
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
}

export default Project;
