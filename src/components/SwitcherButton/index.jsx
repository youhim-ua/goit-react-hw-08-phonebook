import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import themeActions from '../../redux/theme/theme-actions';
import styles from './SwitcherButton.module.scss';

const SwitcherButton = () => {
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const { value } = JSON.parse(localStorage.getItem('NightTheme'));
    setCheck(value);
    dispatch(themeActions(value));
  }, [dispatch]);

  const handleSwitchButton = e => {
    setCheck(e.target.checked);
    dispatch(themeActions(e.target.checked));
    localStorage.setItem(
      'NightTheme',
      JSON.stringify({ value: e.target.checked }),
    );
  };

  return (
    <>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={check}
          onChange={e => handleSwitchButton(e)}
        />
        <span className={styles.slider}></span>
      </label>
    </>
  );
};

export default SwitcherButton;
