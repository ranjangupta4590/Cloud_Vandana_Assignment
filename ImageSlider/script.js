
const images = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image7.jpg',
  ];
  
  // Current index
  let currentIndex = 0;
  
  // Function to update the image
  function updateImage() {
    const imgElement = document.getElementById('slider-image');
    imgElement.src = images[currentIndex];
  }
  
  // Next Image
  function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0; // Loop back to first image
    }
    updateImage();
  }
  
  // Previous Image
  function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // Loop back to last image
    }
    updateImage();
  }
  
  // Initialize first image
  window.onload = updateImage;
  