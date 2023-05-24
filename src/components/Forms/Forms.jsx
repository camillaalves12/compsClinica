import S from './styles.module.scss'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function Forms() {
   return(
    <Form className={S.container}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Paciente</Form.Label>
        <Form.Control type="email" placeholder="Digite o nome e sobrenome do paciente" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
