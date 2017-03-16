import React from 'react';

import Header from './../layout/Header'
import Container from './../layout/Container'
import Row from './../layout/Row'

import CategoryListContainer from './../containers/CategoryListContainer'

import './App.css';

const App = () =>
  <div>
    <Header />
    <Container>
      <Row>
        <CategoryListContainer />
      </Row>
  </Container>
  </div>;

export default App;
