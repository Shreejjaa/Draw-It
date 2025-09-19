function fetchImages(imageName) {
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.innerHTML = '';

  // Normalize prediction (remove spaces, lowercase, trim)
  imageName = imageName.toLowerCase().trim();

  // Predefined mapping of predictions to product images
  const images = {
    'dress': ['dress1.png', 'dress2.png', 'dress3.png', 'dress4.png', 'dress5.png'],
    'shoes': ['shoes1.png', 'shoes2.png', 'shoes3.png', 'shoes4.png', 'shoes5.png'],
    't-shirt': ['t-shirt1.png', 't-shirt2.png', 't-shirt3.png', 't-shirt4.png', 't-shirt5.png'],
    'bag': ['bag1.png', 'bag2.png', 'bag3.png', 'bag4.png', 'bag5.png']
  };

  if (images[imageName]) {
    images[imageName].forEach(src => {
      const img = document.createElement('img');
      img.src = "images/" + src;  // make sure your images are inside /images folder
      img.alt = imageName;
      img.classList.add('result-img');
      
      // Make images clickable (Google search)
      img.addEventListener('click', () => {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(imageName)}`, '_blank');
      });

      imageContainer.appendChild(img);
    });
  } else {
    imageContainer.innerHTML = `<p style="color:red;">No matching images found for "${imageName}".</p>`;
  }
}
