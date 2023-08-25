const slides = [
    '<div><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
    '<div><img src="img/banana.svg" alt="Banana"></div>',
    '<div><img src="img/viking.svg" alt="Viking"></div>',
    '<div><img src="img/girl.svg" alt="Girl"></div>',
];

let currentSlide = 0;

const slideContainer = document.querySelector('.products__carousel-slide');

function renderSlide() {
    slideContainer.innerHTML = slides[currentSlide];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
            slideContainer.innerHTML += slides[thirdSlide];
        }
    }
    renderIndicators();
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

// setInterval(nextSlide, 3000);

renderSlide();

const nextButton = document.querySelector('.products__carousel-btn-next');
nextButton.addEventListener('click', nextSlide);

// Зробити щоб працювала кнопка назад
function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}

const prevButton = document.querySelector('.products__carousel-btn-prev');
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);

function renderIndicators() {
    const indicatorsContainer = document.querySelector('.products__carousel-indicators');
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        indicatorsContainer.innerHTML += `<button class="products__carousel-indicator ${i === currentSlide ? 'products__carousel-indicator--active' : ''}"></button>`;
    }
    const indicators = document.querySelectorAll('.products__carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            renderSlide();
            renderIndicators(slides, currentSlide);
        });
    });
}

renderIndicators();