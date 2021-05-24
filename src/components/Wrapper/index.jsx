import PropTypes from 'prop-types';
import styles from './Wrapper.module.scss';

const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
