// Carousel slick config

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow:
      '<div class="slick-prev"><button><p><i class="fa-solid fa-arrow-left"></i></p></button></div>',
    nextArrow:
      '<div class="slick-next"><button><p><i class="fa-solid fa-arrow-right"></i></p></button></div>',
  });
});

let sliderExists = document.getElementById("slider");
let productListExists = document.getElementById("product-list");
// Array de productos

let products = [
  {
    id: 1,
    image: "https://i.ytimg.com/vi/Atf9TitkKpY/maxresdefault.jpg",
    title: "Coleccion manga Dragon Ball Super",
    price: 30.0,
    quantity: 0
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/6100HfEPp-L._AC_SL1500_.jpg",
    title: "Katana Roronoa Zoro",
    price: 120.0,
    quantity: 0
  },
  {
    id: 3,
    image: "https://www.enfasys.net/wp-content/uploads/2022/09/HyperX.jpg",
    title: "Kit gamer Naruto HyperX",
    price: 40.0,
    quantity: 0
  },
  {
    id: 4,
    image:
      "https://cdn.vcgamers.com/news/wp-content/uploads/2022/08/aether-lumine-genshin-impact-figure.jpg",
    title: "Figuras Aether y Stelle Genshin Impact",
    price: 60.0,
    quantity: 0
  },
  {
    id: 5,
    image:
      "https://files.cults3d.com/uploaders/29259792/illustration-file/09698900-6793-4307-92d5-62a0bb100488/Ghost-mask_2023.06.30_08.54.00_FinalImage_0000.png",
    title: "Mascara Ghost of Tsushima",
    price: 35.0,
    quantity: 0
  },
  {
    id: 6,
    image:
      "https://www.thewandcompany.com/wp-content/uploads/2021/02/master-ball-all-pack-shot-b-1405x1184px-1024x863.jpg",
    title: "Replica Master Ball",
    price: 20.0,
    quantity: 0
  },
  {
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/Jujutsu-Kaisen-Tamagotchi.jpg",
    title: "Tamagotchi Jujutsu Kaisen coleccion",
    price: 50.0,
    quantity: 0
  },
  {
    id: 7,
    image: "https://i.ytimg.com/vi/HDGPbD4URE4/maxresdefault.jpg",
    title: 'Esferas del Dragon replica"',
    price: 60.0,
    quantity: 0
  },
  {
    id: 8,
    image:
      "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/r/replica-radar-dragon-ball-esferas-del-dragon-proplica-3.jpg",
    title: "Dragon Radar - Replica",
    price: 40.0,
    quantity: 0
  },
  {
    id: 9,
    image:
      "https://acdn.mitiendanube.com/stores/605/358/products/3hn1-e16370bb26b299503b16452079438122-640-0.png",
    title: "Remera Berserk",
    price: 10.0,
    quantity: 0
  },
  {
    id: 10,
    image:
      "https://i.etsystatic.com/25476150/r/il/0e00f3/3410466456/il_570xN.3410466456_tevc.jpg",
    title: "Colección - Llaveros Genshin Impact",
    price: 20.0,
    quantity: 0
  },
  {
    id: 11,
    image:
      "https://i.etsystatic.com/16370366/r/il/ae3b4b/2058266218/il_fullxfull.2058266218_ra93.jpg",
    title: "Colección pines Danganronpa 2",
    price: 10.0,
    quantity: 0
  },
];

// Generar elementos dinamicos para el slider

if (sliderExists) {
  for (let i = 0; i < 9; i++) {
    // Crear elementos
    let image = document.createElement("img");

    // Darle contenido a los elementos
    image.src = products[i].image;

    // Crear el elemento contenedor
    let container = document.createElement("div");
    container.classList.add("image-container");

    // Appendear los elementos en el container
    container.appendChild(image);

    // Appendear el container dentro del slider
    document.getElementById("slider").appendChild(container);
  }
}

// Generar listado de productos en products.html

if (productListExists) {
  for (let i = 0; i < products.length; i++) {
    // Crear elementos
    let productImg = document.createElement("img");
    let productName = document.createElement("p");
    let price = document.createElement("p");
    let btn = document.createElement("button");

    // Darle contenido a los elementos
    productImg.src = products[i].image;
    productName.innerHTML = products[i].title;
    price.innerHTML = '<i class="fa-solid fa-dollar-sign"></i>' + products[i].price.toLocaleString();
    btn.innerHTML = 'Añadir al carrito';
    btn.classList.add("addBtn");

    // Elemento contenedor
    let box = document.createElement("div");
    box.classList.add("product-box");

    // Append elementos al contenedor
    box.appendChild(productImg);
    box.appendChild(productName);
    box.appendChild(price);
    box.appendChild(btn);

    // Append el contenedor al documento
    document.getElementById("product-list").appendChild(box);
  }
}

// Logica para el carrito de compras

let cart = [];

let addToCart = document.querySelectorAll('.addBtn');

for (let i = 0; i < addToCart.length; i++){
  addToCart[i].addEventListener('click', ()=>{
    cartNumber(products[i]);
    totalCost(products[i]);
  })
}

function cartNumber(product){
  let productNumber = localStorage.getItem('cartNumber');

  productNumber = parseInt(productNumber);

  if(productNumber){
    localStorage.setItem('cartNumber', productNumber + 1);
    document.querySelector('.cart span').textContent = productNumber + 1;
  }else{
    localStorage.setItem('cartNumber', 1);
    document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}

function setItems(product){
  let cartItems = localStorage.getItem('cartProducts');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null){

    if(cartItems[product.id] == undefined){
      cartItems = {
        ...cartItems,
        [product.id]: product
      }
    }
    cartItems[product.id].quantity += 1;
  }else{
    product.quantity = 1;
    cartItems = {
      [product.id]: product
    }
  }

  localStorage.setItem("cartProducts", JSON.stringify(cartItems));
}

function totalCost(product){
  let cartTotal = localStorage.getItem('totalCost');
  console.log(typeof cartTotal);

  if(cartTotal != null){
    cartTotal = parseInt(cartTotal);
    localStorage.setItem("totalCost", cartTotal + product.price);
  }else{
    localStorage.setItem("totalCost", product.price);
  }
}

// Mostrar numero en el carrito fuera de la pagina de productos
if(document.querySelectorAll('.addBtn')){
  let productNumber = localStorage.getItem('cartNumber');

  productNumber = parseInt(productNumber);
  if(productNumber){
  document.querySelector('.cart span').textContent = productNumber;
  }
}

function displayProducts(){
  let cartItems = localStorage.getItem("cartProducts");
  cartItems = JSON.parse(cartItems);
  let productsContainer = document.querySelector(".cartProducts");
  let cartTotal = localStorage.getItem('totalCost');

  if(cartItems && productsContainer){
    productsContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productsContainer.innerHTML += `
      <div class="product">
        <i class="fa-solid fa-circle-xmark"></i>
        <img src=${item.image}>
        <span>${item.title}</span>
        <div class="price"><i class="fa-solid fa-dollar-sign"></i>${item.price}</div>
        <div class="quantity">${item.quantity}</div>
        <div class="total"><i class="fa-solid fa-dollar-sign"></i>${item.quantity * item.price}</div>
      </div>
      `;
    });
    productsContainer.innerHTML += `
    <div class="cartTotalContainer">
      <h2 class="cartTotalTitle">
      Precio final: <i class="fa-solid fa-dollar-sign"></i>${cartTotal}
      </h2>
    </div>
    `
  }
}

displayProducts();