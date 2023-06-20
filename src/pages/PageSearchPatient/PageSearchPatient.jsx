import { Header } from '../../components/Header/Header';
import { SearchPatient } from '../../components/SearchPatient/SearchPatient';


export function PageSearchPatient() {
   return(
      <>
      <Header/>
      <SearchPatient
      title='Procurar paciente'/>
      </>
   )
}