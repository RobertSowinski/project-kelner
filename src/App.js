import { Container } from 'react-bootstrap';
import './styles/global.scss';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesRedux';
import Table from './components/Table/Table';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTables());
  }, [dispatch]);
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/table/:id" element={<Table />}/> {/* Dynamic route for table details */}
        </Routes>
      </Container>
      <Footer/>
    </main>
  )
}

export default App;
