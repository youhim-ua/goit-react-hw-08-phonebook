import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.signInUser({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={styles.contactsForm}>
        <label className={styles.label}>
          Email
          <br />
          <input
            className={styles.input}
            type="email"
            name="email"
            required
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
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
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </label>
        <Button variant="primary" className={styles.addButton} type="submit">
          Sign in
        </Button>
      </form>
    </Container>
  );
};

export default Login;
