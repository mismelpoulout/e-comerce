import React, { useState } from 'react';

function Carrito() {
  const [carrito, setCarrito] = useState([]);

  return (
    <div>
      <h2>Carrito</h2>
      <p>Tu carrito de compras.</p>
    </div>
  );
}

export default Carrito;
