import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    const { name, number } = this.state;
    const user = { id: uuidv4(), name, number };
    this.props.onSubmit(user);
    this.setState({ name: '', number: '' });
  };

  alertExistUser = () => {
    const { contacts } = this.props;
    const result = contacts.some(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase(),
    );
    if (result) alert(`${this.state.name} already exist!`);
    return result;
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
        <button
          className={styles.addButton}
          type="submit"
          disabled={this.alertExistUser()}
        >
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
