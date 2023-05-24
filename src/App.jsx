import { Login } from './components/Login/Login';
import GlobalStyles  from './styles/global';
import { Card } from './components/Card/Card';
import { Dash } from './components/Dash/Dash';
import './App.scss';

function App() {
  return (
    
    <div>
      <GlobalStyles />
      <Dash />
      <div className='cards'>
        <Card 
          title='Ganho Semanal'
          money='288'
        />
        <Card 
          title='Ganho Mensal'
          money='508'
        />
        <Card 
          title='Ganho Anual'
          money='50.000'
        />
      </div>
      <Login />

    </div>
  );
}

export default App;