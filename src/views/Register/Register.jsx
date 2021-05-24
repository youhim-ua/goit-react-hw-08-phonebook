import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';
import Container from '../../components/Container';
import styles from './Register.module.scss';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(authOperations.signUpUser({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={styles.contactsForm}>
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
            onChange={({ target: { value } }) => setName(value)}
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
          Sign up
        </Button>
      </form>
    </Container>
  );
};

export default Register;
