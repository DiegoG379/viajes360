import React, { useState } from 'react'
import './CurrencyConverter.css'

function CurrencyConverter() {
    const [monto, setMonto] = useState('');
    const [monedaDe, setMonedaDe] = useState('UYU');
    const [monedaA, setMonedaA] = useState('USD');
    const [resultado, setResultado] = useState('');

    const handleConvertirDivisa = async () => {
    if (isNaN(monto) || monto.trim() === '') {
    alert('Ingrese un monto válido');
    return;
    }

    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${monedaDe}&want=${monedaA}&amount=${monto}`;

    try {
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1ae058be27mshbc8100951fb20b8p1c6c17jsn8ea181589eae',
            'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
        },
    });
    const result = await response.json();
    setResultado(`${monto} ${monedaDe} = ${result.new_amount} ${monedaA}`);
    } catch (error) {
        alert('Ocurrió un error. Inténtalo nuevamente más tarde.');
    }
};

return (
    <div className='mx-auto container-fluid row d-flex justify-content-center contenedor-conversor-inicio' style={{ marginTop: '35px' }}>
        <div className='col-12'>
            <h3 className='conversor-titulo-inicio text-center'>Conversor de divisas</h3>
            <p className='conversor-parrafo-inicio text-center'>Facilita tus viajes con nuestro práctico conversor de divisas. Convierte rápidamente entre diferentes monedas para planificar y disfrutar al máximo tus aventuras por el mundo.</p>
        </div>
        <div className='mx-auto container-fluid row d-flex justify-content-center col-12'>
            <input className='col-2 conversor-campos-inicio text-center' type="text" placeholder="Monto" value={monto} onChange={(e) => setMonto(e.target.value)}/>
            <select className='col-2 conversor-campos-inicio text-center' value={monedaDe} onChange={(e) => setMonedaDe(e.target.value)}>
                <option value="UYU">UYU</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="ARS">ARS</option>
            </select>
            <select className='col-2 conversor-campos-inicio text-center' value={monedaA} onChange={(e) => setMonedaA(e.target.value)}>
                <option value="USD">USD</option>
                <option value="UYU">UYU</option>
                <option value="EUR">EUR</option>
                <option value="ARS">ARS</option>
            </select>
            <button className='col-3 conversor-campos-inicio conversor-campos-boton-inicio' onClick={handleConvertirDivisa}>Convertir</button>
        </div>
        <div className='d-flex justify-content-center col-12'>
            <p className='conversor-resultados-inicio'><strong style={{ color: '#003355' }}>Resultado: </strong> {resultado}</p>
        </div>
    </div>
);  
}

export default CurrencyConverter
