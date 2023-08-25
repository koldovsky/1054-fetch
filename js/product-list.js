const products = [
    {
        id: 1,
        name: 'Baby Yoda',
        description: 'Baby Yoda is a character in the Star Wars universe, first appearing in the 2019 Disney+ television series The Mandalorian. He is an infant member of the same unnamed alien species as the Star Wars characters Yoda and Yaddle, with whom he shares a strong ability in the Force.',
        price: 100,
        image: 'img/baby-yoda.svg',
    },
    {
        id: 2,
        name: 'Banana',
        description: 'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
        price: 10,
        image: 'img/banana.svg'
    },
    {
        id: 3,
        name: 'Girl',
        description: 'A girl sticker',
        price: 1,
        image: 'img/girl.svg',
    },
    {
        id: 4,
        name: 'Viking',
        description: 'A viking sticker',
        price: 25,
        image: 'img/viking.svg',
    },
];

renderProduct(products);

function renderProduct(products) {
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = '';
    for (const product of products) {
        productsContainer.innerHTML += 
            `<article class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3 class="product-card__h3">${product.name}</h3>
                <p class="product-card__description">
                ${product.description}
                </p>
                <div class="product-card__buttons">
                    <button class="product-card__buttons-info button button-card">
                        Info
                    </button>
                    <button class="product-card__buttons-buy button button-card">
                        Buy - ${product.price}
                    </button>
                </div>
            </article>`;
    }
}