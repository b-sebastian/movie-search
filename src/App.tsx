import React from 'react';
import Container from '@material-ui/core/Container';
import Header from "./components/Header/Header";
import AppRouter from "./components/Router/Router";

import './App.css';

const App = () => {
  return (
    <Container maxWidth="lg" className='container'>
        <AppRouter headerComponent={<Header/>}/>
    </Container>
  );
}

export default App;
