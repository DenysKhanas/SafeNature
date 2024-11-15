import React, { useState } from 'react';
import '../styles/Calculator.css';
import Navigation from './Navigation';

function Calculator() {
  const [result, setResult] = useState(0);
  const [data, setData] = useState({ transport: '0', energy: '0', waste: '0' });
  const [footprintLevel, setFootprintLevel] = useState('');

  const calculateFootprint = () => {
    const footprint = (parseFloat(data.transport) * 2.5) + (parseFloat(data.energy) * 1.5) + (parseFloat(data.waste) * 1.2);
    if (footprint < 350) {
      setFootprintLevel('Меньше норми!');
    } else if (footprint >= 350 && footprint <= 450) {
      setFootprintLevel('Норма!');
    } else {
      setFootprintLevel('Більше норми!');
    }

    setResult(footprint);
  };

  const getTextColor = () => {
    if (footprintLevel === 'Меньше норми!') {
      return 'green';
    } else if (footprintLevel === 'Норма!') {
      return 'orange';
    } else if (footprintLevel === 'Більше норми!') {
      return 'red';
    }
    return 'black';
  };

  return (
    <>
      <Navigation />
      <section id="calculator" className="calculator-section">
        <h2>Калькулятор викидів</h2>
        
        <label>Транспортні викиди (км на тиждень):</label>
        <input type="number" value={data.transport} onChange={(event) => setData({ ...data, transport: event.target.value })} />
        <label>Споживання енергії (kWh на місяць):</label>
        <input type="number" value={data.energy} onChange={(event) => setData({ ...data, energy: event.target.value })} />
        <label>Сміттєві відходи (кг на тиждень):</label>
        <input type="number" value={data.waste} onChange={(event) => setData({ ...data, waste: event.target.value })} />
        <button onClick={calculateFootprint}>Порахувати</button>
        <h3>Твої викиди: {result} кг CO₂/місяць</h3>
        <h3 style={{ color: getTextColor() }}>{footprintLevel}</h3>
      </section>
    </>
  );
}

export default Calculator;
