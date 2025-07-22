function toggleMode() {
    const html = document.documentElement;

    html.classList.toggle("light");

    //pegar a tag img
    const img = document.querySelector("#profile img");

    //substituir a imagem
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./img/FotoPerfil2.jpg");
    } else {
          img.setAttribute("src", "./img/FotoPerfil.jpg"); 
    }

}