
import { useState } from 'react';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [pages] = useState([
    {
      name: 'about me'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    },
    {
      name: 'contact'
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div className="App">
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Header>
      <Footer />

    </div>
  );
}

export default App;
