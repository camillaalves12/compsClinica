import S from './styles.module.scss'

import Form from 'react-bootstrap/Form';


export function Scheduling() {
   return(
      <>
      <Form className={S.container}>
      
         <div className={S.containerForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                  required
                  className={S.inputDoctor} 
                  type="date" 
                  style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Paciente:</Form.Label>
               <Form.Control 
               className={S.input} 
               type="text" 
               style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }} />
            </Form.Group>
         </div>

      </Form>
      </>
   )
}
