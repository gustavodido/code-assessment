import React from 'react';

import Header from './../layout/Header'
import Container from './../layout/Container'
import Row from './../layout/Row'
import Column from './../layout/Column'

import CategoryListContainer from './../containers/CategoryListContainer'
import CategoryResultContainer from './../containers/CategoryResultContainer'

import './App.css';

const App = () =>
  <div>
    <Header />
    <Container>
      <Row>
        <Column size={6}>
          <CategoryListContainer />
        </Column>
        <Column size={6}>
          <CategoryResultContainer />
        </Column>
      </Row>
  </Container>
  </div>;

export default App;
