document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    {
      nombre: "Auriculares Bluetooth In-ear F11 Pro Fan Pro Superior F9-5",
      descripcion: "Monaural, True Wireless, Estuche de carga, Micrófono incorporado, Cómodo y práctico.",
      precio: "$15.000",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_822807-MLA81859076734_012025-O.webp"
    },
    {
      nombre: "Mochila Urbana",
      descripcion: "Impermeable, 20L, cierre, compartimento para notebook, bolsillo para botella.",
      precio: "$60.000",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_926983-MLA82368822189_022025-O.webp"
    },
    {
      nombre: "Balanza Digital 10kg Multiuso Precisión Portátil",
      descripcion: "Función Tara, 10kg, 2 pilas AA, base antideslizante, auto apagado.",
      precio: "$15.000",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_668425-MLU75357343151_032024-O.webp"
    },
    {
      nombre: "Remera Lisa Algodón Jersey Peinado Premium",
      descripcion: "Tees Factory, Manga corta, Hombre, Adultos, Liso.",
      precio: "$18.500",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_873697-MLA78122763242_082024-O.webp"
    }
  ];

  const container = document.getElementById("productos-container");

  productos.forEach(prod => {
    const card = document.createElement("article");
    card.className = "producto";
    card.innerHTML = \`
      <figure>
        <img src="\${prod.imagen}" alt="\${prod.nombre}" />
        <figcaption>
          <p class="nombre">\${prod.nombre}</p>
          <p>\${prod.descripcion}</p>
          <p class="precio">Precio: \${prod.precio}</p>
        </figcaption>
      </figure>
    \`;
    container.appendChild(card);
  });
});
