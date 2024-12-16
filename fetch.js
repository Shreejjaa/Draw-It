function fetchImages() {
    
    const imageName = document.getElementById('imageName').value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    const images = {
        'yellow one shoulder top': ['yellow1.png', 'yellow2.png'],
        'blue off shoulder top': ['blue1.png', 'blue2.png'],
        'pink short skirt': ['pink1.png', 'pink2.png'],
        'white  sunflower printed dress': ['sun1.png', 'sun2.png'],
        'green trouser': ['trouser1.png', 'trouser2.png' ]


        
        
        // Add more image arrays as needed
    };

    if (images[imageName]) {
        images[imageName].forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = imageName;
            imageContainer.appendChild(img);
        });
    } else {
        imageContainer.innerHTML = '<p>Images not found</p>';
    }
}
