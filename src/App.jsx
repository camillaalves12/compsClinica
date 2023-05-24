import { Login } from './components/Login/Login';
import GlobalStyles  from './styles/global';
import { Card } from './components/Card/Card';
import { Dash } from './components/Dash/Dash';
import { Table } from './components/Table/Table';
import { Forms } from './components/Forms/Forms';
import './App.scss';

function App() {
  return (
    
    <div>
      <GlobalStyles />
      <div className='aa'>
        <Dash />
      </div>
      <div className='aa'>
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
      </div>
      <div className='aa'>
      <Login />
      </div>
      <div className='aa'>
        <Table />
      </div>
      <div className='aa'>
        <Forms />
      </div>
    </div>
  );
}

export default App;