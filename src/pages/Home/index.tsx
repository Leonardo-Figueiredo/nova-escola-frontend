/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useState, FormEvent } from 'react';

import api from '../../services/api';
import dateFormatter from '../../utils/dateFormatter';

import whiteLogo from '../../assets/white-logo.svg';
import redLogo from '../../assets/nova-escola-logo.svg';
import foundationLogo from '../../assets/lemann-logo.svg';

import { Container } from '../../components/Container';
import { Header, Content, Form, Footer } from './styles';
import ClientList from '../../components/ClientList';

interface Client {
  id: number;
  nome: string;
  email: string;
  dataDeNascimento: Date;
  formattedDate: string;
}

const Home: React.FC = () => {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState<Date>(new Date());
  const [newClient, setNewClient] = useState<Client>();
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);

  const handleInputName = useCallback((event) => {
    setName(event.target.value);
  }, []);
  const handleInputEmail = useCallback((event) => {
    setEmail(event.target.value);
  }, []);
  const handleInputDate = useCallback((event) => {
    setDate(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      async function createClient(): Promise<void> {
        try {
          setError(false);
          const response = await api.post('/cliente', {
            nome,
            email,
            dataDeNascimento: date,
          });

          const client: Client = response.data;

          client.formattedDate = dateFormatter(client.dataDeNascimento);

          setNewClient(client);
          setSucces(true);
        } catch {
          setError(true);
          setSucces(false);
        }
      }

      createClient();
    },
    [date, nome, email],
  );

  return (
    <Container>
      <Header>
        <img src={whiteLogo} alt="Nova Escola" />

        <div>
          <strong>Gerenciamento de Cliente</strong>
        </div>
      </Header>

      <Content>
        <section>
          <ClientList newClient={newClient} />
        </section>

        <section>
          <Form onSubmit={handleSubmit}>
            <h2>Novo Cliente</h2>

            {succes && (
              <h4>Cliente cadastrado com sucesso, lista atualizada!</h4>
            )}
            {error && <h4>Erro no cadastro de cliente.</h4>}

            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome Completo"
              onChange={handleInputName}
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={handleInputEmail}
            />

            <label htmlFor="date">Data de Nascimento</label>
            <input type="date" name="date" onChange={handleInputDate} />

            <button type="submit">Cadastrar</button>
          </Form>
        </section>
      </Content>

      <Footer>
        <img src={redLogo} alt="Nova Escola" />
        <img src={foundationLogo} alt="Fundação Lemann" />
      </Footer>
    </Container>
  );
};

export default Home;
