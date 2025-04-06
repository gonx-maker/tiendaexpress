// Lista de productos (podés mover esto a un archivo JSON si querés)
const productos = [
  {
    nombre: "Auriculares Bluetooth",
    precio: "$5.500",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Auriculares inalámbricos con excelente sonido.",
    enlace: "https://wa.me/541170809692?text=Hola!%20Quiero%20comprar%20los%20Auriculares%20Bluetooth"
  },
  {
    nombre: "Reloj Inteligente",
    precio: "$12.000",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Control de salud, notificaciones y más.",
    enlace: "https://wa.me/541170809692?text=Hola!%20Estoy%20interesado%20en%20el%20Reloj%20Inteligente"
  },
  {
    nombre: "Cámara de Seguridad WiFi",
    precio: "$9.900",
    imagen: "https://via.placeholder.com/150",
    descripcion: "Monitoreo desde tu celular, fácil instalación.",
    enlace: "https://wa.me/541170809692?text=Hola!%20Quiero%20más%20info%20de%20la%20Cámara%20de%20Seguridad"
  }
];

// Mostrar los productos en el HTML
const contenedor = document.getElementById("productos-container");

productos.forEach(producto => {
  const card = document.createElement("div");
  card.classList.add("producto");

  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" />
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p class="precio">${producto.precio}</p>
    <a href="${producto.enlace}" target="_blank" class="boton">Comprar por WhatsApp</a>
  `;

  contenedor.appendChild(card);
});
