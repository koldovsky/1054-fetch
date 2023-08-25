const response = await fetch('api/products.json');
const products = await response.json();

renderProduct(products, 1);

function renderProduct(products, rate) {
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
                        Buy - ${(product.price * rate).toFixed(2)}
                    </button>
                </div>
            </article>`;
    }
}

let currencies;
async function convertCurrency() {
    const convertTo = document.querySelector('.products__currency').value;
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const rate = currencies.rates[convertTo];
    renderProduct(products, rate);
}

document.querySelector('.products__currency').addEventListener('change', convertCurrency);