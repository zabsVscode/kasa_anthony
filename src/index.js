import ReactDOM from 'react-dom';
import './Style/style.scss';
import { BrowserRouter } from 'react-router-dom'; // Importez BrowserRouter
import App from './App';
import reportWebVitals from './reportWebVitals';

// Enveloppez votre application avec BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();