import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'Oguzhan',
      phone_number: '123123',
    },
    {
      fullname: 'Burak',
      phone_number: '321312',
    },
    {
      fullname: 'Dogukan',
      phone_number: '345345',
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;