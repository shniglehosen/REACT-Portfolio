import React, { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
import './App.css';



function App() {
  const [pages] = useState([
    {
      name: 'About',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Contact',
    },
    {
      name: 'Resume',
    },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <div className='background'>
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    </div>
  );
}

export default App;