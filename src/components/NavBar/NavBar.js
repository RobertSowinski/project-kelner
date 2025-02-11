import styles from './NavBar.module.scss';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <h6>Waiter.app</h6>
            <Link to="/">Home</Link>
        </nav>
    );
}
export default NavBar;