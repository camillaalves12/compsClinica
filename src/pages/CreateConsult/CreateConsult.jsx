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
         labelProfessional='Médico:'
         placeholderDoctor='Digite o nome do Médico'
         nameEspecialty='Especialidade do Médico:'
         placeholderEspecialty='Digite a especialidade do médico'

         />

      </div>

      </div>
      </>
   )
}