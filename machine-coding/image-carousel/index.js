const images = document.querySelectorAll('.carousel-images img');
const indicators = document.querySelectorAll('.indicator');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const slideToggle = document.getElementById('slideToggle');

let currentIndex = 0;
let autoSlideInterval = null;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
        indicators[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
}

function showNextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}

function showPrevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(showNextImage, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
        showImage(parseInt(indicator.dataset.index));
    });
});

slideToggle.addEventListener('change', () => {
    if (slideToggle.checked) {
        startAutoSlide();
    } else {
        stopAutoSlide();
    }
});

// Initialize the carousel with the first image visible
showImage(currentIndex);
