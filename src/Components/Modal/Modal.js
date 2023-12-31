import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: 'relative',
            backgroundColor: 'white',
            padding: '50px',
            borderRadius: '10px',
            zIndex: 1001,
            maxHeight: '90vh', // Establecer una altura máxima del 80% del alto de la ventana
            overflowY: 'auto', // Agregar desplazamiento vertical si el contenido del modal se desborda
            margin: '0 1.2rem 0 1.2rem',
            maxWidth: '600px',
          }}
        >
          {children}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '5px',
              right: '15px',
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '30px',
              fontWeight: 'bold',
              color: 'red',
              cursor: 'pointer',
            }}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
