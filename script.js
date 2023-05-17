// Fetch product data from an API
function fetchProductData() {
    return fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => {
        // Process the retrieved data
        displayProducts(data);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }
  
  // Display the product listings on the page
  function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
  
    // Clear existing content
    productsContainer.innerHTML = '';
  
    // Loop through the products and create HTML elements
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
  
      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = product.description;
      productElement.appendChild(descriptionElement);
  
      const priceElement = document.createElement('p');
      priceElement.textContent = 'Price: $' + product.price;
      productElement.appendChild(priceElement);
  
      productsContainer.appendChild(productElement);
    });
  }
  
  // Call the fetchProductData function to retrieve and display product data
  fetchProductData();
  