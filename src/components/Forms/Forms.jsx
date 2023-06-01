import S from './styles.module.scss'

// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ButtonCase from '../ButtonCase/ButtonCase'


export function Forms(props) {
   return(

    <Form className={S.container}>
      
      <div className={S.containerForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Paciente:</Form.Label>
        <Form.Control 
        className={S.input} 
        type="text" 
        placeholder="Digite o nome e sobrenome do paciente"
        style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }} />
      </Form.Group>

      <div className={S.doctor}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{props.labelProfessional}</Form.Label>
        <Form.Control 
        className={S.inputDoctor} 
        type="text" 
        placeholder={props.placeholderDoctor}
        style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{ props.nameEspecialty }</Form.Label>
        <Form.Control 
        className={S.inputDoctorEspc} 
        type="text" 
        placeholder={props.placeholderEspecialty}
        style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }} />
      </Form.Group>
      </div>



      <div className={S.money}>

         <Form.Group className="mb-3" controlId="formBasicmedico">
            <Form.Label>Valor:</Form.Label>
            <Form.Control 
            type="medico" 
            placeholder="Digite o valor da consulta" 
            className={S.inputMoney}
            style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicmedico">
          <Form.Label>Forma de Pagamento:</Form.Label>
                <Form.Select style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }}>
                    <option>Selecione a forma de pagamento</option>
                    <Form.Label>Valor</Form.Label>
                    <option value="1">Pix</option>
                    <option value="2">Cartão de Débito</option>
                    <option value="3">Cartão de Credito</option>
                    <option value="3">Dinheiro</option>
                    <option value="3">Outro</option>
                </Form.Select>
         </Form.Group>
      </div>
    
      <ButtonCase nameBtn='Cadastrar'
      title='Consulta Cadastrada' />
      </div>
      
    </Form>
  );
}