import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ children }) => (
  <header className={styles.header}>{children}</header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
