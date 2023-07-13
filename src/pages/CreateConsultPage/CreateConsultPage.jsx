import {Forms} from '../../components/Forms/Forms'
import {Header} from '../../components/Header/Header'
import S from './styles.module.scss'

export function CreateConsultPage() {

   const consultas = [
      { id: 1, nome: 'Oftalmologista' },
      { id: 2, nome: 'Ortopedista' },
      { id: 3, nome: 'Otorrinolaringologista' },
      { id: 4, nome: 'Dermatologista' },
      { id: 5, nome: 'Urologista' },
      { id: 6, nome: 'Geriatra' },
      { id: 7, nome: 'Médico do trabalho' },
      { id: 8, nome: 'Psiquiatra' },
      { id: 9, nome: 'Gastroenterologista' },
      { id: 10, nome: 'Clínico geral' },
      { id: 11, nome: 'Cirurgião' },
      { id: 12, nome: 'Mastologista' }
    ];
   return(
      <>
      <Header/>
      <div className={S.pageCreateConsult}>
         <div className={S.forms}>
            <Forms
               controlIdFirst='controlIdPacient'
               controlIdSecond='controlIdDoctor'
               
               title='Criar Consulta'
               procedure='Consulta:'
               placeholderProcedure='Selecione a consulta'
               labelProfessional='Médico:'
               procedures={consultas}
            />
         </div>
      </div>
      </>
   )
}