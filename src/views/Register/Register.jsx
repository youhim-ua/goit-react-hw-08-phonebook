import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './Register.module.scss';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSaveData = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.signUp(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Container>
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
              autoComplete="off"
              value={name}
              onChange={this.handleSaveData}
            />
          </label>
          <label className={styles.label}>
            Email
            <br />
            <input
              className={styles.input}
              type="email"
              name="email"
              pattern="([a-zA-Z0-9]+(?:[._+-][a-zA-Z0-9]+)*)@([a-zA-Z0-9]+(?:[.-][a-zA-Z0-9]+)*[.][a-zA-Z]{2,})"
              required
              value={email}
              onChange={this.handleSaveData}
            />
          </label>
          <label className={styles.label}>
            Password
            <br />
            <input
              className={styles.input}
              type="password"
              name="password"
              required
              value={password}
              onChange={this.handleSaveData}
            />
          </label>
          <Button variant="primary" className={styles.addButton} type="submit">
            Sign up
          </Button>
        </form>
      </Container>
    );
  }
}

Register.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  ),
};

// const mapStateToProps = state => ({
//   contacts: selectors.getAllContacts(state),
// });

const mapDispatchToProps = dispatch => ({
  signUp: ({ name, email, password }) =>
    dispatch(
      authOperations.signUpUser({
        name,
        email,
        password,
      }),
    ),
});

export default connect(null, mapDispatchToProps)(Register);
