import { urlSafeDecode } from "@aws-amplify/core";
import "./style.css";

const allProducts = [
  {
    number: 1,
    name: "Rihanna - ANTI",
    price: 29.99,
    location: "./images/image1",
  },
  {
    number: 2,
    name: "Tyler, The Creator - Flower Boy",
    price: 29.99,
    location: "./images/image2",
  },
  {
    number: 3,
    name: "Japanese Breakfast - Jubilee",
    price: 29.99,
    location: "./images/image3",
  },
  {
    number: 4,
    name: "Mac Miller - The Divine Feminine",
    price: 29.99,
    location: "./images/image4",
  },
  {
    number: 5,
    name: "Lorde - Melodrama",
    price: 29.99,
    location: "./images/image5",
  },
  {
    number: 6,
    name: "Tame Impala - Currents",
    price: 29.99,
    location: "./images/image6",
  },
];
document.querySelector("#content").innerHTML = `
      <div id="home">
        <div class="homeTitle">RECORD SHOP</div>
      </div>
`;
document.getElementById("learn").onclick = function () {
  document.querySelector("#content").innerHTML = `
      <div class="learn-page">
        <div class="learn-content">LEARN PAGE HERE</div>
      </div>
`;
};
document.getElementById("shop").onclick = function () {
  let showAllProducts = allProducts.map(function (product) {
    return `<div class="grid${product.number}">
               <div>
                 <img id="image1" src="/images/image${product.number}.jpg" />
                 <div class="title">${product.name}</div>
                 <div class="price">${product.price}</div>
               </div>
             </div>`;
  });
  document.querySelector("#content").innerHTML = `
      <div class="shop-page">
        <div class="shop-content">
          <div class="shop-buttons">
            <h3 id="shop-button-all">ALL PRODUCTS</h3>
            <h3 id="shop-button-collections">COLLECTIONS</h3>
            <h3 id="shop-button-best-sellers">BEST SELLERS</h3>
          </div>
          <div class="products">
            <div id="grid">
            </div>
          </div>
        </div>
      </div>
`;
  document.getElementById("grid").innerHTML = showAllProducts.join("");
  // document.getElementById("image1").src = "/images/image1.jpg";
};
document.getElementById("recordIcon").onclick = function () {
  document.querySelector("#content").innerHTML = `
      <div id="home">
        <div class="homeTitle">RECORD SHOP</div>
      </div>
`;
};
