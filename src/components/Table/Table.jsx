
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import { Form, Button } from 'react-bootstrap';
import S from './styles.module.scss'; 

export function Table() {

   const dados = [
      { index: 1, paciente: 'João', profissional: 'Marcos', especialidade:'Obtetra', valor: 150, forma_de_pagamento: 'pix', data:23 },
      { index: 2, paciente: 'João', profissional: 'Marcos', especialidade:'Obtetra', valor: 150, forma_de_pagamento: 'pix', data:23 },
      { index: 3, paciente: 'Maria', profissional: 'Gisele', especialidade:'Obtetra', valor: 150, forma_de_pagamento: 'pix', data:23 },
      { index: 4, paciente: 'Pedro', profissional: 'Antonio', especialidade:'Obtetra', valor: 150, forma_de_pagamento: 'pix', data:23 },
      { index: 5, paciente: 'Pedro', profissional: 'Antonio', especialidade:'Obtetra', valor: 150, forma_de_pagamento: 'pix', data:23 },
      { index: 6, paciente: 'Pedro', profissional: 'Antonio', especialidade:'Obtetra', valor: 150, forma_de_pagamento: 'pix', data:23 },
    ];
  
  const Tabela = ({ dados }) => {
    return (
      <table className={S.table}>
        <thead>
          <tr>
            <th className={S.th_thead}>Paciente</th>
            <th className={S.th_thead}>Profissional</th>
            <th className={S.th_thead}>Especialidade</th>
            <th className={S.th_thead}>Valor</th>
            <th className={S.th_thead}>Forma de pagamento</th>
            <th className={S.th_thead}>Data</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td>{item.paciente}</td>
              <td>{item.profissional}</td>
              <td>{item.especialidade}</td>
              <td>{item.valor}</td>
              <td>{item.forma_de_pagamento}</td>
              <td>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  Tabela.propTypes = {
    dados: PropTypes.arrayOf(
      PropTypes.shape({
        paciente: PropTypes.string.isRequired,
        profissional: PropTypes.string.isRequired,
        especialidade: PropTypes.string.isRequired,
        valor: PropTypes.number.isRequired,
        data: PropTypes.string.isRequired,
      })
    ).isRequired,
  };


  return (
    <>
      <div className={S.container}>
        <div className={S.container_search_and_create}>
          <Form className={S.search}>
            <Form.Control
              type="search"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Search"
              style={{ outline: 'none', boxShadow: 'none', border: '1px solid #cdcdcd' }}
            />
            <BiSearch className={S.iconSearch} />
          </Form>
          <div>
            <Link to="/create_consult">
              <Button variant="primary" className={S.input}>
                + Criar nova consulta
              </Button>
            </Link>
            <Link to="/create_exam">
              <Button variant="primary" className={S.input} style={{ margin: '5px', background: '#fff', color: '#0d6efd' }}>
                + Criar novo exame
              </Button>
            </Link>
          </div>
        </div>

        <div className={S.divTable}>
          {dados.length > 0 ? (
            <Tabela dados={dados} />
          ) : (
            <p>Nenhum dado disponível.</p>
          )}
        </div>
      </div>
    </>
  );
}
