import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './UserMenu.module.scss';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();

  return (
    <div className={styles.userBox}>
      <p>{`Hello, ${name}`}</p>
      <Button
        variant="primary"
        type="button"
        onClick={() => dispatch(authOperations.signOutUser())}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
