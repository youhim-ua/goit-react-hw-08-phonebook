import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../redux/phonebook/phonebook-actions';
import selectors from '../../redux/phonebook/phonebook-selectors';
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
        autoComplete="off"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  filterContact: ({ target: { value } }) =>
    dispatch(actions.filterContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
