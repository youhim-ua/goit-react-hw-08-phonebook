import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './Login.module.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSaveData = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.signIn(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <form onSubmit={this.handleSubmit} className={styles.contactsForm}>
          <label className={styles.label}>
            Email
            <br />
            <input
              className={styles.input}
              type="email"
              name="email"
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
            Sign in
          </Button>
        </form>
      </Container>
    );
  }
}

Login.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  ),
};

const mapDispatchToProps = dispatch => ({
  signIn: ({ email, password }) =>
    dispatch(
      authOperations.signInUser({
        email,
        password,
      }),
    ),
});

export default connect(null, mapDispatchToProps)(Login);
