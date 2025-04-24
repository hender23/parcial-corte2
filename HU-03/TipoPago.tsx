import React from 'react';

type Props = {
  onSeleccionar: (tipo: string) => void;
};

const TipoPago: React.FC<Props> = ({ onSeleccionar }) => {
  return (
    <div>
      <h2>Tipo de Pago</h2>
      <select onChange={(e) => onSeleccionar(e.target.value)}>
        <option value="">Seleccione...</option>
        <option value="efectivo">Efectivo</option>
        <option value="tarjeta">Tarjeta</option>
        <option value="transferencia">Transferencia</option>
      </select>
    </div>
  );
};

export default TipoPago;
