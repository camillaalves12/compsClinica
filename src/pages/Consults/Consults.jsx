import { Table } from "../../components/Table/Table"
import { Header } from "../../components/Header/Header"

import S from './styles.module.scss'

export function Consults() {
   return(
      <>
      <div className={S.pageInitial}>
            <Header />
         <div className={S.table}>
            <Table />
         </div>
      </div>
      </>
   )
}