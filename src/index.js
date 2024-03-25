import ReactDOM from 'react-dom';
import './Style/style.scss';
import { BrowserRouter } from 'react-router-dom'; // Importez BrowserRouter
import Routes from './Components/Routes';
import reportWebVitals from './reportWebVitals';

// Enveloppez votre application avec BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();