import S from './styles.module.scss'

import { HiOutlineLogout } from 'react-icons/hi';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Header(){

    return (
      <div className={S.navBar}>
      <Navbar bg="light" expand="lg" className={S.navBarItens}>
        <Container fluid >
          <Navbar.Brand href="#">Clínica tal</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Consultas</Nav.Link>
              <Nav.Link href="#action2">Painel de Administrativo</Nav.Link>
            </Nav>
          <Nav className={S.logout}>
            <Nav.Link className={S.Username}>Olá, fulana</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <HiOutlineLogout className={S.iconLogout}/>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      </div>
    );
  }
  
   