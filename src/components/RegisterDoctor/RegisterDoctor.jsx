import S from './styles.module.scss'
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ButtonCase from '../ButtonCase/ButtonCase'
import { Header } from '../Header/Header';

export function RegisterDoctor(props) {
return(
    <>
    <Form className={S.container}>
      
    <div className={S.containerForm}>
    <h2 style={{ marginBottom:'1.5rem'}}>{props.title}</h2>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nome completo:</Form.Label>
        <Form.Control
        required
        className={S.input} 
        type="text" 
        style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Especialidade:</Form.Label>
        <Form.Control
        required
        className={S.inputDoctorEspc} 
        style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd', marginBottom:'1rem' }} />
    </Form.Group>

    
    <ButtonCase nameBtn='Cadastrar'
    title='Doutor Cadastrado!!'/>
    </div>
    </Form>
    </>
)
}