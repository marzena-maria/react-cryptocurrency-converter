import React, { useState, useEffect } from 'react';
import './App.css';
import ConvertButton from './components/ConvertButton';
import AmountInput from './components/AmountInput';
import FromCurrency from './components/FromCurrency';
import ToCurrency from './components/ToCurrency';

function App() {

  const apiUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD,EUR,GBPapi_key=85d837f2fd4349e1bbefa23d43a8af9a25d5df8889044eeeb7753177f0b34140';

  const [converter, setConverter] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setConverter(data);
                //console.log(data);
            })
    }, []);

    console.log(converter);
    console.log(inputValue);
    console.log(fromCurrency);
    console.log(toCurrency);

    // const convertHandler = () => {
      

    // };
  
  return (
    <div className='container'>
      <h1>Cryptocurrency Converter</h1>
      <FromCurrency onChange={event => setFromCurrency(event)}/>
      <AmountInput onChange={value => setInputValue(value)}/>
      <ToCurrency onChange={event => setToCurrency(event)}/>
      <ConvertButton />
    </div>
  );
}

export default App;
