import { useSelector, useDispatch } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import phonebookSelectors from '../../redux/phonebook/phonebook-selectors';
import styles from './Filter.module.scss';

const Filter = () => {
  const filter = useSelector(phonebookSelectors.getFilter);

  const dispatch = useDispatch();

  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <br />
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={({ target: { value } }) =>
          dispatch(phonebookActions.filterContact(value))
        }
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
