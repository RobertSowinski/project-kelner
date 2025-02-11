import styles from './Home.module.scss';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <div className={styles.home}>
                <p>HOME</p>
            </div>
        </Container>
    );
}
export default Home;