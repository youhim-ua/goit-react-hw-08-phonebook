import { connect } from 'react-redux';
import { filterContact } from '../../redux/phonebook/phonebook-actions';
import styles from './Filter.module.scss';

function Filter({ filter, filterContact }) {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name
      <br />
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={filterContact}
      />
    </label>
  );
}

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  filterContact: ({ target: { value } }) => dispatch(filterContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
