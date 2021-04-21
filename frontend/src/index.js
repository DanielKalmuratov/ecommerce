import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import {StateProvider, ProductProvider} from './context'


const Main=()=>{

  return(
    <StateProvider>
      <ProductProvider>
       <BrowserRouter>
        <App />
      </BrowserRouter>
      </ProductProvider>
    </StateProvider>
  )

}
ReactDOM.render(
  <Main />,
  document.getElementById('root')
);


