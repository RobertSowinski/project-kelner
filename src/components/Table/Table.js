import styles from './Table.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import { updateTableStatus } from '../../redux/actions'; // Import your action

const Table = () => {
    const { id } = useParams();
    const tables = useSelector(state => state.table);
    const table = tables.find(table => table.id === id);
    const dispatch = useDispatch();

    const [status, setStatus] = useState(table ? table.status : '');
    const [people, setPeople] = useState(table ? table.people : 0);
    const [seats, setSeats] = useState(table ? table.seats : 0);
    const [bill, setBill] = useState(table ? table.bill : 0);

    useEffect(() => {
        if (table) {
            setStatus(table.status);
            setPeople(table.people);
            setSeats(table.seats);
            setBill(table.bill);
        }
    }, [table]);

    const handleStatusChange = (event) => {
        const newStatus = event.target.value;
        setStatus(newStatus);

        if (newStatus === 'cleaning' || newStatus === 'free') {
            setPeople(0);
        }

        if (newStatus === 'busy') {
            setBill(0);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch(updateTableStatus(id, status));
        // Dispatch other updates if needed
    };

    if (!table) {
        return <h2>Table not found</h2>;
    }

    const isBusy = status === 'busy';
    const billClass = isBusy ? '' : 'hidden';

    return (
        <form className={styles.table} onSubmit={handleSubmit}>
            <h1 className={styles.title}>{table.name}</h1>
            <span>Status: </span>
            <select value={status} name="status" onChange={handleStatusChange}>
                <option value="free">Free</option>
                <option value="reserved">Reserved</option>
                <option value="busy">Busy</option>
                <option value="cleaning">Cleaning</option>
            </select>
            <div>
                <span>People: </span>
                <TextInput value={people} onChange={(e) => setPeople(e.target.value)} />
                <span> / </span>
                <TextInput value={seats} onChange={(e) => setSeats(e.target.value)} />
                <span className={`bill-span ${billClass}`}>Bill: </span>
                <TextInput className={`bill ${billClass}`} value={bill} onChange={(e) => setBill(e.target.value)} />
            </div>
            <Button type="submit">Update</Button>
        </form>
    );
};

export default Table;