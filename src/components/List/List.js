import styles from './List.module.scss';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const List = () => {
    const tables = useSelector(state => state.table);

    return (
        <ul className={styles.list}>
            <h1 className={styles.title}>All tables</h1>
            {tables.map(table => (
                <li key={table.id}>
                    <div className={styles.wrapper}>
                        <h1>{table.name}</h1>
                        <span className={styles.status}>Status:</span><span>{table.status}</span>
                    </div>
                    <Button><Link to={`/table/${table.id}`}>Show more</Link></Button>
                </li>
            ))}
        </ul>
    );
}

export default List;