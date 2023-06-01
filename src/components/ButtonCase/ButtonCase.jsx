import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import S from './styles.module.scss'

function ButtonCase(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className={S.aa}>
      <Button variant="primary" onClick={handleShow} className={S.buttonCase} type='reset'>
        {props.nameBtn}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pode prosseguir para o painel de consultas.</Modal.Body>
        
        {/* <Modal.Footer> */}
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}

        {/* TEM QUE FAZER UMA VALIDAÇÃO!! SE CASO OS CAMPOS ESTEJAM VAZIOS!! */}

      </Modal>

    </div>
    </>
  );
}

export default ButtonCase;