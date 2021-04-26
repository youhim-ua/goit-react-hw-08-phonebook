import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import styles from './ContactList.module.scss';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.listItem} key={id}>
          <span>{name}</span>:<span className={styles.number}>{number}</span>
          <button
            className={styles.deleteButton}
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getVisibleContacts = (allContacts, filter) => {
  const formattedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(formattedFilter),
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state;
  const visibleContacts = getVisibleContacts(contacts, filter);
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
