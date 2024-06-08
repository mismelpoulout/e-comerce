import React from 'react';

const Contacto = () => {
  return (
    <div>
      <h2>Contacto</h2>
      <p>Información de contacto.</p>
      <div className='container'>
        <form>
          <div className="mb-3">
            <a href="https://wa.me/56939357975" className="btn btn-secondary">
              Nuestro WhatsApp
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
