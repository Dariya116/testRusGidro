import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';
import './styles/index';
export const App = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
