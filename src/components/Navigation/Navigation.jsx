import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import UserMenu from '../UserMenu';
import SwitcherButton from '../SwitcherButton';
import styles from './Navigation.module.scss';
import logo from '../../image/phone-book.png';

const Navigation = () => {
  const isAuthorized = useSelector(authSelectors.getIsAuthorized);

  return (
    <>
      <Navbar expand="lg" className={styles.navbar}>
        <SwitcherButton />
        <Link to="/" className={styles.navbarLogo}>
          <img src={logo} alt="phonebook logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={styles.navbarListBox}
        >
          <Nav className="mr-auto">
            {isAuthorized && (
              <NavLink
                className={styles.navbarLink}
                activeClassName={styles.navbarLinkActive}
                to="/contacts"
              >
                Contacts
              </NavLink>
            )}
          </Nav>
          {isAuthorized ? (
            <UserMenu />
          ) : (
            <Nav>
              <ul className={styles.navbarList}>
                <li>
                  <NavLink
                    className={styles.navbarLink}
                    activeClassName={styles.navbarLinkActive}
                    to="/register"
                  >
                    Sign up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={styles.navbarLink}
                    activeClassName={styles.navbarLinkActive}
                    to="/login"
                  >
                    Sign in
                  </NavLink>
                </li>
              </ul>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
