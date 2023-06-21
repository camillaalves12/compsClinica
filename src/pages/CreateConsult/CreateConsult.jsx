import {Forms} from '../../components/Forms/Forms'
import {Header} from '../../components/Header/Header'


import S from './styles.module.scss'

export function CreateConsult() {
   return(
      <>
      <Header/>
      <div className={S.pageCreateConsult}>
      <div className={S.forms}>
         <Forms
         title='Criar Consulta'
         labelProfessional='Médico:'
         nameEspecialty='Especialidade do Médico:'
         textlastbtn='Agendar consulta'
         />

      </div>

      </div>
      </>
   )
}