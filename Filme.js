const filmes = [
    {
        id: "homecoming",
        titulo: "Spider-Man: Homecoming (2017)",
        trailer: "https://www.youtube.com/watch?v=rk-dF1lIbIg"
        
    },
    {
        id: "far-from-home",
        titulo: "Spider-Man: Far From Home (2019)",
        trailer: "https://www.youtube.com/watch?v=Nt9L1jCKGnE&t=2s"
    },
    {
        id: "no-way-home",
        titulo: "Spider-Man: No Way Home (2021)",
        trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA&t=5s"
    },
    {
        id: "brand-new-day",
        titulo: "Spider-Man: Brand New Day (2026)",
        trailer: "https://www.youtube.com/watch?v=62bIsvRcPv0"
    },
    {
        id: "amazing-spider-man",
        titulo: "The Amazing Spider-Man (2012)",
        trailer: "https://www.youtube.com/watch?v=-tnxzJ0SSOw"
    },
    {
        id: "amazing-spider-man-2",
        titulo: "The Amazing Spider-Man 2 (2014)",
        trailer: "https://www.youtube.com/watch?v=DlM2CWNTQ84&t=4s"
    },
    {
        id: "spider-man-2002",
        titulo: "Spider-Man (2002)",
        trailer: "https://www.youtube.com/watch?v=P3uI5sLosKU"
    },
    {
        id: "spider-man-2",
        titulo: "Spider-Man 2 (2004)",
        trailer: "https://www.youtube.com/watch?v=1s9Yln0YwCw&t=11s"
    },
    {
        id: "spider-man-3",
        titulo: "Spider-Man 3 (2007)",
        trailer: "https://www.youtube.com/watch?v=e5wUilOeOmg&t=18s"
    }
];

const id = new URLSearchParams(window.location.search).get("id");
const filme = filmes.find((item) => item.id === id);
const titulo = document.querySelector("#titulo");
const trailer = document.querySelector("#trailer");

if (filme) {
    titulo.textContent = filme.titulo;

    if (filme.trailer) {
        const video = document.createElement("iframe");
        video.src = filme.trailer;
        video.title = `Trailer de ${filme.titulo}`;
        video.allowFullscreen = true;
        trailer.appendChild(video);
    } else {
        trailer.textContent = "Trailer não cadastrado.";
    }
} else {
    titulo.textContent = "Filme não encontrado";
    trailer.textContent = "Verifique o endereço e tente novamente.";
}