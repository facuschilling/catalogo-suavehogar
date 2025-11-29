// Array de productos (ejemplo)
const productos = [
  {
    nombre: "Producto 1",
    precio: "$20.000",
    img: "https://drive.usercontent.google.com/download?id=1DHHbCUmVUzDgw5QIdGSBIyJnj3BHzBZh&export=view&authuser=0",
  },
  {
    nombre: "Producto 2",
    precio: "$30.000",
    img: "https://drive.google.com/uc?export=view&id=1DHHbCUmVUzDgw5QIdGSBIyJnj3BHzBZh"
  },
  {
    nombre: "Producto 3",
    precio: "$15.000",
    img: "https://drive.google.com/uc?export=view&id=1DHHbCUmVUzDgw5QIdGSBIyJnj3BHzBZh"
  }
];

const contenedor = document.getElementById("catalogo");

// Render
productos.forEach(prod => {
  contenedor.innerHTML += `
    <div class="card">
      <img src="${prod.img}" alt="${prod.nombre}">
      <div class="info">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
      </div>
    </div>
  `;
});
