import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import { MisdemeanourDataWrapper } from './components/misdemeanours/misdemeanour-data-wrapper';

function App() {
  return (
   <>
   <BrowserRouter>
     <MisdemeanourDataWrapper/>
    </BrowserRouter>
   </>
  );
}

export default App
