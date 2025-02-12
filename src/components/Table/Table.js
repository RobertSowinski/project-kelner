import styles from './Table.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import useTableForm from '../../hooks/useTableForm';
import { Spinner } from 'react-bootstrap';

const Table = () => {
  const { id } = useParams();
  const { tables, loading } = useSelector(state => state.table);
  const table = tables.find(table => table.id === id);
  const navigate = useNavigate();

  const {
    status,
    people,
    seats,
    bill,
    handleStatusChange,
    handlePeopleChange,
    handleSeatsChange,
    handleBillChange,
    handleSubmit,
  } = useTableForm(table, navigate);

  if (loading) {
    return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
  }

  if (!table) {
    return <h2>Table not found</h2>;
  }

  const isBusy = status === 'busy';
  const billClass = isBusy ? '' : styles.hidden;

  return (
    <form className={styles.table} onSubmit={handleSubmit}>
      <h1 className={styles.title}>{table.name}</h1>
      <div>
        <span>Status: </span>
        <select value={status} name="status" onChange={handleStatusChange}>
          <option value="free">Free</option>
          <option value="reserved">Reserved</option>
          <option value="busy">Busy</option>
          <option value="cleaning">Cleaning</option>
        </select>
      </div>
      <div>
        <span>People: </span>
        <TextInput value={people} onChange={handlePeopleChange} />
        <span> / </span>
        <TextInput value={seats} onChange={handleSeatsChange} />
      </div>
      <div>
        <span className={`${styles['bill-span']} ${billClass}`}>Bill: </span>
        <span>$</span><TextInput className={`${styles.bill} ${billClass}`} value={bill} onChange={handleBillChange} />
      </div>
      <div>
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
};

export default Table;