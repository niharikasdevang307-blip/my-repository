const products = [
  { id: 1, name: "Casual Shirt", price: 35, img: "shirt2.webp", desc: "Comfortable cotton casual shirt.", category: "Shirts" },
  { id: 1, name: "Casual Shirt", price: 35, img: "shirt4.jpeg", desc: "Comfortable cotton casual shirt.", category: "Shirts" },
  { id: 1, name: "Casual Shirt", price: 35, img: "shirt6.jpg", desc: "Comfortable cotton casual shirt.", category: "Shirts" },
  { id: 1, name: "Casual Shirt", price: 35, img: "shirt8.webp", desc: "Comfortable cotton casual shirt.", category: "Shirts" },
  
  { id: 7, name: "t-shirt", price: 25, img: "tshirt.webp", desc: "Comfortable cotton casual t-shirt.", category: "T-shirts" },
  { id: 7, name: "t-shirt", price: 25, img: "tshirt1.webp", desc: "Comfortable cotton casual t-shirt.", category: "T-shirts" },
  { id: 7, name: "t-shirt", price: 25, img: "tshirt2.avif", desc: "Comfortable cotton casual t-shirt.", category: "T-shirts" },
  { id: 7, name: "t-shirt", price: 25, img: "tshirt3.webp", desc: "Comfortable cotton casual t-shirt.", category: "T-shirts" },
  { id: 7, name: "t-shirt", price: 25, img: "tshirt4.jpg", desc: "Comfortable cotton casual t-shirt.", category: "T-shirts" },
  { id: 7, name: "t-shirt", price: 25, img: "tshirt5.jpeg", desc: "Comfortable cotton casual t-shirt.", category: "T-shirts" },

  { id: 2, name: "Formal Pants", price: 50, img: "pant1.jpeg", desc: "Slim fit formal trousers.", category: "Pants" },
  { id: 2, name: "Formal Pants", price: 50, img: "pant2.jpg", desc: "Slim fit formal trousers.", category: "Pants" },
  { id: 2, name: "Formal Pants", price: 50, img: "pant3.jpeg", desc: "Slim fit formal trousers.", category: "Pants" },
  { id: 2, name: "Formal Pants", price: 50, img: "pant4.avif", desc: "Slim fit formal trousers.", category: "Pants" },

  { id: 3, name: "Summer Dress", price: 45, img: "summer.avif", desc: "Light summer white frok.", category: "Dresses" },
  { id: 3, name: "Summer Dress", price: 45, img: "summer1.webp", desc: "Light summer floral dress.", category: "Dresses" },
  { id: 3, name: "Summer Dress", price: 45, img: "summer2.webp", desc: "Light summer floral dress.", category: "Dresses" },
  { id: 3, name: "Summer Dress", price: 45, img: "summer3.jpeg", desc: "Light summer floral dress.", category: "Dresses" },
  { id: 3, name: "Summer Dress", price: 45, img: "summer4.avif", desc: "Light summer floral dress.", category: "Dresses" },
  { id: 3, name: "Summer Dress", price: 45, img: "summer5.webp", desc: "Light summer shorts.", category: "Dresses" },
  { id: 3, name: "Summer Dress", price: 45, img: "summer6.jpg", desc: "Light summer shorts.", category: "Dresses" },

  { id: 4, name: "Denim Jeans", price: 60, img: "denim.webp", desc: "Trendy blue denim jeans.", category: "Pants" },
  { id: 4, name: "Denim Jeans", price: 60, img: "denim1.webp", desc: "Trendy blue denim jeans.", category: "Pants" },
  { id: 4, name: "Denim Jeans", price: 60, img: "denim2.jpg", desc: "Trendy white denim jeans.", category: "Pants" },
  { id: 4, name: "Denim Jeans", price: 60, img: "denim3.jpeg", desc: "Trendy blue denim jeans.", category: "Pants" },
  { id: 4, name: "Denim Jeans", price: 60, img: "denim4.webp", desc: "Trendy blue denim jeans.", category: "Pants" },
  { id: 4, name: "Denim Jeans", price: 60, img: "denim5.webp", desc: "Trendy blue denim jeans.", category: "Pants" },
  { id: 4, name: "Denim Jeans", price: 60, img: "denim6.webp", desc: "Trendy black denim jeans.", category: "Pants" },

  { id: 5, name: "Party Dress", price: 75, img: "party.jpeg", desc: "Elegant evening party dress.", category: "Dresses" },
  { id: 5, name: "Party Dress", price: 75, img: "party1.webp", desc: "Elegant traditional dress.", category: "Dresses" },
  { id: 5, name: "Party Dress", price: 75, img: "party2.jpg", desc: "Elegant traditional dress.", category: "Dresses" },
  { id: 5, name: "Party Dress", price: 75, img: "party3.webp", desc: "Elegant traditional dress.", category: "Dresses" },
  { id: 5, name: "Party Dress", price: 75, img: "party4.webp", desc: "Elegant evening party dress.", category: "Dresses" },
  { id: 5, name: "Party Dress", price: 75, img: "party5.webp", desc: "Elegant evening party dress.", category: "Dresses" },
  { id: 5, name: "Party Dress", price: 75, img: "party6.webp", desc: "Elegant traditional dress.", category: "Dresses" },
  { id: 5, name: "Party Dress", price: 75, img: "party9.webp", desc: "Elegant traditional dress.", category: "Dresses" },
  { id: 5, name: "Party Dress", price: 75, img: "party8.webp", desc: "Elegant traditional dress.", category: "Dresses" },

  { id: 6, name: "Checked Shirt", price: 40, img: "shirt3.webp", desc: "Stylish checked shirt.", category: "Shirts" },
  { id: 6, name: "Checked Shirt", price: 40, img: "shirt5.jpeg", desc: "Stylish checked shirt.", category: "Shirts" },
  { id: 6, name: "Checked Shirt", price: 40, img: "shirt7.webp", desc: "Stylish checked shirt.", category: "Shirts" },
  { id: 6, name: "Checked Shirt", price: 40, img: "check.avif", desc: "Stylish checked shirt.", category: "Shirts" },
  { id: 6, name: "Checked Shirt", price: 40, img: "check1.jpg", desc: "Stylish checked shirt.", category: "Shirts" },
  { id: 6, name: "Checked Shirt", price: 40, img: "check2.jpg", desc: "Stylish checked shirt.", category: "Shirts" }

];

