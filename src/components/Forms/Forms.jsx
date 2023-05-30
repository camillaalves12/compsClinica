import S from './styles.module.scss'

// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ButtonCase from '../ButtonCase/ButtonCase'


export function Forms() {
   return(
    <Form className={S.container}>
      <div className={S.containerForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Paciente</Form.Label>
        <Form.Control 
        className={S.input} 
        type="email" 
        placeholder="Digite o nome e sobrenome do paciente"
        style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicmedico">
        <Form.Label>Médico</Form.Label>
            <Form.Select aria-label="Selecione o médico" 
            style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }}>
               <Form.Label>Valor</Form.Label>
               <option>Selecione o médico</option>
               <option value="1">João</option>
               <option value="2">Lucas</option>
               <option value="3">Matheus</option>
            </Form.Select>
      </Form.Group>

      <div className={S.money}>

         <Form.Group className="mb-3" controlId="formBasicmedico">
            <Form.Label>Valor</Form.Label>
            <Form.Control 
            type="medico" 
            placeholder="Digite o valor da consulta" 
            className={S.inputMoney}
            style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicmedico">
          <Form.Label>Forma de Pagamento</Form.Label>
                <Form.Select style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }}>
                    <option>Selecione a forma de pagamento</option>
                    <Form.Label>Valor</Form.Label>
                    <option value="1">Pix</option>
                    <option value="2">Cartão de Débito</option>
                    <option value="3">Cartão de Credito</option>
                    <option value="3">Dinheiro</option>
                </Form.Select>
         </Form.Group>
      </div>
      
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Digite a data da consulta</Form.Label>
        <Form.Control type="date" placeholder="Digite o nome e sobrenome do paciente" />
      </Form.Group>
 */}
      <ButtonCase />

      </div>
      
    </Form>
  );
}