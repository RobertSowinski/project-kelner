import styles from './Home.module.scss';
import { Container } from 'react-bootstrap';
import List from '../List/List';

const Home = () => {
    return (
        <Container>
            <div className={styles.home}>
                <List />
            </div>
        </Container>
    );
}
export default Home;