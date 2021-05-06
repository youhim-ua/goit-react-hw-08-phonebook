import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from '../../redux/phonebook/phonebook-selectors';
import contactsOperations from '../../redux/phonebook/phonebook-operations';
import styles from './ContactList.module.scss';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, loading, onDeleteContact, error } = this.props;

    return (
      <>
        {loading && (
          <div className={styles.lds_ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <ul className={styles.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.listItem} key={id}>
              <span>{name}</span>:
              <span className={styles.number}>{number}</span>
              <button
                className={styles.deleteButton}
                onClick={() => onDeleteContact(id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
        {error && (
          <p className={styles.error_message}>
            Server do not response! <br />
            Please, reload page or try later.
          </p>
        )}
      </>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacts(state),
  loading: selectors.getLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContact()),
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
