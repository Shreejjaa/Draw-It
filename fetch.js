function fetchImages() {
    
    const imageName = document.getElementById('imageName').value.toLowerCase();
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    const images = {
        'yellow one shoulder top': ['images/yellow1.png', 'images/yellow2.png'],
        'blue off shoulder top': ['images/blue1.png', 'images/blue2.png'],
        'pink short skirt': ['images/pink1.png', 'images/pink2.png'],
        'white  sunflower printed dress': ['images/sun1.png', 'images/sun2.png'],
        'green trouser': ['images/trouser1.png', ]


        
        
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
