'use client';

import React from 'react';

function Testing() {
  const handleUser = () => {
    console.log('Hola User');

    const dataUser = {};
  };

  return (
    <div>
      <h1>TESTING</h1>
      <div>
        <button
          onClick={() => {
            handleUser();
          }}
        >
          Crear User
        </button>
      </div>
    </div>
  );
}

export default Testing;
