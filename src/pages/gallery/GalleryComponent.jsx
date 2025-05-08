import React from 'react';

const images = [
  '/images/project-gallery/project1.jpg',
  '/images/project-gallery/project2.jpg',
  '/images/project-gallery/project3.jpg',
  '/images/project-gallery/project4.jpg',
  '/images/project-gallery/project5.jpg',
  '/images/project-gallery/project6.jpg',
  // '/images/project-gallery/project7.jpg',
  // '/images/project-gallery/project8.jpg',
  // Add more image paths as needed
];

const GalleryComponent = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-sm shadow-md">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
