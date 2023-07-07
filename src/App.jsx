
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Initial } from './pages/Initial/Initial';
import { CreateConsult } from './pages/CreateConsult/CreateConsult';
import { CreateExam } from './pages/CreateExam/CreateExam';
import { Procedures } from './pages/Procedures/Procedures';
import { PageRegisterPatient } from './pages/PageRegisterPatient/PageRegisterPatient';
import { PageSearchPatient } from './pages/PageSearchPatient/PageSearchPatient';
import { SchedulingConsult } from './pages/SchedulingConsult/SchedulingConsult';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';

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
        <Route exact path='/create_exam' element={<CreateExam/>}/>
        <Route exact path='/procedures' element={<Procedures/>}/>
        <Route exact path='/register_patient' element={<PageRegisterPatient/>}/>
        <Route exact path='/search_patient' element={<PageSearchPatient/>}/>
        <Route exact path='/scheduling_consult' element={<SchedulingConsult/>}/>
        <Route exact path='/search_patient/details' element={<DetailsPage/>}/>
      </Routes>
    </Router>
    

  );
}

export default App;
