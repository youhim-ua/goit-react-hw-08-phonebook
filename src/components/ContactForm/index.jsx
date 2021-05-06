import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import contactsOperations from '../../redux/phonebook/phonebook-operations';
import selectors from '../../redux/phonebook/phonebook-selectors';
import styles from './ContactForm.module.scss';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSaveName = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name } = this.state;
    const { contacts } = this.props;
    if (contacts.some(elem => elem.name === name)) {
      alert(`${name} is already in contacts`);
      this.reset();
      return;
    }
    this.props.contactSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={styles.contactsForm}>
        <label className={styles.label}>
          Name
          <br />
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleSaveName}
          />
        </label>
        <label className={styles.label}>
          Number
          <br />
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleSaveName}
          />
        </label>
        <button className={styles.addButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  contactSubmit: ({ name, number }) =>
    dispatch(
      contactsOperations.addContact({
        name,
        number,
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
