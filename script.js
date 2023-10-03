// Carousel slick

$(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      prevArrow: '<div class="slick-prev"><button><p><</p></button></div>',
      nextArrow: '<div class="slick-next"><button><p>></p></button></div>'
    });
  });

  // Objeto playlist

  let playlist = [
    {
      file: "https://cdn.jwplayer.com/manifests/ZibjXsv7.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/ZibjXsv7/poster.jpg?width=720",
      title: "Gana Cristina Fernández De Kirchner- Gentileza C5n",
      mediaid: "ZibjXsv7",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/r6Bd1MTc.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/r6Bd1MTc/poster.jpg?width=720",
      title:
        "Alberto Fernández en cadena nacional por el intento de magnicidio contra Cristina Fernández de Kirchner",
      mediaid: "r6Bd1MTc",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/uXvpLCb7.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/uXvpLCb7/poster.jpg?width=720",
      title:
        "Jornada de movilización en defensa de la vicepresidenta Cristina Fernández de Kirchner",
      mediaid: "uXvpLCb7",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/583pajPE.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/583pajPE/poster.jpg?width=720",
      title:
        "El alegato completo de Cristina Fernández de Kirchner en la causa vialidad",
      mediaid: "583pajPE",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/d64xth4k.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/d64xth4k/poster.jpg?width=720",
      title:
        "Alberto Fernández Aseguró Que Cristina Kirchner No Comparte La Decisión De Máximo De Renunciar",
      mediaid: "d64xth4k",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/rJUGm5IS.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/rJUGm5IS/poster.jpg?width=720",
      title: "Llegó Cristina Kirchner A Merlo",
      mediaid: "rJUGm5IS",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/0aLmCdMo.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/0aLmCdMo/poster.jpg?width=720",
      title: "El Indio Solari En Apoyo A Cristina Kirchner",
      mediaid: "0aLmCdMo",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/2FW2Abud.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/2FW2Abud/poster.jpg?width=720",
      title:
        'Cristina Fernández de Kirchner: "La política también es conducir el desorden"',
      mediaid: "2FW2Abud",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/QC0oJMjg.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/QC0oJMjg/poster.jpg?width=720",
      title: "Cristina Kirchner recordó a Néstor Kirchner",
      mediaid: "QC0oJMjg",
    },
    {
      file: "https://cdn.jwplayer.com/manifests/bUBy6YEv.m3u8",
      image: "https://cdn.jwplayer.com/v2/media/bUBy6YEv/poster.jpg?width=720",
      title:
        'Convocaron a una marcha multitudinaria frente a Tribunales contra la "proscripción" de Cristina Fernández de Kirchner',
      mediaid: "bUBy6YEv",
    },
  ];

  // Generar elementos dinamicos
  for (let i = 0; i < playlist.length; i++) {
    // Crear elementos
    let image = document.createElement("img");
    let title = document.createElement("p");
    let playButton = document.createElement("div");

    // Darle contenido a los elementos y clases
    image.src = playlist[i].image;
    title.innerHTML = playlist[i].title;
    playButton.classList.add("play-button");
    playButton.innerHTML = "&#9658;";

    // Crear el elemento contenedor
    let container = document.createElement("div");
    container.classList.add("image-container");

    // Appendear los elementos en el container
    container.appendChild(image);
    container.appendChild(title);
    container.appendChild(playButton);

    // Appendear el container dentro del slider
    document.getElementById("slider").appendChild(container);
  }