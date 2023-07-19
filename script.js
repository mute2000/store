const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 9.99 },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 19.99 },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 29.99 }
  ];
  
  const productsContainer = document.querySelector('.products');
  
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
  
    const productName = document.createElement('h2');
    productName.textContent = product.name;
    productDiv.appendChild(productName);
  
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    productDiv.appendChild(productDescription);
  
    const productPrice = document.createElement('p');
    productPrice.textContent = `$${product.price}`;
    productDiv.appendChild(productPrice);
  
    productsContainer.appendChild(productDiv);
  });
