import { Container } from 'react-bootstrap';
import './styles/global.scss';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

// <Route path="/list/:listId" element={<List/>}/>
const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          
        </Routes>
      </Container>
      <Footer/>
    </main>
  )
}

export default App;
