import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="repository">
          <img
            src="https://avatars2.githubusercontent.com/u/6543699?s=460&u=6e6a80b3ef0b6d3cb8be4c4e47bf73f0330a4b22&v=4"
            alt="Reimon Ferreira"
          />
          <div>
            <strong>rocketseat unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
