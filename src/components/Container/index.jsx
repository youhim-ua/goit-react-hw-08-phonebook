import { Component } from 'react';
import styles from './Container.module.scss';

class Container extends Component {
  render() {
    const { children } = this.props;

    return <section className={styles.container}>{children}</section>;
  }
}

export default Container;
