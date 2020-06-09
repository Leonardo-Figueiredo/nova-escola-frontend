import React from 'react';

import whiteLogo from '../../assets/white-logo.svg';

import { Container } from '../../components/Container';
import { Header, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={whiteLogo} alt="Nova Escola" />

        <div>
          <strong>Gerenciamento de Cliente</strong>
        </div>
      </Header>

      <Content>a</Content>
    </Container>
  );
};

export default Home;
