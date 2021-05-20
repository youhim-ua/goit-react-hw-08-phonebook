import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import authOperations from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './UserMenu.module.scss';

const UserMenu = ({ name, onSignOut }) => {
  return (
    <div className={styles.userBox}>
      <p>{`Hello, ${name}`}</p>
      {/* <button type="button" onClick={onSignOut}>
        Logout
      </button> */}
      <Button variant="primary" type="button" onClick={onSignOut}>
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = dispatch => ({
  onSignOut: () => dispatch(authOperations.signOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
