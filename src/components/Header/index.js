import React from 'react';
import Button from '../Button';
import Title from '../Title';


import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Title>Instituto Alpha</Title>
      <Button>hello</Button>
    </Container>
  );
}

export default Header;