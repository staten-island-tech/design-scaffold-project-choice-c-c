import "./style.css";
import { allProducts } from "./js/allProducts";
import  { collections } from "./js/collections";
import { bestSellers } from "./js/bestSellers";

window.addEventListener('load', () => {
  document.body.classList.add('dark-mode');
  document.querySelector("#content").innerHTML = `
      <div id="home-div" class="home">
        <div class="homeTitle">...Loading</div>
      </div>
`;
  gsap.to(".homeTitle", {duration: 2, text: "Record Shop", delay: 1});

});
let radios = document.querySelectorAll('input[name="theme"]');

for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener("change", function() {
      document.body.classList.toggle('dark-mode');
      const homeClassList = document.querySelector("#home-div").classList;
      if(homeClassList[0] === 'home'){
        document.querySelector(".home").classList.replace('home', 'home-light')
        document.querySelector(".image").classList.replace('image', 'image-dark');
      }else{
        document.querySelector(".home-light").classList.replace('home-light', 'home')
        document.querySelector(".image-dark").classList.replace('image-dark', 'image');
      }

  });
}

document.getElementById("learn").onclick = function () {
  document.querySelector("#content").innerHTML = `
      <div class="learn-page">
        <div class="learn-content">
          <div class="learn-buttons">
            <h3 id="learn-button-about">ABOUT US</h3>
            <h3 id="learn-button-faq">FAQ</h3>
            <h3 id="learn-button-contact">CONTACT US</h3>
          </div>
        <div id="learn-section">
        <div class="left-side">
          ABOUT US
        </div>
        <div class="right-side">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu viverra eu sociis aliquet 
          libero, donec tortor posuere. 
          Potenti vel facilisis ut lorem ipsum morbi mi duis. Tellus hendrerit neque dictum adipiscing 
          varius pharetra. Praesent amet sit venenatis augue eget 
          suspendisse risus sapien.
        </div>
        </div>
        </div>
      </div>
`;
document.getElementById("learn-button-about").onclick = function () {
  console.log('clicked');
  document.querySelector("#learn-section").innerHTML = `
      <div class="left-side">
        ABOUT US
      </div>
      <div class="right-side">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu viverra eu sociis aliquet 
      libero, donec tortor posuere. 
      Potenti vel facilisis ut lorem ipsum morbi mi duis. Tellus hendrerit neque dictum adipiscing 
      varius pharetra. Praesent amet sit venenatis augue eget 
      suspendisse risus sapien.
      </div>
`;
};

document.getElementById("learn-button-faq").onclick = function () {
  console.log('clicked');
  document.querySelector("#learn-section").innerHTML = `
      <div class="left-side">
        FAQ
      </div>
      <div class="right-side">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu viverra eu sociis aliquet 
      libero, donec tortor posuere. 
      Potenti vel facilisis ut lorem ipsum morbi mi duis. Tellus hendrerit neque dictum adipiscing 
      varius pharetra. Praesent amet sit venenatis augue eget 
      suspendisse risus sapien.
      </div>
`;
};

document.getElementById("learn-button-contact").onclick = function () {
  console.log('clicked');
  document.querySelector("#learn-section").innerHTML = `
      <div class="left-side">
        CONTACT US
      </div>
      <div class="right-side">
      <form class="form">
        <div class="line">
          <label>NAME*</label>
          <input type="text" id="fname" name="fname" class="input">
        </div>
        <div class="line">
          <label>EMAIL*</label>
          <input type="text" id="email" name="email" class="input">
        </div>
        <div class="line">
          <label>SUBJECT*</label>
          <input type="text" id="subject" name="subject" class="input">
        </div>
        <div class="line">
          <label>MESSAGE*</label>
          <input type="text" id="message" name="message" class="input">
        </div>
      </form>
`;
};
};
document.getElementById("shop").onclick = function () {
  let showAllProducts = allProducts.map(function (product) {
    return `<div class="grid${product.number}">
               <div>
                 <img id="image1" src=${product.location} />
                 <div class="title">${product.name}</div>
                 <div class="price">${product.price}</div>
               </div>
             </div>`;
  });
  let showCollections = collections.map(function (collection) {
    return `<div class="grid${collection.number}">
               <div>
                 <img id="image1" src=${collection.location} />
                 <div class="title">${collection.name}</div>
                 <div class="price">${collection.price}</div>
               </div>
             </div>`;
  });
  let showBestSellers = bestSellers.map(function (bestSeller) {
    return `<div class="grid${bestSeller.number}">
               <div>
                 <img id="image1" src=${bestSeller.location} />
                 <div class="title">${bestSeller.name}</div>
                 <div class="price">${bestSeller.price}</div>
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
  document.getElementById("shop-button-all").onclick = function () {
    document.getElementById("grid").innerHTML = showAllProducts.join("");
    var tl = new TimelineLite();
    tl.from("#grid",1,{ top:'-10%' , ease: Elastic.easeOut })
      .to("#grid",1,{ top:'100%', ease: Elastic.easeIn } ,'+=1');
  };
  document.getElementById("shop-button-collections").onclick = function () {
    document.getElementById("grid").innerHTML = showCollections.join("");
  };
  document.getElementById("shop-button-best-sellers").onclick = function () {
    document.getElementById("grid").innerHTML = showBestSellers.join("");
  };
  
};

document.getElementById("recordIcon").onclick = function () {
  console.log('clicked');
  document.querySelector("#content").innerHTML = `
      <div class="home">
        <div class="homeTitle">RECORD SHOP</div>
      </div>
`;
};
var scales = [{scale:1.6}, {scale:0.2}, {scale:1}];

  gsap.to('#grid', {
    motionPath: {
      path: scales, 
      curviness: 0
    }, 
    duration: 3, 
    ease: "none",
    repeat: -1,
    repeatDelay: 1
  });
