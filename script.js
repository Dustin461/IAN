//Sample data
let products = {
    data: [
      {
        productName: "ENJOY COMPANY BABY TEE",
        category: "Babytee",
        price: "273,000 VND",
        image: "Image/product/enjoy-company.png",
        type: "best-selling",
      },
      {
        productName: "MASTERPEACE BOXY TEE",
        category: "Boxytee",
        price: "292,000 VND",
        image: "Image/product/masterpeace.png",
        type: "",
      },
      {
        productName: "MASTERPEACE CROP TOP",
        category: "Croptop",
        price: "260,000 VND",
        image: "Image/product/masterpeace-croptop.jpg",
        type: "",
      },
      {
        productName: "WELL-BEING BOXY TEE",
        category: "Boxytee",
        price: "292,000 VND",
        image: "Image/product/well-being.png",
        type: "best-selling",
      },
      {
        productName: "'MẮC CỠ' BABY TEE",
        category: "Babytee",
        price: "280,000 VND",
        image: "Image/product/mac-co.jpg",
        type: "",
      },
      {
        productName: "'HOLD THE SUN' BASKETBALL CAP",
        category: "Accessories",
        price: "255,000 VND",
        image: "Image/product/hold-the-sun-cap.jpg",
        type: "best-selling",
      },
    ],
  };
  
//-- Make the menu responsive --//
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
            nav.classList.add('active');
        });
}

if(close) {
    close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
}

//-- SINGLE PRODUCT: Select images of product --//
document.addEventListener('DOMContentLoaded', function() {
    // Get the main image element
    const mainImg = document.getElementById('main-img');

    // Get all the small images
    const smallImgs = document.querySelectorAll('.small-img');

    // Loop through all the small images
    smallImgs.forEach(function(img) {
        img.addEventListener('click', function() {
            // Set the main image's source to the clicked small image's source
            mainImg.src = img.src;
        });
    });
});

function filterProduct(category) {
    // Filter products based on category
    let filteredProducts = products.data;
    if (category !== "all") {
      filteredProducts = products.data.filter(product => product.category.toLowerCase() === category);
    }
  
    // Get the product container element
    let productContainer = document.querySelector(".pro-container");
    productContainer.innerHTML = ""; // Clear the current content
  
    // Loop through filtered products and render them
    for (let product of filteredProducts) {
      let productCard = `
        <div class="pro" onclick="window.location.href='product.html';">
            <img src="${product.image}" alt="${product.productName}">
            <div class="des">
                <h5>${product.productName}</h5>
                <h4>${product.price}</h4>
            </div>
            <a href="#"><i class="bi bi-cart cart"></i></a>
        </div>
      `;
  
      productContainer.innerHTML += productCard;
    }
}

function searchProducts() {
    // Get search input
    const searchInput = document.getElementById('search-input').value.toLowerCase().trim();

    // Filter products based on the query
    const filteredProducts = products.data.filter(product => 
        product.productName.toLowerCase().includes(searchInput)
    );

    // Display the filtered products
    displayProducts(filteredProducts);

    // Show or hide "Our Products", pagination, and "No matching result" based on the result
    const noResult = document.getElementById('no-result');
    const ourProducts = document.querySelector('#product1 h2');
    const pagination = document.getElementById('pagination');

    if (filteredProducts.length === 0) {
        noResult.style.display = 'block';
        ourProducts.style.display = 'none';
        pagination.style.display = 'none';
    } else {
        noResult.style.display = 'none';
        ourProducts.style.display = 'block';
        pagination.style.display = 'block';
    }
}

function displayProducts(productList) {
    const container = document.querySelector('.pro-container');
    container.innerHTML = ''; // Clear current content

    productList.forEach(product => {
        const productCard = `
            <div class="pro" onclick="window.location.href='product.html';">
                <img src="${product.image}" alt="">
                <div class="des">
                    <h5>${product.productName}</h5>
                    <h4>${product.price}</h4>
                </div>
                <a href="#"><i class="bi bi-cart cart"></i></a>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Watch for changes in the search input to restore default view
document.getElementById('search-input').addEventListener('input', function() {
    if (this.value === '') {
        displayProducts(products.data);
        document.getElementById('no-result').style.display = 'none';
        document.querySelector('#product1 h2').style.display = 'block';
        document.getElementById('pagination').style.display = 'block';
    }
});

// Attach search function to search button
document.getElementById('search').addEventListener('click', searchProducts);

function displayBestSellingProducts() {
    // Filter products based on the "best-selling" type
    const bestSellingProducts = products.data.filter(product => product.type === "best-selling");

    // Display the filtered products
    displayProducts(bestSellingProducts);
}

window.addEventListener("load", function() {
    filterProduct('all');
});

 

