/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useCallback, FormEvent } from 'react';

import { BsPerson } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineCalendar } from 'react-icons/ai';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import dateFormatter from '../../utils/dateFormatter';
import api from '../../services/api';

import { Container, Form, Input, List, Footer } from './styles';

interface Client {
  id: number;
  nome: string;
  email: string;
  dataDeNascimento: Date;
  formattedDate: string;
}

interface ListProps {
  newClient?: Client;
}

const ClientList: React.FC<ListProps> = ({ newClient }: ListProps) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [total, setTotal] = useState<number>();
  const [clientId, setClientId] = useState('');
  const [list, setList] = useState(false);
  const [pagina, setPagina] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadClients(): Promise<void> {
      const response = await api.get('cliente', {
        params: {
          pagina,
        },
      });

      const formattedClients: Client[] = response.data.lista.map(
        (client: Client) => ({
          ...client,
          formattedDate: dateFormatter(client.dataDeNascimento),
        }),
      );

      setTotal(response.data.total);

      setClients(formattedClients);

      setList(false);
    }
    loadClients();
  }, [list, pagina, newClient]);

  const listClients = useCallback(() => {
    setList(true);
  }, []);

  const pageIncrementor = useCallback(() => {
    setPagina(pagina + 1);
  }, [pagina]);

  const pageDecrementor = useCallback(() => {
    const newPage = pagina <= 1 ? 1 : pagina - 1;

    setPagina(newPage);
  }, [pagina]);

  const handleInputChange = useCallback((event) => {
    setClientId(event.target.value);
  }, []);

  const handleSearchClient = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      async function loadClients(): Promise<void> {
        try {
          setError(false);
          const response = await api.get(`cliente/${clientId}`);

          const client: Client = response.data;

          client.formattedDate = dateFormatter(client.dataDeNascimento);

          setClients([]);

          setClients([client]);
          setClientId('');
        } catch {
          setError(true);
        }
      }
      loadClients();
    },
    [clientId],
  );

  return (
    <Container>
      <Form onSubmit={handleSearchClient}>
        <label>Pesquisar Cliente</label>
        <Input>
          <input
            name="search"
            id="search"
            placeholder="ID"
            autoComplete="nope"
            onChange={handleInputChange}
            value={clientId}
          />

          <button type="submit">Buscar</button>
        </Input>

        {error && <h4>Cliente não encontrado, verifique o ID.</h4>}
      </Form>

      <p>
        Total de Clientes:
        {total}
      </p>
      <List>
        {clients.map((client) => (
          <li key={client.id}>
            <p># {client.id}</p>

            <div>
              <strong>
                <BsPerson size={20} />
                {client.nome}
              </strong>
              <p>
                <AiOutlineMail size={20} />
                {client.email}
              </p>
            </div>

            <p>
              <AiOutlineCalendar size={20} />
              {client.formattedDate}
            </p>
          </li>
        ))}
      </List>

      <Footer>
        <button type="button" onClick={pageDecrementor}>
          <FaArrowLeft size={20} />
        </button>
        <button type="button" onClick={listClients}>
          Listar
        </button>
        <button type="button" onClick={pageIncrementor}>
          <FaArrowRight size={20} />
        </button>
      </Footer>
    </Container>
  );
};

export default ClientList;
