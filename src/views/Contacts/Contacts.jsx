import { useSelector } from 'react-redux';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

const Contacts = () => {
  const contacts = useSelector(phonebookSelectors.getAllContacts);

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length !== 0 && <h2>Contacts</h2>}
        {contacts.length !== 0 && <Filter />}
        <ContactList />
      </div>
    </Container>
  );
};

export default Contacts;
