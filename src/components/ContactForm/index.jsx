import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import contactsOperations from '../../redux/phonebook/phonebook-operations';
import selectors from '../../redux/phonebook/phonebook-selectors';
import styles from './ContactForm.module.scss';
import notes from '../../utilities/pnotyfy.js';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectors.getAllContacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(elem => elem.name === name)) {
      notes.noteErrorInRange(name);
      reset();
      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactsForm}>
      <label className={styles.label}>
        Name
        <br />
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </label>
      <label className={styles.label}>
        Number
        <br />
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          value={number}
          onChange={({ target: { value } }) => setNumber(value)}
        />
      </label>
      <Button variant="primary" className={styles.addButton} type="submit">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
