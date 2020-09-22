import React, { useState, useEffect } from 'react';
import './App.css';
import ConvertButton from './components/ConvertButton';
import AmountInput from './components/AmountInput';
import FromCurrency from './components/FromCurrency';
import ToCurrency from './components/ToCurrency';

function App() {

  const apiUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR,GBPapi_key=85d837f2fd4349e1bbefa23d43a8af9a25d5df8889044eeeb7753177f0b34140';

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState('');

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
    }, []);

    console.log(data);
    console.log(inputValue);
    console.log(fromCurrency);
    console.log(toCurrency);

  const handleConversion = () => {
    const rate = data[fromCurrency][toCurrency];
    console.log(rate)
    return setResult(inputValue * rate);
  };


  return (
    <div className='container'>
      <h1>Cryptocurrency Converter</h1>
      <FromCurrency onChange={event => setFromCurrency(event)}/>
      <AmountInput onChange={value => setInputValue(value)}/>
      <ToCurrency onChange={event => setToCurrency(event)}/>
      <ConvertButton onClick={handleConversion}/>
      <p>Result: {Math.ceil(result)}</p>
    </div>
  );
}

export default App;
