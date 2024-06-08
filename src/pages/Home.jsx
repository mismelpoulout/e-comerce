// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">¡Bienvenido a nuestro Ecommerce!</h1>
        <p className="lead">Encuentra los mejores insumos médicos aquí.</p>
        <hr className="my-4" />
        <p>Contamos con una amplia variedad de productos para tu necesidades médicas.</p>
        <a className="btn btn-primary btn-lg" href="/productos" role="button">Ver productos</a>
      </div>
    </div>
  );
}

export default Home;
