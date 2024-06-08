import React, { useState } from 'react';

function Productos() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    console.log("Carrito:", carrito); 
  };
 
  
  // Ejemplo de productos con nombres, precios en pesos chilenos y rutas de imágenes
  const productos = [
    { id: 1, nombre: 'Mascarillas', precio: 4000, imagen: 'mascarillas.jpg' },
    { id: 2, nombre: 'Batas quirúrgicas', precio: 12000, imagen: 'batas_quirurgicas.jpg' },
    { id: 3, nombre: 'Uniformes', precio: 15000, imagen: 'uniformes.jpg' },
    { id: 4, nombre: 'Jeringas', precio: 2000, imagen: 'jeringas.jpg' },
    { id: 5, nombre: 'Agujas y branulas', precio: 1000, imagen: 'agujas_branulas.jpg' },
    { id: 6, nombre: 'Suero fisiológico', precio: 6000, imagen: 'suero_fisiologico.jpg' },
    { id: 7, nombre: 'Bastones', precio: 20000, imagen: 'bastones.jpg' },
    { id: 8, nombre: 'Andadores para ancianos', precio: 50000, imagen: 'andadores.jpg' },
    { id: 9, nombre: 'Esfigmomanómetros', precio: 25000, imagen: 'esfigmomanometros.jpg' },
    { id: 10, nombre: 'Estetoscopios', precio: 25000, imagen: 'estetoscopios.jpg' },
    { id: 11, nombre: 'Nebulizadores', precio: 40000, imagen: 'nebulizadores.jpg' },
  ];

  return (
    <div>
      <h2>Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={`/images/${producto.imagen}`} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${new Intl.NumberFormat('es-CL').format(producto.precio)}</p>
                <button onClick={() => agregarAlCarrito(producto)} className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
