import { Component } from 'react';
import styles from './Filter.module.scss';

class Filter extends Component {
  handleFilterValue = ({ target: { value } }) => {
    this.props.onSearch(value);
  };

  render() {
    const { filter } = this.props;

    return (
      <label className={styles.filterLabel}>
        Find contacts by name
        <br />
        <input
          className={styles.filterInput}
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilterValue}
        />
      </label>
    );
  }
}

export default Filter;