const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");
const cartSidebar = document.getElementById("cartSidebar");
const cartItemsContainer = document.getElementById("cartItems");
const searchBar = document.getElementById("searchBar");

let cart = [];

// Render products
function renderProducts(productList) {
  productGrid.innerHTML = "";
  productList.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button>Add to Cart</button>
    `;
    card.querySelector("img").addEventListener("click", () => openModal(product));
    card.querySelector("button").addEventListener("click", () => addToCart(product));
    productGrid.appendChild(card);
  });
}

// Add to cart
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Update cart view
function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name} - $${item.price}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Toggle cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle("active");
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for shopping with us! (Demo Checkout)");
    cart = [];
    updateCart();
    toggleCart();
  }
}

let order = []; // Store all orders

// Checkout form modal elements
const checkoutFormModal = document.getElementById("checkoutFormModal");
const closeCheckout = document.querySelector(".close-checkout");
const checkoutForm = document.getElementById("checkoutForm");

// Open checkout form
function openCheckoutForm() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  checkoutFormModal.style.display = "block";
}
// Close checkout form
closeCheckout.onclick = () => checkoutFormModal.style.display = "none";
window.onclick = (e) => {
  if (e.target === checkoutFormModal) checkoutFormModal.style.display = "none";
};

// Modal
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const addToCartBtn = document.getElementById("addToCartBtn");
const spanClose = document.querySelector(".close");

let selectedProduct = null;

function openModal(product) {
  selectedProduct = product;
  modal.style.display = "block";
  modalImg.src = product.img;
  modalName.textContent = product.name;
  modalPrice.textContent = `$${product.price}`;
  modalDesc.textContent = product.desc;
}

spanClose.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target === modal) modal.style.display = "none"; };

addToCartBtn.addEventListener("click", () => {
  if (selectedProduct) addToCart(selectedProduct);
  modal.style.display = "none";
});

// Filter by category
function filterCategory(category) {
  if (category === "All") renderProducts(products);
  else renderProducts(products.filter(p => p.category === category));
}

// Search
searchBar.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  renderProducts(products.filter(p => p.name.toLowerCase().includes(term)));
});

// Init
renderProducts(products);

let orders = []; // Store all orders

// Show orders section
function showOrders() {
  document.getElementById("ordersSection").style.display = "block";
  renderOrders();
  window.scrollTo(0, document.body.scrollHeight); // scroll to orders
}

// Render orders
function renderOrders() {
  const ordersList = document.getElementById("ordersList");
  ordersList.innerHTML = "";

  if (orders.length === 0) {
    ordersList.innerHTML = "<p>No orders yet.</p>";
    return;
  }

  orders.forEach(order => {
    const div = document.createElement("div");
    div.classList.add("order-card");
    div.innerHTML = `
      <h3>Order #${order.id}</h3>
      <p><strong>Date:</strong> ${order.date}</p>
      <ul>
        ${order.items.map(i => `<li>${i.name} - $${i.price}</li>`).join("")}
      </ul>
      <p><strong>Total:</strong> $${order.total}</p>
    `;
    ordersList.appendChild(div);
  });
}

// Confirm order (update)
function confirmOrder() {
  const orderId = Math.floor(Math.random() * 100000);
  const orderDate = new Date().toLocaleString();

  const order = {
    id: orderId,
    date: orderDate,
    items: [...cart],
    total: cart.reduce((sum, i) => sum + i.price, 0)
  };

  orders.push(order); // Save order
  alert(`✅ Order #${orderId} placed successfully!`);

  cart = [];
  updateCart();
  checkoutModal.style.display = "none";
  toggleCart();

}
renderOrders(); // update orders list