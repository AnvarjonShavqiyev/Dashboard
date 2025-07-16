import styles from './Topbar.module.scss';
import { FiBell } from 'react-icons/fi';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { THEME } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleTheme } from '../../store/reducers/theme.reducer';
import { useEffect } from 'react';

const Topbar = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
      </div>

      <div className={styles.actions}>
        <button className={styles.themeToggle} onClick={handleChangeTheme}>
          {theme === THEME.DARK ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>

        <div className={styles.notification}>
          <FiBell className={styles.bellIcon} />
          <span className={styles.dot}></span>
        </div>

        <div className={styles.avatar}>
          <img src="https://i.pravatar.cc/40" alt="User Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
