import {Forms} from '../../components/Forms/Forms'
import {Header} from '../../components/Header/Header'

import S from './styles.module.scss'

export function CreateExam() {
   return(
      <>
      <Header/>
      <div className={S.pageCreateConsult}>
      <div className={S.forms}>
         <Forms
            labelProfessional='Profissional:'
            nameEspecialty='Tipo de exame:'
            placeholderEspecialty=''
 />
      </div>

      </div>
      </>
   )
}