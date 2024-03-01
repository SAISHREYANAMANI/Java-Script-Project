let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "white-tshirt.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "short-skirt.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "sporty-smartwatch.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "knitted-top.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "black-leather-jacket.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "pink-trousers.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "brown-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "comfy-gray-pants.jpg",
      },
    ],
  };
  
 


// Function to create a product card element
function createProductCard(product) {
    let card = document.createElement("div");
    card.className = "card " + product.category;

    let imgContainer = document.createElement("div");
    imgContainer.className = "image-container";

    let image = document.createElement("img");
    image.setAttribute("src", product.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.className = "container";

    let name = document.createElement("h5");
    name.className = "product-name";
    name.innerText = product.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = "$" + product.price;
    container.appendChild(price);

    card.appendChild(container);
    return card;
}

// Map through the products and create cards for each one
let productCards = products.data.map(createProductCard);

// Append the cards to the #products container
let productsContainer = document.getElementById("products");
productCards.forEach((card) => {
    productsContainer.appendChild(card);
});

// Search and filter functionality without using class list methods
function filterProduct(value) {
    // Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.style.backgroundColor = "#6759ff";
            button.style.color = "#ffffff";
        } else {
            button.style.backgroundColor = "transparent";
            button.style.color = "#6759ff";
        }
    });

    // Select all cards
    let elements = document.querySelectorAll(".card");
    
    // Loop through all cards
    elements.forEach((element) => {
        // Display all cards on 'all' button click
        if (value === "all") {
            element.style.display = "grid";
        } else {
            // Check if element contains category class
            if (element.className.includes(value)) {
                // Display element based on category
                element.style.display = "grid";
            } else {
                // Hide other elements
                element.style.display = "none";
            }
        }
    });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
    // Initializations
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");

    // Loop through all elements
    elements.forEach((element) => {
      // Check if text includes the search value
      const card = element.closest('.card');
      
      if (element.innerText.toUpperCase().includes(searchInput)) {
          // Display matching card
          card.style.display = "grid";
      } else {
          // Hide others
          card.style.display = "none";
      }
  });
  
});
// Initially display all products
window.onload = () => {
    filterProduct("all");
};