import { Component } from 'react';
import styles from './ContactList.module.scss';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

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
}

export default ContactList;
