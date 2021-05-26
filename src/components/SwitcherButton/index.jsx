import { useState } from 'react';
import { useDispatch } from 'react-redux';
import themeActions from '../../redux/theme/theme-actions';
import styles from './SwitcherButton.module.scss';

const SwitcherButton = () => {
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  const handleSwitchButton = e => {
    setCheck(e.target.checked);
    dispatch(themeActions(e.target.checked));
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
