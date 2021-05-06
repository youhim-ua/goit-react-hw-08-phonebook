import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Container.module.scss';

class Container extends Component {
  render() {
    const { children } = this.props;

    return <section className={styles.container}>{children}</section>;
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
