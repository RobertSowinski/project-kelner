import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTableInAPI } from '../redux/tablesRedux';

const useTableForm = (table, navigate) => {
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

  useEffect(() => {
    if (!table) {
      navigate('/'); // Redirect to homepage if table is not found
    }
  }, [table, navigate]);

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

  const handlePeopleChange = (event) => {
    let newPeople = event.target.value;
    if (isNaN(newPeople) || newPeople === '') {
      return;
    }
    newPeople = parseInt(newPeople, 10);
    if (newPeople < 0) newPeople = 0;
    if (newPeople > seats) newPeople = seats;
    setPeople(newPeople);
  };

  const handleSeatsChange = (event) => {
    let newSeats = event.target.value;
    if (isNaN(newSeats) || newSeats === '') {
      return;
    }
    newSeats = parseInt(newSeats, 10);
    if (newSeats < 0) newSeats = 0;
    if (newSeats > 10) newSeats = 10;
    setSeats(newSeats);
    if (people > newSeats) setPeople(newSeats);
  };

  const handleBillChange = (event) => {
    let newBill = event.target.value;
    if (isNaN(newBill) || newBill === '') {
      return;
    }
    newBill = parseFloat(newBill);
    if (newBill < 0) newBill = 0;
    setBill(newBill);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTable = {
      id: table.id,
      name: table.name,
      status,
      people,
      seats,
      bill,
    };
    dispatch(updateTableInAPI(updatedTable));
    navigate('/');
  };

  return {
    status,
    people,
    seats,
    bill,
    handleStatusChange,
    handlePeopleChange,
    handleSeatsChange,
    handleBillChange,
    handleSubmit,
  };
};

export default useTableForm;
