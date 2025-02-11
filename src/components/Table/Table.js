import styles from './Table.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';


const Table = () => {
    return (
        <form className={styles.table}>
            <h1 className={styles.title}>table1</h1>
            <span>Status: </span>
            <select name="status">
                <option value="Free">Free</option>
                <option value="Reserved">Reserved</option>
                <option value="Busy">Busy</option>
                <option value="Cleaning">Cleaning</option>
            </select>
            <div>
                <span>People: </span>
                <TextInput name="people" />
                <span> / </span>
                <TextInput name="seats" />
                <span>Bill: </span>
                <TextInput name="bill" />
            </div>
            
            <Button>Update</Button>
        </form>
    );
};

export default Table;