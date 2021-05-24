import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import selectors from '../../redux/phonebook/phonebook-selectors';
import phonebookOperations from '../../redux/phonebook/phonebook-operations';
import styles from './ContactList.module.scss';
import Spinner from '../Spinner';

const ContactList = () => {
  const contacts = useSelector(selectors.getVisibleContacts);
  const loading = useSelector(selectors.getLoading);
  const error = useSelector(selectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContact());
  }, [dispatch]);

  const contactsToABC = contacts.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return (
    <>
      <div className={styles.spinnerBox}>{loading && <Spinner />}</div>
      {contacts.length !== 0 && (
        <ul className={styles.contactList}>
          {contactsToABC.map(({ id, name, number }) => (
            <li className={styles.listItem} key={id}>
              <div>
                <span className={styles.listItemName}>{name}</span>
                <span className={styles.listItemNumber}>{number}</span>
              </div>
              <Button
                variant="secondary"
                className={styles.listItemDeleteButton}
                onClick={() => dispatch(phonebookOperations.deleteContact(id))}
              >
                delete
              </Button>
            </li>
          ))}
        </ul>
      )}
      {error && (
        <p className={styles.error_message}>
          Server do not response! <br />
          Please, reload page or try later.
        </p>
      )}
    </>
  );
};

export default ContactList;
