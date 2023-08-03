import React from 'react';

function Saludo({ nombre, textoAdicional }) {
  let time = new Date().getHours();
  let saludo;

  if (time < 12) {
    saludo = `Good morning, ${nombre}`;
  } else if (time < 18) {
    saludo = `Good afternoon, ${nombre}`;
  } else {
    saludo = `Good evening, ${nombre}`;
  }
  
  return (
    <div className="text-center">
      <h4 className="font-bold mb-2">{saludo}</h4>
      {textoAdicional && <p>{textoAdicional}</p>}
    </div>
  );
}

export default Saludo;
