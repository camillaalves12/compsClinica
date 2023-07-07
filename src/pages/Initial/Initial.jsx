
import { Card } from "../../components/Card/Card"
import { Header } from "../../components/Header/Header"
import {DashPie} from "../../components/DashPie/DashPie"
import {DashSpline} from "../../components/DashSpline/DashSpline"

import S from './styles.module.scss'

export function Initial() {
   return(

      <div className={S.pageInitial}>
            <Header />
      <div className={S.dashboard}>
            <div className={S.cards}>
               <Card 
               title='Saldo Diário'
               money= '250' 
               />
               <Card 
               title='Saldo Semanal'
               money= '550' 
               />
               <Card 
               title='Saldo Mensal'
               money= '1250' 
               />
            </div>
            <div className={S.dashs}>
               <DashPie />
               <DashSpline />
            </div>
      </div>

      </div>

   )
}