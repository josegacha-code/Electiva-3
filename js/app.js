const imagenes = document.querySelectorAll(".imagen-traviesa");

imagenes.forEach((imagen) => {

    imagen.addEventListener("mousemove", (evento) => {

        const rect = imagen.getBoundingClientRect();

        const x = evento.clientX - rect.left;
        const y = evento.clientY - rect.top;

        const moverX = (x - rect.width / 2) / 8;
        const moverY = (y - rect.height / 2) / 8;

        imagen.style.transform =
        `translate(${-moverX}px, ${-moverY}px)
        rotate(${moverX / 3}deg)`;

    });

    imagen.addEventListener("mouseleave", () => {

        imagen.style.transform =
        "translate(0px, 0px) rotate(0deg)";

    });

});