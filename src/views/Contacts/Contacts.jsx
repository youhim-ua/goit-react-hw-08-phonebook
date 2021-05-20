import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from '../../redux/phonebook/phonebook-selectors';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

const Contacts = ({ contacts }) => {
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

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});

export default connect(mapStateToProps)(Contacts);
