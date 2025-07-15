import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import { EMPTY_STRING, routes } from '../../constants/intdex';
import { MdMenuOpen, MdOutlineMenu } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id="sidebar-toggle" className={styles.toggle} />
      <aside className={styles.sidebar}>
        <label htmlFor="sidebar-toggle" className={styles.toggleButton}>
          <MdMenuOpen className={styles.menuOpen} />
          <MdOutlineMenu className={styles.menuCollapsed} />
        </label>
        <nav className={styles.nav}>
          {routes.map((route) => (
            <NavLink
              key={route.route}
              to={route.route}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : EMPTY_STRING}`
              }
            >
              <span className={styles.icon}>{route.icon}</span>
              <span className={styles.label}>{route.title}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
