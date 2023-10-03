// Carousel slick config

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: '<div class="slick-prev"><button><p><i class="fa-solid fa-arrow-left"></i></p></button></div>',
    nextArrow: '<div class="slick-next"><button><p><i class="fa-solid fa-arrow-right"></i></p></button></div>'
  });
});

// Objeto playlist

let playlist = [
  {
    image: "https://i.ytimg.com/vi/Atf9TitkKpY/maxresdefault.jpg",
    title: "Coleccion manga Dragon Ball Super",
  },
  {
    image: "https://m.media-amazon.com/images/I/6100HfEPp-L._AC_SL1500_.jpg",
    title: "Katana Roronoa Zoro",
  },
  {
    image: "https://www.enfasys.net/wp-content/uploads/2022/09/HyperX.jpg",
    title: "Kit gamer Naruto HyperX",
  },
  {
    image: "https://cdn.vcgamers.com/news/wp-content/uploads/2022/08/aether-lumine-genshin-impact-figure.jpg",
    title: "Figuras Aether y Stelle Genshin Impact",
  },
  {
    image: "https://files.cults3d.com/uploaders/29259792/illustration-file/09698900-6793-4307-92d5-62a0bb100488/Ghost-mask_2023.06.30_08.54.00_FinalImage_0000.png",
    title: "Mascara Ghost of Tsushima",
  },
  {
    image: "https://www.thewandcompany.com/wp-content/uploads/2021/02/master-ball-all-pack-shot-b-1405x1184px-1024x863.jpg",
    title: "Replica Master Ball",
  },
  {
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/11/Jujutsu-Kaisen-Tamagotchi.jpg",
    title: "Tamagotchi Jujutsu Kaisen coleccion",
  },
  {
    image: "https://i.ytimg.com/vi/HDGPbD4URE4/maxresdefault.jpg",
    title: 'Esferas del Dragon replica"',
  },
  {
    image: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/r/replica-radar-dragon-ball-esferas-del-dragon-proplica-3.jpg",
    title: "Dragon Radar - Replica",
  },
];

// Generar elementos dinamicos
for (let i = 0; i < playlist.length; i++) {
  // Crear elementos
  let image = document.createElement("img");

  // Darle contenido a los elementos y clases
  image.src = playlist[i].image;

  // Crear el elemento contenedor
  let container = document.createElement("div");
  container.classList.add("image-container");

  // Appendear los elementos en el container
  container.appendChild(image);

  // Appendear el container dentro del slider
  document.getElementById("slider").appendChild(container);
}