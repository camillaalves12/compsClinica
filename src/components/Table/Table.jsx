import S from './styles.module.scss'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';

export function Table() {
    return(
    <>
    <div className={S.container}>
      <div className={S.container_search_and_create}>
         <Form className={S.search}>
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
              style={{outline:'none', boxShadow:'none', border:'1px solid #cdcdcd' }}
            />
            <BiSearch className={S.iconSearch} />
         </Form>
         <Link to='/create_consult'>
          <Button  variant="primary" className={S.input}>+ Criar nova consulta</Button>
         </Link>
      </div>
      <div className={S.divTable}>
         <table className={S.table}>
            <thead>
                  <tr>
                     <th className={S.th_thead}>Paciente</th>
                     <th className={S.th_thead}>Médico</th>
                     <th className={S.th_thead}>Valor</th>
                     <th className={S.th_thead}>Forma de pagamento</th>
                     <th className={S.th_thead}>Data</th>
                  </tr>
            </thead> 
               <tbody>
                  <tr>
                     <td >Camilla Alves</td>
                     <td >João Mendes</td>
                     <td >250,00</td>
                     <td >Cartão de crédito</td>
                     <td >24/05/2023</td>
                  </tr>

                  <tr>

                     <td >Victoria</td>
                     <td >Victor Alves</td>
                     <td >350,00</td>
                     <td >Cartão de crédito</td>
                     <td >20/05/2023</td>
                  </tr>
                  <tr>
                     <td >Eloiza</td>
                     <td >Carla</td>
                     <td >150,00</td>
                     <td >Cartão de débito</td>
                     <td >20/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>
                  <tr>
                     <td >Vera</td>
                     <td >Carla</td>
                     <td >250,00</td>
                     <td >Pix</td>
                     <td >23/05/2023</td>
                  </tr>

               </tbody>
         </table>
      </div>
    </div>
    </>
    )
}