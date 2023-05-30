// import { Login } from './components/Login/Login';
// import GlobalStyles  from './styles/global';
// import { Card } from './components/Card/Card';
// import { Dash } from './components/Dash/Dash';
// import { Forms } from './components/Forms/Forms';

import { LoginPage } from './pages/LoginPage/LoginPage';
import { Initial } from './pages/Initial/Initial';
import { CreateConsult } from './pages/CreateConsult/CreateConsult';

import './App.scss';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/initial' element={<Initial/>}/>
        <Route exact path='/create_consult' element={<CreateConsult/>}/>
      </Routes>
    </Router>
    

  );
}

export default App;

{/* <div>
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
</div> */}