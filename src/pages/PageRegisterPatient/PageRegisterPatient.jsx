import { Header } from "../../components/Header/Header"
import { RegisterPatient } from "../../components/RegisterPatient/RegisterPatient"

export function PageRegisterPatient() {
    return(
        <>
        <Header/>
        <RegisterPatient 
        title='Cadastrar paciente'/>
        </>
    )
}