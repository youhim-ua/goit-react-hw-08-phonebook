import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.lds_ellipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
